import React, { useState } from "react";
import { useAddUserMutation } from "./generated/graphql";

function AddUser() {
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
  });
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [addUser, { data, loading, error }] = useAddUserMutation();

  function handleChange(evt: any) {
    const { name, value } = evt.target;
    setFormData((data) => ({ ...data, [name]: value }));
  }
  function handleSubmit(evt: any) {
    evt.preventDefault();
    try {
      addUser({
        variables: {
          username: formData.username,
          first_name: formData.first_name,
          last_name: formData.last_name,
        },
      });
    } catch (err) {
      console.log(err);
    }
    setHasSubmitted(true);
  }
  if (loading) return <>"Submitting..."</>;
  if (error) return <>`Submission error! ${error.message}`</>;
  console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="username"
        />
        <input
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          placeholder="first name"
        />
        <input
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          placeholder="last name"
        />
        <button>Add User</button>
      </form>
      {hasSubmitted && <p>Added {data && data.createUser.username}</p>}
    </div>
  );
}

export default AddUser;
