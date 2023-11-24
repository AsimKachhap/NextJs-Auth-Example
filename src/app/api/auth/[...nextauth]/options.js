import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const options = {
  providers: [
    GitHubProvider({
      profile(profile) {
        console.log("Profile GitHub: ", profile);

        let userRole = "GitHub User";
        if (profile?.email === "asim26k@gmail.com") {
          userRole = "admin";
        }
        return {
          ...profile,
          role: userRole,
        };
      },
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    GoogleProvider({
      profile(profile) {
        console.log("Profile Google: ", profile);

        let userRole = "Google User";
        if (profile?.email === "asim26k@gmail.com") {
          userRole = "admin";
        }
        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },

      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
};
