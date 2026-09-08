import { useState } from "react";

function UserProfile() {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    throw new Error("Unable to load user profile!");
  }

  return (
    <div style={styles.card}>
      <img
        src="https://i.pravatar.cc/150?img=12"
        alt="User"
        style={styles.image}
      />

      <h2>Rahul Naitam</h2>

      <p>Email: rahul@example.com</p>

      <p>Role: Web Developer</p>

      <button onClick={() => setHasError(true)}>
        Simulate Error
      </button>
    </div>
  );
}

const styles = {
  card: {
    width: "350px",
    margin: "50px auto",
    padding: "25px",
    textAlign: "center",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },

  image: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
  },

  button: {
    padding: "10px 20px",
    cursor: "pointer",
  },
};

export default UserProfile;
