import styled from '@emotion/styled'

import color from 'constants/color'

import type { Color } from 'constants/color'

type Size = 'headline' | 'body' | 'small' | number

interface TextProps {
  /**
   * Size number is base on rem unit
   */
  size?: Size
  color?: keyof Color
}

const getTextFontBySize = (size?: Size) => {
  if (size == null) {
    return '1rem'
  }

  switch (size) {
    case 'headline':
      return '1.5rem'
    case 'body':
      return '1rem'
    case 'small':
      return '0.875rem'
    default:
      return `${size}rem`
  }
}

const Text = styled.span<TextProps>((props) => {
  const colorKey = props.color || 'black'
  const fontSize = getTextFontBySize(props.size)

  return {
    display: 'block',
    margin: 0,
    color: color[colorKey],
    fontSize,
  }
})

export default Text
