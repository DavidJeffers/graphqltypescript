import { useGetUserMessagesQuery } from "./generated/graphql";

interface propsInterface {
  username: string;
}
interface message {
  body: string;
}
function Messages({ username }: propsInterface) {
  const { loading, error, data } = useGetUserMessagesQuery({
    variables: { username },
  });

  if (loading) return <>Loading...</>;
  if (error) return <>Error : {error} </>;

  const messages: any = (
    <>
      {data &&
        data.user &&
        data.user.messages &&
        data.user.messages.map((message: message) => (
          <div key={message.body}>
            <p>{message.body}</p>
          </div>
        ))}
    </>
  );
  return <> {data && data.user && messages}</>;
}

export default Messages;
