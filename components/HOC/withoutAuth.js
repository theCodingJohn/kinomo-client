import Redirect from "./Redirect";

const withoutAuth = (Component) => {
  const Auth = (props) => {
    if (typeof window !== "undefined") {
      const isAuthenticated = window.localStorage.getItem("loggedUser");

      if (!!isAuthenticated) {
        const user = JSON.parse(isAuthenticated).username;

        return <Redirect to={`/users/${user}`} />;
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

export default withoutAuth;
