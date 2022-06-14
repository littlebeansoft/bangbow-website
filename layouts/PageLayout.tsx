import styled from '@emotion/styled'
import Container from 'components/Container'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'

import type { FCWithChildren } from 'types'

const PageLayout: FCWithChildren = ({ children }) => {
  return (
    <PageLayoutContainer>
      <Navbar />

      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        {children}
      </Container>

      <Footer />
    </PageLayoutContainer>
  )
}

export default PageLayout

const PageLayoutContainer = styled.div`
  position: relative;
  min-height: 100vh;
`
