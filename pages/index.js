import React from "react";
import Link from "next/link";

function Listings() {
    return (

        <div className="container">
            <div className="py-16 min-w-full flex flex-col justify-start items-center">

                <div className="py-4 w-full flex justify-center">
                    <div className="py-4 w-full">
                        <img src="logo.png" alt="keychain img" className="object-contain w-full h-20 md:h-40"/>
                    </div>
                </div>

                <div className="py-1 w-full flex justify-center">
                    <div className="py-1 w-full">
                        <h1 className="text-center text-4xl font-bold text-white">
                            Keychain
                        </h1>
                    </div>
                </div>

                <div className="py-4 w-full flex justify-center">
                    <div className="py-4 content-box w-full">
                        <p className="text-center text-md  md:text-lg font-bold text-white px-2">
                            We are builders that make services and tools that we use. We are building the tools to bring the future for financial applications to users in a simple and clean experience. We are trying to make the cryptocurrency space better.
                        </p>
                    </div>
                </div>


                <div className="py-2 min-w-full md:flex flex-col justify-start items-center">
                    <div className="py-4 w-full flex justify-center text-center">
                        <div className="py-4 w-full">
                            <Link href="/dapps">
                                <button style={{background: "#acffff", text: "#202225"}}
                                        className="btn w-6/12 md:w-4/12"
                                        type="button">
                                    <p className="capitalize hover:text-white">Check out our Dapps</p>
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>


            <style jsx>
                {`
          .content-box {
            border: 1px solid var(--offwhite);
            border-radius: var(--radius);
          }
        `}
            </style>
        </div>
    );
}

export default Listings;
