import type { FCWithChildren } from 'types'

import styled from '@emotion/styled'
import Image from 'next/image'

import Text from 'components/Text'

interface SectionHeaderProps {
  icon: string
  textPosition?: string
}

const SectionHeader: FCWithChildren<SectionHeaderProps> = ({
  icon,
  textPosition,
  children,
}) => {
  return (
    <SectionHeaderContainer>
      <Image
        src={icon}
        alt="Bangbow services"
        layout="responsive"
        width="100%"
        height="100%"
      />

      <SectionHeaderTitle
        textPosition={textPosition}
        size="headline"
        color="white"
        weight="bold"
      >
        {children}
      </SectionHeaderTitle>
    </SectionHeaderContainer>
  )
}

export default SectionHeader

const SectionHeaderContainer = styled.div`
  position: relative;
  margin-bottom: 32px;

  > span {
    margin: 0 -16px !important;

    & > img {
      width: 100%;
      height: auto;
    }
  }
`

const SectionHeaderTitle = styled(Text)<{ textPosition?: string }>`
  padding: 0 32px;
  position: absolute;
  bottom: ${({ textPosition }) => textPosition || '30px'};
  transform: translateY(-50%);
  margin: 0;
  text-align: center;
`
