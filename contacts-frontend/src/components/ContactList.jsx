import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  const fetchContacts = async () => {
    const res = await axios.get(`http://localhost:3000/contacts?search=${search}`);
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, [search]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/contacts/${id}`);
      fetchContacts(); // refresh list
    } catch (err) {
      alert("Failed to delete contact.");
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>All Contacts</h2>

      <input
        type="text"
        style={styles.search}
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul style={styles.list}>
        {contacts.map((c) => (
          <li key={c.id} style={styles.card}>
            <div>
              <strong>{c.name}</strong><br />
              <span>{c.email}</span>
            </div>
            <button onClick={() => handleDelete(c.id)} style={styles.deleteButton}>Delete</button>
          </li>
        ))}
      </ul>

      <Link to="/" style={styles.backLink}>← Back to Home</Link>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "auto",
    paddingTop: "8vh",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  search: {
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginBottom: "20px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  card: {
    padding: "12px",
    border: "1px solid #eee",
    borderRadius: "6px",
    marginBottom: "12px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
    backgroundColor: "#fafafa",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deleteButton: {
    padding: "6px 12px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  backLink: {
    marginTop: "20px",
    display: "inline-block",
    color: "#007bff",
    textDecoration: "none",
    textAlign: "center",
    width: "100%",
  },
};
