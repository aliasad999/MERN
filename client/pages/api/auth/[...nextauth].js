import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/libs/connectdb";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      type: "credentials",
      async authorize(credentials) {
        if (
          credentials.email === "usmanugly@gmail.com" &&
          credentials.password === "memelord123"
        ) {
          return {
            name: "usman",
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async redirect() {
      return "/dashboard";
    },
  },
  adapter: MongoDBAdapter(clientPromise),
};

export default NextAuth(authOptions);
