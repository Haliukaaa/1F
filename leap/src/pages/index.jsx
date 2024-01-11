import React from "react";
import UserProfile from '@/components/UserProfile'
import styles from '@/styles/styles.module.css'

const styles = {
  root: {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "Open sans, sans-serif",
  },
  container: { margin: "30px 50px" },
  flex: { display: "flex" },
  rowWrap: { flexDirection: "row", flexWrap: "wrap" },
  gap50: { gap: 50 },
};



export default function Home() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <title>Dating app</title>
      </head>
      <body>
        <div
          className="container"
          style={{
            ...styles.flex,
            ...styles.gap50,
            ...styles.rowWrap,
            ...styles.container,
          }}
          id="container">
          <UserProfile />
        </div>
      </body>
    </html>
  );
}
