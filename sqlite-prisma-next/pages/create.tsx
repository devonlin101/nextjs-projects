import React, { useState } from "react";
import Layout from "../components/Layout";
import Router from "next/router";
import Link from "next/link";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const Draft: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { title, content, authorEmail };
      await fetch(`http://localhost:3000/api/post`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/drafts");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <div>
        <form onSubmit={submitData}>
          <Typography variant="h3" gutterBottom component="div">
            Create Draft
          </Typography>
          <TextField
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            variant="outlined"
            label="title"
            type="text"
            value={title}
            fullWidth
            sx={{ bgcolor: "#fff" }}
          />
          <TextField
            onChange={(e) => setAuthorEmail(e.target.value)}
            label="Author (email address)"
            type="text"
            value={authorEmail}
            fullWidth
            sx={{ bgcolor: "#fff", margin: "0.5rem auto" }}
          />
          <TextField
            multiline
            onChange={(e) => setContent(e.target.value)}
            label="Content"
            minRows={8}
            value={content}
            fullWidth
            sx={{ bgcolor: "#fff", margin: "0.5rem auto" }}
          />
          <Button
            variant="contained"
            disabled={!content || !title || !authorEmail}
            type="submit"
          >
            Create
          </Button>
          <Link href="/">
            <a>or Cancel</a>
          </Link>
        </form>
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        input[type="text"],
        textarea {
          width: 100%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
        }

        input[type="submit"] {
          background: #ececec;
          border: 0;
          padding: 1rem 2rem;
        }
        a {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  );
};

export default Draft;
