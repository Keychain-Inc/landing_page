import { memo } from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <>
      <div className="wrapper flex bg-gradient-to-r from-teal-400 to-blue-600 z-4">
        <header className="container w-full">
          <nav className="flex justify-between items-center h-full">
            <Link href="/">
              <a>
                <div className="flex flex-row items-center">
                  <img src="/logo.png" alt="keychain inc" />
                  <h3 className="text-xs md:text-lg text-white">Keychain Inc.</h3>
                </div>
              </a>
            </Link>
            <div className="flex flex-row items-center">
              <Link href="/crypto101">
                <a className="text-xs md:text-lg text-white p-2 md:p-6 hover:text-green cursor-pointer">
                  Crypto 101
                </a>
              </Link>
              <Link href="/dapps">
                <a className="text-xs md:text-lg text-white p-2 md:p-6 hover:text-green cursor-pointer">
                  Dapps
                </a>
              </Link>
            </div>
          </nav>
        </header>

        <style jsx>{`
          .wrapper {
            min-height: 76px;
          }
          div > img {
            height: 80px;
            bottom: 2x;
          }
          button {
            background-color: #b2f1c8;
          }
          button:hover {
            background-color: floralwhite;
          }
          button > p {
            color: black;
            opacity: 1;
          }
        `}</style>
      </div>
    </>
  );
};

export default memo(Nav);
