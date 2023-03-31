import Head from 'next/head'
import { NextSeo } from 'next-seo'
import styled from '@emotion/styled'

import Container from 'components/Container'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'

import type { FCWithChildren } from 'types'
import FooterRetail from 'components/Footer/FooterRetail'

type Page = 'agent' | 'factory'

interface PageLayoutProps {
  title: string
  description?: string
  page?: Page
  back?: boolean
}

const PageLayoutRetail: FCWithChildren<PageLayoutProps> = ({
  title,
  description,
  page = 'factory',
  children,
  back,
}) => {
  return (
    <PageLayoutContainer>
      <NextSeo title={title} description={description} />

      <Head>
        <title>{title}</title>

        <meta name="description" content={description} />

        <link
          rel="shortcut icon"
          href={page === 'factory' ? '/icon-factory.svg' : '/icon-agent.svg'}
        />
      </Head>

      <Navbar back={back} />

      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        {children}
      </Container>

      <FooterRetail />
    </PageLayoutContainer>
  )
}

export default PageLayoutRetail

const PageLayoutContainer = styled.div`
  position: relative;
  min-height: 100vh;
`
