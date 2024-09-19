const trimText = (text: string): string => {
  return text
    .replace(/```\w+/g, '')
    .replace(/```/g, '')
    .replace(/### [\w\s]+:/, '')
}

export { trimText }
