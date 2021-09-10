import React, { useRef, useState } from "react";

function CreateUser({ username, email, onChange, onCreate }) {
  return (
    <div>
      <input
        name="username"
        placeholder="your account"
        onChange={onChange}
        value={username}
        style={{ margin: "20px 0" }}
      />
      <input
        name="email"
        placeholder="your Email"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>Apply</button>
    </div>
  );
}

function UserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

const User = ({ user }) => (
  <div>
    <b>
      {user.id}. {user.username}
    </b>
    <span> 💌 {user.email}</span>
  </div>
);

const Inputs = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "luloo",
      email: "loo@gmail.com",
    },
    {
      id: 2,
      username: "san",
      email: "dontknow@gmail.com",
    },
    {
      id: 3,
      username: "rwant",
      email: "rw@gmail.com",
    },
  ]);
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, user]);
    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  };
  return (
    <div>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </div>
  );
};

export default Inputs;
