import React, { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  return (

    <div style={styles.container}>

      <h1>React Counter Application</h1>

      <div style={styles.card}>

        <h2>Counter Value: {count}</h2>

        <button
          style={styles.button}
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>

        <button
          style={styles.button}
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>

        <button
          style={styles.button}
          onClick={() => setCount(0)}
        >
          Reset
        </button>

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

    width: "350px",

    margin: "auto",

    padding: "30px",

    border: "1px solid black",

    borderRadius: "10px",

    backgroundColor: "white"
  },

  button: {

    padding: "10px 15px",

    margin: "10px",

    backgroundColor: "#0d6efd",

    color: "white",

    border: "none",

    borderRadius: "5px",

    cursor: "pointer"
  }
};

export default App;