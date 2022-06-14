import type { FC } from 'react'

import styled from '@emotion/styled'
import Image from 'next/image'

import Text from 'components/Text'

export interface ServiceItem {
  id: number
  icon: string
  title: string
  description: string
}

interface ServiceProps {
  data: ServiceItem
}

const Service: FC<ServiceProps> = ({ data }) => {
  const { icon, title, description } = data

  return (
    <ServiceContainer>
      <Image src={icon} alt="Bangbow service" width={100} height={100} />

      <Text size="headline" weight={500}>
        {title}
      </Text>

      <Text size="small">{description}</Text>
    </ServiceContainer>
  )
}

export default Service

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  text-align: center;
`
