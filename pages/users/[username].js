import userService from "../../services/user.service";

const profile = ({ user }) => {
  return (
    <div>
      <h1>Profile</h1>
      {user?.username}
    </div>
  );
};

export default profile;

export const getServerSideProps = async (context) => {
  const { username } = context.params;
  const user = await userService.getUser(username);

  return {
    props: { user: user },
  };
};
