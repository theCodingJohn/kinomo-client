import "../styles/globals.scss";
import { AuthContextProvider } from "../contexts/auth/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
