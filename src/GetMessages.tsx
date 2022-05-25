import { useState } from "react";
import Messages from "./Messages";

function GetMessages() {
  const [username, setUsername] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  function handleChange(evt: any) {
    const { value } = evt.target;
    setUsername(value);
  }

  function handleSubmit(evt: any) {
    evt.preventDefault();
    setHasSubmitted(true);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name={"username"}
          value={username}
          placeholder="Enter username..."
          onChange={handleChange}
        />
        <button >Find User's Messages!</button>
      </form>
      {hasSubmitted && <Messages username={username} />}
    </>
  );
}

export default GetMessages;
