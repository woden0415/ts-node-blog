export const login = (username: string, password: string): Promise<any> => {
  if (username === '王冬' && password === '123') {
    return new Promise((resolve) => {
      resolve(true)
    })
  }
  return new Promise((resolve) => {
    resolve(false)
  })
}
