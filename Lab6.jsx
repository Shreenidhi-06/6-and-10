import { useState } from "react";
import "./App.css";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const [error, setError] = useState("");

  // 
  const [data, setData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (name === "" || email === "" || password === "") {
      setError("All fields are required");
    } else if (!email.includes("@") || !email.includes(".")) {
      setError("Enter valid email");
    } else if (password.length < 6) {
      setError("Password must be 6 characters");
    } else {
      setError("");

      // Save data
      setData({
        name,
        email,
        password,
      });

      alert("Form Submitted Successfully");

      console.log(name, email, password);
    }
  };

  return (
    <div className="box">
      <form onSubmit={handleSubmit}>
        <h2>React Form</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={name === "" && error ? "red" : ""}
        />

        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={email === "" && error ? "red" : ""}
        />

        <input
          type={show ? "text" : "password"}
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={password === "" && error ? "red" : ""}
        />

        <label>
          <input
            type="checkbox"
            onChange={() => setShow(!show)}
          />
          Show Password
        </label>

        <p>{error}</p>

        <button type="submit">Submit</button>
      </form>

      {/* Display Submitted Data */}
      {data && (
        <div className="result">
          <h3>Submitted Data</h3>

          <p>Name: {data.name}</p>

          <p>Email: {data.email}</p>

          <p>Password: {data.password}</p>
        </div>
      )}
    </div>
  );
}

export default App;
