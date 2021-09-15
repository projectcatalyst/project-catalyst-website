const formatAccountLink = (type, id) => {
  if (type === 'linkedin') return `https://linkedin.com/in/${id}`
  if (type === 'github') return `https://github.com/${id}`
  if (type === 'twitter') return `https://twitter.com/${id}`
  if (type === 'telegram') return `https://t.me/${id}`
  return null
}

export default formatAccountLink