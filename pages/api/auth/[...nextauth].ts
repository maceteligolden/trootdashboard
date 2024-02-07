import NextAuth, { Account, Session, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import axios from "axios";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign-in form (e.g., 'Sign in with...')
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: any):Promise<any> {
        try{

            const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}`
            return await axios.post(`${BASE_URL}/auth/login`, {
                ...credentials
            })
        } catch(err){
            return null
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login", 
  },
  secret: process.env.NEXT_PUBLIC_SECRET,
  callbacks: {
    async jwt({ token, account }: {token: any, 
        account: any}): Promise<JWT> {
        if (account) {
            token.accessToken = account.access_token
        }
        return token
    },
    async session({ session, token, user }: {session: any, token: any, user: any}): Promise<Session>{
        session.user = user
        return session
    },
    async redirect({url, baseUrl}: {url: string, baseUrl: string}): Promise<any> {
      // Customize the redirect URL upon a successful sign-in
      return Promise.resolve(url.startsWith(baseUrl) ? url : baseUrl);
    },
  },
});
