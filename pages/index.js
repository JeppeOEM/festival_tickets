import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Component } from "react";
import Participants from "./components/checkout/Participants";
import StyleSheet from "../styles/component/landing.module.scss";

// export default function Home() {
//   return <></>;
// }

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:8080/bands");
  const data = await res.json();
  return {
    props: {
      bands: data,
    },
  };
};

const Bands = ({ bands }) => {
  return (
    <>
      <h2>all bands</h2>
      <div className={StyleSheet.container} key={bands.id}>
        {bands.map(
          (bands, index) =>
            index < 12 && (
              <div key={bands.id}>
                <h3 className={StyleSheet.b} key={bands.id}>
                  {bands.name}
                </h3>
              </div>
            )
        )}
        <Link href={"/Form"}></Link>
      </div>
      <Link href="./tickets">
        <button>buy tickets</button>
      </Link>
    </>
  );
};

export default Bands;
