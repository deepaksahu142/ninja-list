import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>Oops...</h1>
      <p>That page can not be found</p>
      <p>
        Go back to the <Link href="/">Home Page</Link>
      </p>
    </div>
  );
};

export default NotFound;
