export function startSession(token: string) {
  return sessionStorage.setItem('accessToken', token)
}

export function getSession() {
  return sessionStorage.getItem('accessToken')
}
