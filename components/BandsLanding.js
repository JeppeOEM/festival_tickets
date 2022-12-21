import Image from "next/image";
import Link from "next/link";
import StyleSheet from "/styles/component/landing.module.scss";

const Bands = ({ bands }) => {
  return (
    <>
      <div className={StyleSheet.container} key={bands.name}>
        {bands.map(
          (bands, index) =>
            index < 9 && (
              <div className={StyleSheet.card} key={bands.name}>
                <Image
                  src={"/band1.jpg"}
                  alt={bands.name}
                  width={370}
                  height={230}
                  sizes="(max-width: 768px) 100vw,
             (max-width: 1200px) 50vw,
             400px"
                />
                <h3 key={bands.id}>{bands.name}</h3>
              </div>
            )
        )}
      </div>
      <Link href={"https://regal-malabi-70039b.netlify.app/line-up"} className={StyleSheet.center}>
        VIEW ALL LINE-UP 2023
      </Link>
      <Link href={"/Form"}></Link>
    </>
  );
};
export default Bands;
