import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import Adapters from 'next-auth/adapters'

import prisma from '../../../src/graphql/prisma-client'
import formatImageUrl from '../../../src/shared/functions/format-image-url'

const providerImageUrl = (provider, profile) => {
  if (provider === 'discord') return profile.image_url
  if (provider === 'twitter') return profile.profile_image_url_https
  if (provider === 'google') return profile.picture
  return null
}

const authHandler = (req, res) =>
  NextAuth(req, res, {
    providers: [
      Providers.Discord({
        clientId: process.env.DISCORD_ID,
        clientSecret: process.env.DISCORD_SECRET
      }),
      Providers.Twitter({
        clientId: process.env.TWITTER_ID,
        clientSecret: process.env.TWITTER_SECRET
      }),
      Providers.Google({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET
      })
    ],
    adapter: Adapters.Prisma.Adapter({
      prisma,
    }),
    debug: process.env.NODE_ENV !== 'production',
    secret: process.env.AUTH_SECRET,
    callbacks: {
      signIn: async (user, account, profile) => {
        const providerImage = providerImageUrl(account.provider, profile)

        const { image, thumbnail } = formatImageUrl(providerImage)

        if (user && user.username && user.image !== image) {
          await prisma.user.update({
            where: {
              id: user.id
            },
            data: {
              image,
              thumbnail,
            }
          })
        }

        return true
      },
      session: async (session, user) => {
        return {
          ...session,
          user: {
            ...session.user,
            id: user.id,
            username: user.username,
            thumbnail: user.thumbnail
          }
        }
      }
    },
    pages: {
      newUser: '/onboarding',
      signIn: '/login'
    }
  })

export default authHandler
