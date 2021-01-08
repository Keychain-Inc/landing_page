import React from "react";
import Link from "next/link";

function Crypto101() {
    return (

        <div className="container">
            <div className="py-16 min-w-full flex flex-col justify-start items-center">



                <div className="py-1 w-full flex justify-center">
                    <div className="py-1 w-full">
                        <h1 className="text-center text-4xl font-bold text-white">
                            Introduction to Cryptocurrency
                        </h1>
                    </div>
                </div>

                <div className="py-4 w-full flex justify-center">
                    <div className="py-4 content-box  w-full">
                        <p className="text-left text-md md:text-lg font-bold text-white px-2">
                            If you're new to Cryptocurrency then you're probably sent here from someone as an intro or found this to see what all the hype is about. We will go through all the key concepts, show you around and help you understand this new financial innovation in a way that it deserves.                         </p>
                    </div>
                </div>

                <div className="py-1 w-full flex justify-center">
                    <div className="py-1  w-full">
                        <h2 className="text-center text-xl  md:text-2xl font-bold text-white px-2">
                            Key concepts
                        </h2>
                    </div>
                </div>

                <div className="py-1 w-full flex justify-center">
                    <div className="py-1  w-full">
                        <p className="text-center text-md  md:text-lg font-bold text-white px-2">
                            First we will go through the key concepts used by the space and what you'll need to know to get started.
                        </p>
                    </div>
                </div>

                <div className="py-4 w-full flex justify-center">
                    <div className="py-4  w-full">
                        <h3 className="text-center text-md  md:text-lg font-bold text-white px-2">
                            Definitions
                        </h3>
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

export default Crypto101;
