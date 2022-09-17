import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { Provider as ReduxProvide } from 'react-redux'

import 'antd/dist/antd.css'

import '../styles/globals.css'

import { ConfigProvider } from 'antd'

import PageTheme from 'components/PageTheme'
import { client } from 'setup/apollo'
import store from 'store'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <ReduxProvide store={store}>
        <ConfigProvider componentSize="large">
          <PageTheme>
            <Component {...pageProps} />
          </PageTheme>
        </ConfigProvider>
      </ReduxProvide>
    </ApolloProvider>
  )
}

export default App
