export default NextAuth({
    secret: process.env.NEXTAUTH_SECRET, // This should be defined in .env.local
    providers: [
      // Your authentication providers here
    ],
  });
  