import axios from '@/axios'

export function login(params){
  return axios.post('/passport/login', params)
}