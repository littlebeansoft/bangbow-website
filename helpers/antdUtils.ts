interface SelectOption {
  label: string
  value: string | number | null
}

export const searchOptionsByLabel = (input: string, option?: SelectOption) => {
  if (typeof option?.label === 'string') {
    return option.label.toLowerCase().includes(input)
  }

  return false
}
