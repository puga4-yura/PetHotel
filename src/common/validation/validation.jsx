export const required = value => {
  if (value) return undefined
  return "запомните поле"
}