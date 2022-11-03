import React from "react";
import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";

// run in build time.
// This runs before the component is rendered
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      ninjas: data,
    },
  };
};

const Ninjas = ({ ninjas }) => {
  console.log("ninjas", ninjas);
  return (
    <div>
      <h1>Ninjas page22:</h1>
      {ninjas &&
        ninjas.map((item) => (
          <Link href={`ninjas/` + item.id} key={item.id}>
            <h3>
              <a className={styles.single}>{item.name} </a>
            </h3>
          </Link>
        ))}
    </div>
  );
};

export default Ninjas;
