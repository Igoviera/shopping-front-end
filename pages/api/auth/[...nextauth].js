import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials";

export const options = {
    providers: [
        CredentialsProvider({
            name: 'credentials',

            credentials: {
                email: { label: "email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                try {
                    const res = await fetch('http://localhost:8000/auth/login', {
                        method: 'POST',
                        body: JSON.stringify(credentials),
                        headers: { 'Content-Type': 'application/json' }
                    })

                    const user = await res.json()
                    if (user) {
                        return user
                    } else {
                        return null
                    }
                } catch (error) {
                    console.error(error)
                    return null
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if(user) {
                token.accessToken = user.access_token
            }
            return token
        },
        async session({ session, token, user }) {
            session.accessToken = token.accessToken
            return session
        }
    }
}
export default NextAuth(options);
