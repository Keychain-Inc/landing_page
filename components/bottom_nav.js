import { memo } from "react";
import Link from "next/link";
const BottomNav = () => {
    return (
        <>
            <div className="wrapper flex bg-gradient-to-r from-teal-400 to-blue-600 z-4">
                <footer className="container w-full text-center">

                    <div className=" flex-row items-center text-center">
                        <Link href="mailto:pr0@keychain.me">
                            <a className="text-xs md:text-lg text-white p-2 md:p-6 hover:text-green cursor-pointer" target="_blank">
                                Contact
                            </a>
                        </Link>
                        <Link href="https://twitter.com/0xKeychain/">
                            <a className="text-xs md:text-lg text-white p-2 md:p-6 hover:text-green cursor-pointer" target="_blank">
                                Twitter
                            </a>
                        </Link>
                    </div>
                </footer>

                <style jsx>{`
          .wrapper {
            min-height: 76px;
          }
        `}</style>
            </div>
        </>
    );
};

export default memo(BottomNav);