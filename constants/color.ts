export interface Color {
  primary: string
  black: string
  white: string
}

const color: Color = {
  primary: process.env.PRIMARY_COLOR || '#996DFF',
  black: '#000',
  white: '#fff',
}

export default color
