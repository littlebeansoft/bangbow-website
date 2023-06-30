import type { AppProps } from 'next/app'
//import { ApolloProvider } from '@apollo/client'
import { Provider as ReduxProvide } from 'react-redux'
import { QueryClient, QueryClientProvider } from 'react-query'

import 'antd/dist/reset.css'

import '../styles/globals.css'

import { ConfigProvider } from 'antd'

import PageTheme from 'components/PageTheme'
//import { client } from 'setup/apollo'
import store from 'store'

const queryClient = new QueryClient()

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvide store={store}>
        <ConfigProvider
          componentSize="large"
          theme={{
            token: {
              fontFamily: 'Prompt',
            },
            components: {
              Input: {
                colorBorder: '#000000',
              },
              Select: {
                colorBorder: '#000000',
              },
              Checkbox: {
                colorBorder: '#000000',
              },
            },
          }}
        >
          <PageTheme>
            <Component {...pageProps} />
          </PageTheme>
        </ConfigProvider>
      </ReduxProvide>
    </QueryClientProvider>
  )
}

export default App
