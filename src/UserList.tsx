import { useAllUsersQuery } from "./generated/graphql";

interface user {
  username: string;
}
function UsersList() {
  const { data, loading, error } = useAllUsersQuery();

  if (loading) return <> "Submitting..." </>;
  if (error) return <>`Submission error! ${error}`</>;

  const user: any = (
    <>
      {data &&
        data.users &&
        data.users.map(({ username }: user) => (
          <div key={username}>
            <p>{username}</p>
          </div>
        ))}
    </>
  );

  return <div>{data && data.users && user} </div>;
}

export default UsersList;
