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

  if (!user) context.res.statusCode = 404;

  return {
    props: { user: user },
  };
};

export default profile;
