import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        contrasena: { label: "Contraseña", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        });
        const user = await res.json();
        
        if (res.ok && user) {
          return user;  // Devuelve solo los datos del usuario.
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt", // Usando JWT para la sesión
    maxAge: 1000 * 24 * 60 * 60, // La sesión durará 30 días
    updateAge: 24 * 60 * 60,   // Actualiza la cookie cada 24 horas
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;  // Guarda los datos del usuario en el JWT
      }

      // Si no tiene expiración, establecerla a 30 días (o puedes ajustarlo a más tiempo si lo prefieres)
      if (!token.exp) {
        token.exp = Math.floor(Date.now() / 1000) + (1000 * 24 * 60 * 60); // Expiración de 30 días
      }

      return token;
    },
    async session({ session, token }) {
      session.user = token.user;  // Pasa los datos del usuario a la sesión
      return session;
    },
  },
  pages: {
    signIn: "/login",  // Redirige a la página de login si no está autenticado
  },
});
