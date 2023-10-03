interface PageColorTheme {
  agent: string
  factory: string
}

export interface Color {
  primary: PageColorTheme
  black: PageColorTheme
  white: PageColorTheme
}

const color: Color = {
  primary: {
    factory: '#58D9B7',
    agent: '#58D9B7',
  },
  black: {
    factory: '#000',
    agent: '#000',
  },
  white: {
    factory: '#fff',
    agent: '#fff',
  },
}

export default color
