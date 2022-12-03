export interface UserAuthData {
  accountNonExpired: boolean
  accountNonLocked: boolean
  authdata: string
  authorities: {authority: string}[]
  credentialsNonExpired: boolean
  email: string
  enabled: boolean
  firstName: string
  id: number
  lastName: string
  memberId: string
  password: string
  role: string
  username: string
}
