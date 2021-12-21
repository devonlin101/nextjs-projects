import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export const getStaticProps = async () => {
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
  return {
    props: { users: data },
  };
};

export default function Home({ users }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>
        {users.map((user) => (
          <div className={styles.grid} key={user.id}>
            <Link href={`/${user.username}`}>
              <a className={styles.card}>
                <h2>{user.name} &rarr;</h2>
                <h3>{user.website}</h3>
                <p>{user.company.catchPhrase}</p>
              </a>
            </Link>
          </div>
        ))}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
