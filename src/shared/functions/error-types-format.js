const formatErrorTypes = error =>
  error?.graphQLErrors.map(({ message, extensions }) =>
    ({ message, type: extensions?.exception?.type || null })) || []

export default formatErrorTypes