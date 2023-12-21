import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import db from '@/Utils/db'
import User from '@/models/users'
import bcrypt from 'bcryptjs'
import { redirect } from 'next/dist/server/api-utils'
import { useRouter } from 'next/navigation'
// import { sql } from '@vercel/postgres'
import { compare } from 'bcryptjs'
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        // const router = useRouter()
        // console.log(credentials?.email, credentials?.password)
        console.log({ credentials })
        await db.connect()
        let users = []
        users = await User.find()
        const user = users.find((item) => {
          return item.email == credentials.email
        })
        const pass = await compare(credentials?.password, user.password)
        console.log(pass)
        console.log(user.email)
        if (user._id) {
          return {
            _id: user._id,
            email: user.email,
          }
        }
        return null
      },
    }),
  ],
  // session: {
  //   strategy: 'jwt',
  // },
  pages: {
    signIn: '/signin',
  },
})

export { handler as GET, handler as POST }
// import NextAuth, { NextAuthOptions } from 'next-auth'
// import GitHubProvider from 'next-auth/providers/github'
// import CredentialsProvider from 'next-auth/providers/credentials'
// import User from '@/models/users'
// import db from '@/Utils/db'
// import bcrypt from 'bcryptjs'
// import { useRouter } from 'next/navigation'
// const router = useRouter()
// const authOptions = {
//   session: {
//     strategy: 'jwt',
//   },
//   providers: [
//     CredentialsProvider({
//       type: 'credentials',
//       credentials: {},
//       authorize(credentials, req) {
//         const { email, password } = credentials
//         //perform Other Logi
//         if (email !== 'tariq@gmail.com' || password !== '2345') {
//           return router.push('/')
//         }
//         // if everything is find
//         alert('Login Successfull')
//         // return { id: '2345', name: 'Tariq mahmood', email: 'tariq@gmail.com' }
//         router.push('/')
//       },
//     }),
//   ],
//   pages: {
//     signIn: '/api/auth/signin',
//   },
// }
// export const  NextAuthOptions = {
//  const authOptions = {
//   providers: [
//     // GitHubProvider({
//     //   clientId: process.env.GITHUB_ID,
//     //   clientSecret: process.env.GITHUB_SECRET,
//     // }),
//     CredentialsProvider({
//       // The name to display on the sign in form (e.g. 'Sign in with...')
//       name: 'Credentials',
//       // The credentials is used to generate a suitable form on the sign in page.
//       // You can specify whatever fields you are expecting to be submitted.
//       // e.g. domain, username, password, 2FA token, etc.
//       // You can pass any HTML attribute to the <input> tag through the object.
//       // credentials: {
//       //   username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
//       //   password: { label: 'Password', type: 'password' },
//       // },
//       credentials: {},
//       async authorize(credentials) {
//         const { email, password } = credentials

//         try {
//           await db.connect()
//           const user = await User.findOne({ email })

//           if (!user) {
//             return null
//           }

//           const passwordsMatch = await bcrypt.compare(password, user.password)

//           if (!passwordsMatch) {
//             return null
//           }

//           return user
//         } catch (error) {
//           console.log('Error: ', error)
//         }
//       },
//       // async authorize(credentials, req) {
//       //   // You need to provide your own logic here that takes the credentials
//       //   // submitted and returns either a object representing a user or value
//       //   // that is false/null if the credentials are invalid.
//       //   // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
//       //   // You can also use the `req` object to obtain additional parameters
//       //   // (i.e., the request IP address)
//       //   const res = await fetch('http://localhost:3000/signin', {
//       //     method: 'POST',
//       //     body: JSON.stringify(credentials),
//       //     headers: { 'Content-Type': 'application/json' },
//       //     body: JSON.stringify({
//       //       username: credentials?.username,
//       //       password: credentials?.password,
//       //     }),
//       //   })
//       //   const user = await res.json()
//       //   if (user) {
//       //     return user
//       //   } else {
//       //     return null
//       //   }
//       // },
//       ////////// End CredentialProvider///////////
//     }),
//   ],
//   // pages: {
//   // signIn: '/signin',
//   // signOut: '/signup',
//   // error: '/auth/error', // Error code passed in query string as ?error=
//   // verifyRequest: '/auth/verify-request', // (used for check email message)
//   // newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
//   session: {
//     strategy: 'jwt',
//   },
//   secret: process.env.NEXTAUTH_SECRET,
//   pages: {
//     signIn: '/signin',
//   },
// }
// const handler = NextAuth(authOptions)

// export { handler as GET, handler as POST }
// export default NextAuth(authOptions)

// import NextAuth from 'next-auth'
// const handler = NextAuth()
// export { handler as GET, handler as POST }
