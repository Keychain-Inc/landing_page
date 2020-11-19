import DappCard from "../components/dappCard";
import { DAPP_OPTIONS } from "../constants";

function Listings() {
    return (
        <div className="relative">
            <div className="container">
                <div className="garden-list py-16 overflow-x-hidden">
                    {DAPP_OPTIONS.map((dapp, i) => (
                        <DappCard {...dapp} key={i} />
                    ))}
                </div>
            </div>
            <style jsx>{`
        @media screen and (max-width: 831px) {
          .desktop-content {
            display: none;
          }
          .tabs-wrapper {
            margin-left: -1rem;
            width: 100vw;
          }
        }
      `}</style>
        </div>
    );
}

export default Listings;
