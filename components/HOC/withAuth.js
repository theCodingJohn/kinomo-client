import Redirect from "./Redirect";

const withAuth = (Component) => {
  const Auth = (props) => {
    if (typeof window !== "undefined") {
      const isAuthenticated = window.localStorage.getItem("loggedUser");

      if (!isAuthenticated) {
        return <Redirect to="/auth/signin" />;
      }
    }

    return <Component {...props} />;
  };

  if (Component.getStaticProps) {
    Auth.getStaticProps = Component.getStaticProps;
  }

  if (Component.getServerSideProps) {
    Auth.getServerSideProps = Component.getServerSideProps;
  }

  return Auth;
};

export default withAuth;
