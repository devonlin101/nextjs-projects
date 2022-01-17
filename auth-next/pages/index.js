import Layout from "../components/layout";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data, status } = useSession();
  console.log(data, status);
  return (
    <Layout>
      <h1>a day without laugher is a day wasted</h1>
      <h4>status: {status}</h4>
      {data ? (
        <>
          <p>
            <strong>data.user.name:</strong>
            &nbsp;&nbsp;&nbsp;{data.user.name}
          </p>
          <p>
            <strong>data.user.email:</strong> &nbsp;&nbsp;&nbsp;
            {data.user.email}
          </p>
          <p>
            <strong>data.user.image:</strong>&nbsp;&nbsp;&nbsp;{data.user.image}
          </p>
          <p>
            <strong>data.expires:</strong>&nbsp;&nbsp;&nbsp; {data.expires}
          </p>
          <p>
            <strong>data.accessToken:</strong>&nbsp;&nbsp;&nbsp;{" "}
            {data.accessToken}
          </p>
        </>
      ) : (
        <p>
          This is an example site to demonstrate how to use{" "}
          <a href={`https://next-auth.js.org`}>NextAuth.js</a> for
          authentication.
        </p>
      )}
    </Layout>
  );
}
