import React, { useState, useEffect } from "react";

function App() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")

      .then((response) => response.json())

      .then((data) => setUsers(data));

  }, []);

  function handleSubmit(event) {

    event.preventDefault();

    if(name === "" || email === "" || password === "") {

      setMessage("Please fill all fields");

    }

    else {

      setMessage("Registration Successful");
    }
  }

  return (

    <div style={styles.container}>

      <div style={styles.card}>

        <h1>Registration Form</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Register
          </button>

        </form>

        <h3>{message}</h3>

        <h2>Fetched API Data</h2>

        {users.slice(0,5).map((user) => (

          <p key={user.id}>
            {user.name}
          </p>

        ))}

      </div>

    </div>
  );
}

const styles = {

  container: {

    textAlign: "center",

    backgroundColor: "white",

    minHeight: "100vh",

    padding: "40px"
  },

  card: {

    width: "400px",

    margin: "auto",

    padding: "30px",

    border: "1px solid black",

    borderRadius: "10px",

    backgroundColor: "white"
  },

  input: {

    width: "90%",

    padding: "10px",

    margin: "10px"
  },

  button: {

    padding: "10px 15px",

    backgroundColor: "#0d6efd",

    color: "white",

    border: "none",

    borderRadius: "5px",

    cursor: "pointer"
  }
};

export default App;