import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client'

const getClientURI = (type: string) => {
  switch (type) {
    default:
      return (
        process.env.NEXT_PUBLIC_CORE_ADMIN_ENDPOINT ||
        'https://kara-core-service.hooray.site/graphql/admin/v1.0'
      )
    case 'CORE':
      return (
        process.env.NEXT_PUBLIC_CORE_ADMIN_ENDPOINT ||
        'https://kara-core-service.hooray.site/graphql/admin/v1.0'
      )
    case 'CUSTOMER':
      return (
        process.env.NEXT_PUBLIC_CUSTOMER_SERVICE_ENDPOINT ||
        'https://kara-customer-service.hooray.site/graphql/client/v1.0'
      )
    case 'LABEL':
      return (
        process.env.NEXT_PUBLIC_LABEL_SERVICE_ENDPOINT ||
        'https://kara-label-service.hooray.site/graphql/client/v1.0'
      )
  }
}

const httpLink = new HttpLink({
  uri: (option): any => {
    const { clientType } = option.getContext()
    const uri = getClientURI(clientType)
    return uri
  },
})

const apolloClient = new ApolloClient({
  ssrMode: true,
  link: from([httpLink]),
  cache: new InMemoryCache({
    addTypename: false,
  }),
})

export default apolloClient
