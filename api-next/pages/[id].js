import { useRouter } from "next/router";
import Link from "next/link";

export default function () {
  const router = useRouter();
  const { id } = router.query;
  console.log(router);
  return (
    <>
      <p>Post: {id}</p>
      <Link href="/">
        <a>
          <strong>Home</strong>
        </a>
      </Link>
    </>
  );
}
