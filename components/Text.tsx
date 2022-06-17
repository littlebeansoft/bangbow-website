import styled from '@emotion/styled'

import color from 'constants/color'

import type { Color } from 'constants/color'

type Type = 'plain' | 'link'
type Page = 'agent' | 'factory'
type Align =
  | 'center'
  | 'end'
  | 'justify'
  | 'left'
  | 'match-parent'
  | 'right'
  | 'start'
type Size = 'headline' | 'body' | 'small' | number
type Weight = 'bold' | 'normal' | number

interface TextProps {
  /**
   * Size number is base on rem unit
   */
  size?: Size
  hidden?: boolean
  type?: Type
  align?: Align
  weight?: Weight
  color?: keyof Color
  block?: boolean
  page?: Page
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

const getTextFontWeight = (weight?: Weight) => {
  if (weight == null) {
    return 'normal'
  }

  if (typeof weight === 'number') {
    return '' + weight
  }

  return weight
}

const Text = styled.span<TextProps>((props) => {
  const colorKey = props.color || 'black'
  const fontSize = getTextFontBySize(props.size)
  const fontWeight = getTextFontWeight(props.weight)
  const page = props.page || 'factory'
  const type = props.type || 'plain'

  return {
    display: props.hidden ? 'none' : 'block',
    marginBottom: props.block ? 16 : 0,
    color: type === 'link' ? color.primary[page] : color[colorKey][page],
    fontSize,
    fontWeight,
    textAlign: props.align,
    textDecoration: type === 'link' ? 'underline' : '',
  }
})

export default Text
