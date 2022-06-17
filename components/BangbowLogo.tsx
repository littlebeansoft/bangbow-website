import type { FC } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'

import { getPageTypeTheme } from 'helpers/utils'

const BangbowLogo: FC = () => {
  const router = useRouter()

  const page = getPageTypeTheme(router.asPath)

  return (
    <Image
      src={page === 'factory' ? '/icon-factory.svg' : '/icon-agent.svg'}
      alt="Bangbow Logo"
      width={70}
      height={70}
    />
  )
}

export default BangbowLogo
