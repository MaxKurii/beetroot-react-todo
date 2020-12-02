
async function request({ url, method, ...config }) {
  const uri = `${process.env.REACT_APP_BASE_URL}${url}`
  const headers = config.headers || {};
  const body = config.body ? JSON.stringify(config.body) : undefined;

  const response = await fetch(uri, {
    method,
    body,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      ...headers,
    }
  });
  const data = await response.json();

  return data;
}

export {
  request
}