const errorFormat = error => {
  if (typeof error === 'string' || !error) 
    return error

  if (error.graphQLErrors && error.graphQLErrors.length) 
    return error.graphQLErrors[0].message

  if (error.message)
    return error.message

  return JSON.stringify(error)
}

export default errorFormat