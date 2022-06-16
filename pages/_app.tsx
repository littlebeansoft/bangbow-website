import type { AppProps } from 'next/app'

import 'antd/dist/antd.css'

import '../styles/globals.css'

import { ConfigProvider } from 'antd'

import PageTheme from 'components/PageTheme'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ConfigProvider componentSize="large">
      <PageTheme>
        <Component {...pageProps} />
      </PageTheme>
    </ConfigProvider>
  )
}

export default App
