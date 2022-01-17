import { useSession, getSession, signIn, signOut } from "next-auth/react";

function signin() {
  const { data: session, status } = useSession();
  console.log(session);
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <buttton onClick={() => signOut()}>Sign out</buttton>
      </>
    );
  }
  return (
    <div>
      Not signed in <br />
      <button onClick={() => signIn("google")}>
        Sign in with google account
      </button>
      <button onClick={() => signIn("twitter")}>
        Sign in with twitter account
      </button>
    </div>
  );
}

export default signin;
