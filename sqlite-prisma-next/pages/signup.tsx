import React, { useState } from "react";
import Router from "next/router";
import Link from "next/link";
import Layout from "../components/Layout";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
const SignUp: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { name, email };
      await fetch(`http://localhost:3000/api/user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <div className="page">
        <form onSubmit={submitData}>
          <Typography variant="h4" gutterBottom component="div">
            Signup User
          </Typography>
          <TextField
            autoFocus
            onChange={(e) => setName(e.target.value)}
            label="Name"
            type="text"
            value={name}
            fullWidth
          />
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            label="Email address"
            type="email"
            value={email}
            fullWidth
            sx={{ margin: "1rem auto" }}
          />
          <Button variant="contained" disabled={!name || !email} type="submit">
            Sign Up
          </Button>
          <Link href="/">
            <a className="back">or Cancel</a>
          </Link>
        </form>
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 3rem;
          display: flex;
          justify-content: center;
        }

        .back {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  );
};

export default SignUp;

