import userService from "../../services/user.service";

import Layout from "../../components/Layout";

const profile = ({ user }) => {
  return (
    <Layout>
      <div>
        <h1>Profile</h1>
        {user?.username}
      </div>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const { username } = context.params;
  const user = await userService.getUser(username);
  let notFound = false;

  if (!user) {
    context.res.statusCode = 404;
    notFound = true;
  }

  return {
    props: { user: user },
    notFound,
  };
};

export default profile;
