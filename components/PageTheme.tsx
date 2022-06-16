import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useEffectOnce } from 'react-use'
import { changeAntdTheme } from 'dynamic-antd-theme'

import type { FCWithChildren } from 'types'
import color from 'constants/color'
import { getPageTypeTheme } from 'helpers/utils'

const PageTheme: FCWithChildren = ({ children }) => {
  const router = useRouter()

  useEffectOnce(() => {
    const pageType = getPageTypeTheme(router.asPath)

    const primaryColor = color.primary[pageType]

    changeAntdTheme(primaryColor)
  })

  useEffect(() => {
    const handleRouteChange = (path: string) => {
      const pageType = getPageTypeTheme(path)

      const primaryColor = color.primary[pageType]

      changeAntdTheme(primaryColor)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <>{children}</>
}

export default PageTheme
