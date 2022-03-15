import React from "react";
import Head from "next/head";
import Link from "next/link";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  return (
    <nav>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <ButtonGroup variant="text" aria-label="text button group">
        <Link href="/">
          <Button
            className="bold"
            data-active={isActive("/")}
            sx={{ color: "#000" }}
          >
            Blog
          </Button>
        </Link>
        <Link href="/drafts">
          <Button data-active={isActive("/drafts")} sx={{ color: "#000" }}>
            Drafts
          </Button>
        </Link>
      </ButtonGroup>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Link href="/signup">
          <Button data-active={isActive("/signup")}>Signup</Button>
        </Link>
        <Link href="/create">
          <Button data-active={isActive("/create")}>Create draft</Button>
        </Link>
      </ButtonGroup>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          padding: 2rem;
          align-items: center;
        }
        button[data-active="true"] {
          color: gray;
        }
      `}</style>
    </nav>
  );
};

export default Header;
