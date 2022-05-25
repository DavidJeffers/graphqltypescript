import { useGetUserMessagesQuery } from "./generated/graphql";
import { useEffect } from "react";

interface propsInterface {
  username: string;
}
interface message {
  body: string;
}
function Messages({ username }: propsInterface) {
  const { loading, error, data, refetch } = useGetUserMessagesQuery({
    variables: { username },
  });

  useEffect(
    function getMessageOn() {
      async function getMessages() {
        await refetch({ username: username });
      }
      getMessages();
    },
    [refetch, username]
  );

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
