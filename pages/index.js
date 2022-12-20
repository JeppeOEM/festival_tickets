import Head from "next/head";
import Link from "next/link";
import BandsLanding from "../components/BandsLanding";
import { Component } from "react";
import NavBooking from "../components/NavBooking";
import Footer from "../components/Footer";
import News from "../components/News";
import style from "../styles/component/landing.module.scss";
import ui from "../styles/component/ui.module.scss";

export default function Home({ bands }) {
  return (
    <>
      <Head>
        <title>Ragnarök - Home Page</title>
      </Head>

      <div className={style.topSec}>
        <video className={style.video} src="/BgVid.mp4" autoPlay muted loop />
        <NavBooking ass={"this"} />
        <div className={style.heading}>
          <h1>Ragnarök</h1>
          <Link href="./tickets">
            <button className={ui.button}>buy tickets</button>
          </Link>
        </div>
      </div>
      <News />
      <BandsLanding bands={bands} />
      <div className={style.botSec}>
        <div>
          <h3>REGULAR</h3>
          <ul>
            <li>you get ssssssss so cool</li>
            <li>you get asssss so cool</li>
            <li>you get somehting so cool</li>
            <li>you get somehting so cool</li>
          </ul>
        </div>
        <div>
          <h3>VIP</h3>
          <ul>
            <li>you get somehting even cooler</li>
            <li>you get somehting even cooler</li>
            <li>you get somehting even cooler</li>
            <li>you get somehting even cooler</li>
          </ul>
        </div>
      </div>
      <div className={style.newsLetter}>
        <h3>SUBSCRIBE TO THE NEWSLETTER</h3>
        <p>get the latset news about the line-up and the latest news about Ragnarök festival</p>
        <form>
          {/* <label>Newsletter</label> */}
          <input type="text" name="newsletter" placeholder=" TYPE YOUR EMAIL"></input>
          <button className={ui.button}>Subscribe</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const api = "https://festivalapi.fly.dev/";
  const local = "http://localhost:8080/";
  const res = await fetch(api + "bands");
  const data = await res.json();
  return {
    props: {
      bands: data,
    },
  };
};
