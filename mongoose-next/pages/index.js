import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Link from "next/link";
//import fetch from "isomorphic-unfetch";
import { Button, Card } from "semantic-ui-react";

export default function Home({ notes }) {
  return (
    <Layout>
      <main className={styles.main}>
        <div className="notes-container">
          <h1>Notes</h1>
          <div className="grid wrapper">
            {notes.map((note) => {
              return (
                <div key={note._id}>
                  <Card>
                    <Card.Content>
                      <Card.Header>
                        <Link href={`/${note._id}`}>
                          <a>{note.title}</a>
                        </Link>
                      </Card.Header>
                    </Card.Content>
                    <Card.Content extra>
                      <Link href={`/${note._id}`}>
                        <Button primary>View</Button>
                      </Link>
                      <Link href={`/${note._id}/edit`}>
                        <Button primary>Edit</Button>
                      </Link>
                    </Card.Content>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:3000/api/notes`);
  const { data } = await res.json();

  return {
    props: { notes: data }, // will be passed to the page component as props
  };
}
