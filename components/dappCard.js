const DappCard = ({
                      dappName,
                      dappIconPath,
                      descriptionTop,
                      dappAddress,
                      dappContract,
                      dapp
                    }) => {


    return (
        <article className="relative">
            <section className="mb-3">
                <div className="outer py-12 flex flex-col items-center">



                    <header>
                        <div className="flex flex-col items-center">
                            <h2 className="mt-2 mb-4 text-lg text-white font-bold crop">
                                {dappName}
                            </h2>
                            <p className="text-md text-white">{descriptionTop}</p>

                        </div>
                    </header>
                    <div className="absolute harvest-button">
                        <a href={dappAddress} target="_blank">
                        <button className="btn" style={{background: "#acffff", text: "#202225"}}>
                            <h2 className="text-sm font-bold text-green pl-1">Open</h2>
                        </button>
                        </a>
                    </div>
                    {(dapp) ? (
                    <div className="absolute harvest-button2">
                        <a href={dappContract} target="_blank">
                            <button className="btn" style={{background: "#acffff", text: "#202225"}}>
                                <h2 className="text-sm font-bold text-green pl-1">View Dapp Contract on Etherscan</h2>
                            </button>
                        </a>
                    </div>
                    ) :
                    (
                    <div></div>
                    ) }
                </div>
            </section>

            <style jsx>{`
        .outer {
          border-radius: var(--radius);
          border: 1px solid var(--offwhite);
          min-height: 450px;
        }
        .harvest-button {
          bottom: 90px;
        }
        .harvest-button2 {
          bottom: 40px;
        }
        button {
          background-color: rgba(0, 255, 173, 0.25);
        }
        button:hover {
          background-color: rgba(0, 255, 173, 0.25);
        }
        button > img {
          height: 25px;
          width: 25px;
        }
        div > img {
          height: 65px;
          width: 65px;
        }
      `}</style>

        </article>
    );
};

export default DappCard;
