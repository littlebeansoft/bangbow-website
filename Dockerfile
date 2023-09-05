#!/bin/bash
# Install dependencies only when needed
FROM node:18.17.0 AS builder
ARG ENV_FILE
WORKDIR /app
COPY package.json ./ 
COPY yarn.lock ./
RUN yarn install
COPY . .
RUN cp .env.example .env
RUN echo -e "${ENV_FILE}" >> .env
RUN yarn build

# Production image, copy all the files and run next
FROM node:18.17.0 AS runner
ARG DOCKER_IMAGE_TAG
WORKDIR /app
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
RUN echo "${DOCKER_IMAGE_TAG}" > ./public/docker-image.txt
COPY --chmod=775 --from=builder /app/docker-entrypoint.sh ./
EXPOSE 3000
ENV PORT 3000
ENTRYPOINT ["/app/docker-entrypoint.sh"]
CMD ["node_modules/.bin/next", "start"]