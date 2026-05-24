import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { prisma } from "./prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as NextAuthOptions["adapter"],
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST || "smtp.resend.com",
        port: Number(process.env.EMAIL_SERVER_PORT) || 465,
        auth: {
          user: process.env.EMAIL_SERVER_USER || "resend",
          pass: process.env.EMAIL_SERVER_PASSWORD || "",
        },
      },
      from: process.env.EMAIL_FROM || "noreply@qrflow.app",
    }),
  ],
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        (session.user as { id?: string; plan?: string }).id = user.id;
        (session.user as { id?: string; plan?: string }).plan = (user as { plan?: string }).plan ?? "free";
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    verifyRequest: "/verify",
  },
};
