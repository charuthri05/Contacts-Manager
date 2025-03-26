import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function AddContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email) return setError("Fields cannot be empty");
    if (!validateEmail(email)) return setError("Invalid email format");

    try {
      await axios.post("http://localhost:3000/contacts", { name, email });
      navigate("/list");
    } catch (err) {
      setError(err.response?.data?.errors?.[0] || "Error adding contact");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Add New Contact</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          style={styles.input}
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          style={styles.input}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" style={styles.button}>Add</button>
        {error && <p style={styles.error}>{error}</p>}
      </form>
      <Link to="/" style={styles.backLink}>← Back to Home</Link>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "auto",
    paddingTop: "10vh",
    textAlign: "center",
  },
  heading: {
    fontSize: "1.8rem",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginTop: "8px",
  },
  backLink: {
    marginTop: "20px",
    display: "inline-block",
    color: "#007bff",
    textDecoration: "none",
  },
};
