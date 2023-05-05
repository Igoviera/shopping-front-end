import { NextApiRequest, NextApiResponse } from 'next'
import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user
        token.accessToken = user
      }
      return Promise.resolve(token)
    },
    session: async ({ token, session }) => {
      if (token) {
        session.accessToken = token.accessToken as string
        session.user = token.accessToken
      }
      return Promise.resolve(session)
    }
  },
  pages: {
    signIn: '/login'
  },
  providers: [
    CredentialsProvider({
      authorize: async (credentials) => {
        if (credentials && credentials.email && credentials.password) {
          try {
            const user = await fetch('http://localhost:8000/auth/login', {
              method: 'POST',
              body: JSON.stringify(credentials),
              headers: { 'Content-Type': 'application/json' }
            }).then(async (data) => {
              return await data.json()
            })

            if (user.access_token) {
              return user
            } else {
              return null
            }
          } catch (error) {
            return null
          }
        }
      },
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      id: 'credentials'
    })
  ],
  secret: process.env.NEXTAUTH_SECRET
}

const Auth = (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, authOptions)

export default Auth
