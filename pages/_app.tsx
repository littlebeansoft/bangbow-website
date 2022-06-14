import type { AppProps } from 'next/app'

import 'antd/dist/antd.css'

import '../styles/globals.css'

import { ConfigProvider } from 'antd'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ConfigProvider componentSize="large">
      <Component {...pageProps} />
    </ConfigProvider>
  )
}

export default App
