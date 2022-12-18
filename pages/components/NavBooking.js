import Image from "next/image";
import style from "/styles/component/nav.module.scss";
import Link from "next/link";
import Countdown from "react-countdown";
import ui from "/styles/component/ui.module.scss";

export default function Nav(props) {
  return (
    <>
      <div className={style.fixed_nav}>
        <div className={style.burger}></div>
        <label htmlFor="burger"></label>
        <div className={style.nav}>
          <input type="checkbox" className={style.toggle_menu} />
          <Image src={"/logo.svg"} width={90} height={90} alt="logo" />
          <ul className={style.menu}>
            <li>
              <Link href="./tickets">
                <p>{props.ass}</p>
              </Link>
            </li>
            <li>
              <Link href="./tickets">
                <p>bandss</p>
              </Link>
            </li>
            <li>
              <Countdown className={ui.Countdown} date={"2023-02-01T01:02:03"} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
