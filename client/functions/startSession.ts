export function startSession(token: string) {
  return sessionStorage.setItem('accessToken', token)
}

export function getSession() {
  const test = sessionStorage.getItem('accessToken')
  console.log(test);
  

  return sessionStorage.getItem('accessToken')
}
