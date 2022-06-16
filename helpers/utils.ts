export const getPageTypeTheme = (path: string) => {
  switch (path) {
    case '/agent':
    case '/agent-register':
      return 'agent'
    default:
      return 'factory'
  }
}
