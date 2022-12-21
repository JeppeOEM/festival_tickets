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
          <h1>Prepare for the battle of all times.</h1>
          <Link href="/tickets">
            <button className={ui.landingButton}>buy tickets</button>
          </Link>
        </div>
      </div>
      <News />
      <BandsLanding bands={bands} />
      <div className={style.botSec}>
        <div>
          <h3>REGULAR</h3>
          <ul>
            <li>Access to the festival area</li>
            <li>Access to the camping</li>
            <li>Access to all stages</li>
            <li>Access to merch and food areas</li>
          </ul>
        </div>
        <div>
          <h3>VIP</h3>
          <ul>
            <li>Everything from regular ticket</li>
            <li>Access to V.I.P. area on concerts just below the stage</li>
            <li>Possibility to buy merch and food using fast track</li>
            <li>V.I.P. only festival t-shirt</li>
          </ul>
        </div>
      </div>
      <Link href="/tickets" className={style.singleButton}>
        <button className={ui.button}>buy tickets</button>
      </Link>
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
  const res = await fetch(api + "bands");
  const data = await res.json();
  return {
    props: {
      bands: data,
    },
  };
};
