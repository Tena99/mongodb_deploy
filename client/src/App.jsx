import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const API_LINK = import.meta.env.VITE_API_LINK;

  async function fetchUsers() {
    const response = await fetch(`${API_LINK}/users`);
    if (!response.ok) {
      console.warn("Response is not OK!");
    }
    const data = await response.json();
    console.log(data);
    setUsers(data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  async function handleUserOnClick() {
    const response = await fetch(`${API_LINK}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "John Doe",
        age: 29,
      }),
    });
    if (!response.ok) {
      console.warn("Response is not OK!");
    }
    fetchUsers();
    console.debug("Good!");
  }

  return (
    <div>
      <div>
        {users.map(({ _id, name, age }) => (
          <div key={_id}>
            <p>
              {name} ({age})
            </p>
          </div>
        ))}
      </div>

      <button onClick={handleUserOnClick}>add user</button>
    </div>
  );
}

export default App;
