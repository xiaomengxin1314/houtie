export function validEmail (value) {
  const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(value)
}

export function validTelephone (value) {
  const reg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
  return reg.test(value)
}
