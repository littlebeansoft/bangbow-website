export const getPageTypeTheme = (path: string) => {
  if (path.includes('agent')) {
    return 'agent'
  }

  return 'factory'
}
