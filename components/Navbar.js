import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <Link href="/">
            <li>home</li>
          </Link>
          <Link href="/bands-list">
            <li>band list</li>
          </Link>
          <Link href="/line-up">
            <li>line up</li>
          </Link>
          <Link href="/about">
            <li>about</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
