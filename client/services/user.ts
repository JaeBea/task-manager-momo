
export const checkAuth = async (credentials: Object): Promise<Response> => {
  let res = await fetch('http://localhost:3100/api/auth/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/vnd.api+json'},
    body: JSON.stringify(credentials)
  });
  return res;
}

export const createUser = async (userData: Object): Promise<Response> => {
  let res = await fetch('http://localhost:3100/api/user/create', {
    method: 'POST',
    headers: {'Content-Type': 'application/vnd.api+json'},
    body: JSON.stringify({
      type: 'user',
        attributes: userData
    })
  });
  return res;
}
