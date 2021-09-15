import fetch from 'cross-fetch'

async function apiFetch(url = '', { method, data, headers, options })  {
  const response = await fetch(url, {
    method,
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      ... headers
    },
    ... options,
    body: JSON.stringify(data)
  })

  const json = await response.json()

  return {
    success: response.status >= 200 && response.status < 300,
    status: response.status,
    data: json
  }
}

export default apiFetch