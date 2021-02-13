import cookie from 'js-cookie'

/**
 * 设置cookie
 * @param {用户的信息} info 
 */
export function setCookie (info) {
  const arr = Object.entries(info)
  for(let i = 0; i < arr.length; i++){  
    cookie.set(arr[i][0],arr[i][1])
  }
  return true
}

/**
 * 获取用户的cookie
 */
export function getUserCookie () {
  return{
    username: cookie.get('username'),
    appkey: cookie.get('appkey'),
    role: cookie.get('role'),
    email: cookie.get('email'),
  }
}

/**
 * 删除用户的cookie
 */
export function removeUserCookie () {
  cookie.remove('username');
  cookie.remove('appkey');
  cookie.remove('role');
  cookie.remove('email');
  return true
}