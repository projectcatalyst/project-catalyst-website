import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'

const useUser = () => {
  const router = useRouter()

  const [session, loading] = useSession()

  if (loading || !session) return [null, loading]
  
  if (session && !session.user.username && router.pathname !== '/onboarding') {
    router.replace('/onboarding')
  }

  return [session.user, false]
}

export default useUser