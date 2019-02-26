export const uuid = () => {
  const s = []
  const hexDigits = '0123456789abcdef'
  for (let i = 0; i < 10; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4'
  s[19] = hexDigits.substr(8, 1)
  return s.join('')
}