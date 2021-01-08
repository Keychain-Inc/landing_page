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
                    <div className="py-4 w-full">
                        <p className="text-justify md:text-cente text-md md:text-lg text-white px-2">
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
                    <div className="py-1 w-full">
                        <p className="text-justify md:text-center text-md  md:text-lg text-white px-2">
                            First we will go through the key concepts used by the space and what you'll need to know to get started.
                        </p>
                    </div>
                </div>

                <div className="py-4 w-full flex justify-center">
                    <div className="py-4 content-box w-full">
                        <h3 className="text-center text-xl  md:text-2xl font-bold text-white px-2">
                            Definitions
                        </h3>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center  md:text-justify text-md  md:text-lg font-bold text-white px-2">
                            Address
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            The account which holds your funds, can only be spent from by the private key. These identifiers for your account usually are long random strings such as 0xfa6de2697... and are public. In simpler terms the address is like a username that you give other people to find and transact with you.
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2  w-full">
                        <p className="text-center  md:text-justify text-md  md:text-lg font-bold text-white px-2">
                            CryptoCurrency
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            To put it simply Crypto generally acts as an intermediaryless money system. This allows for people to hold what are called private keys- a secret that only they hold- which allows them to sign a transaction from their public address which holds the funds. The system has no central party to control who or how funds are spent and so allows sending to anyone, anywhere, anytime for any value. The system is trustless so that everyone on the network can verify for themselves that a transaction has occurred and details, for example like looking at transactions in a block explorer, being able to prove every transaction.
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center  md:text-justify text-md  md:text-lg font-bold text-white px-2">
                            Key
                        </p>
                        <p className="text-justifytext-md  md:text-lg text-white px-2">

                            Private keys are secrets that you keep to authorize your funds to move by signing a transaction to send funds from an address.
                            <br/>
                            <br/>
                            Public keys are generated from private keys and are used to generate an address. To be simpler, private keys are like a big password to your funds, held by your “username” aka address and used to prove a transaction or interaction was initiated by you through an irreversible process called signing.
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center  md:text-justify text-md  md:text-lg font-bold text-white px-2">
                            Wallet
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            Public keys are generated from private keys and are used to generate an address. To be simpler, private keys are like a big password to your funds, held by your “username” aka address and used to prove a transaction or interaction was initiated by you through an irreversible process called signing.
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center md:text-justify  text-md  md:text-lg font-bold text-white px-2">
                            Block
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            A set of transactions that get bundled, submitted and verified and then executed with any smart contract execution being performed as well in order of transaction. 1 block gets produced about every 15 secs for Ethereum, 1 every 10 mins for Bitcoin. Has a limit for space that can be used. Every successful block also rewards the proposer with a small reward in the networks native currency.
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center  md:text-justify text-md  md:text-lg font-bold text-white px-2">
                            Blockchain
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            A chain that's established by the consensus mechanism such as PoW or PoS (see below) which orders transactions and allows for the network to agree on what transactions happened when. Blocks are tied together by using the block before it's contents to help form the answer to the current blocks question (see PoW and PoS), irreversibly generating a chain making it impossible to alter any earlier blocks without affecting every single block after it.
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center md:text-justify  text-md  md:text-lg font-bold text-white px-2">
                            Fork
                        </p>
                        <p className="text-justify text-md  md:text-lg  text-white px-2">
                            When consensus gets split and 2 chains come out, both independent from the other. Sometimes this is used to refer to copying the code of a project to make your own or making a separate branch of the current chain.
                            <br/>
                            <br/>
                            Soft fork
                            <br/>
                            Backwards compatible change, no update needed.
                            <br/>
                            <br/>
                            Hard fork
                            <br/>
                            Majority signal support for a change or choose to fork anyway and 2 branches are created with seperate rules. Not backwards compatible.
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2  w-full">
                        <p className="text-center  md:text-justify text-md  md:text-lg font-bold text-white px-2">
                            Altcoin
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            Smaller market cap currencies, created after Bitcoin. Alternative Cryptocurrencies.
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center  md:text-justify text-md  md:text-lg font-bold text-white px-2">
                            Nodes
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            Independent clients that verify every block and transaction on the network, full nodes keep the full state and know and have verified every transaction that has happened on the chain to verify validity. Needed to interact with the network, send, receive, verify transactions.
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center  md:text-justify text-md  md:text-lg font-bold text-white px-2">
                            Confirmations
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">

                            Number of blocks that have been included in the chain and built ontop of the block that the transaction was included in. If your transaction got into block 4 and the current chains at block 10,  block 4 and your transaction has 6 confirmations. Confirmations are important to prevent the same transaction being accepted, as 1 or 2 blocks may be reversible or both be valid and so the network must choose one to build on.
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center  md:text-justify text-md  md:text-lg font-bold text-white px-2">
                            Proof of Work
                        </p>
                        <p className="text-justify text-md  md:text-lg  text-white px-2">
                            The process by which miners (nodes with specialist hardware) race to be the first to find the answer to a problem posed by the network, this answer gets attached to the block and can be used as a proof that work was done to find the answer. By then building on top of that block with more answers, the accumulated work increases, making it harder to submit a block behind the current one as the miner would need to submit new answers for each new block they want to propose up until and passing the current block. Answers are unique to the block and all transactions within. Change 1 transaction, you need to do a completely different answer.
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center  md:text-justify text-md  md:text-lg font-bold text-white px-2">
                            Proof of Stake
                        </p>
                        <p className="text-justify text-md  md:text-lg  text-white px-2">

                            Like proof of work but have stakers that provide capital in the network's native currency to then vote for the proposed block, with majority votes deciding the included block. Requires no specialist hardware. Think of it being a bet on the correct block.
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center  md:text-justify text-md  md:text-lg font-bold text-white px-2">
                            Concensus
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">

                            The means by which the network reaches a state where they all agree on what accounts hold what balance and the current blockchains general state.
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center  md:text-justify text-md  md:text-lg font-bold text-white px-2">
                            Exchange
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            A service or website to buy, sell, trade cryptocurrency. Recommended ones include Coinbase for people new to finance and Kraken for those with some experience.
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center  md:text-justify text-md  md:text-lg font-bold text-white px-2">
                            Cold Storage / Wallet
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            A non internet connected device. Usually a physical hardware wallet or paper with the private keys.
                            <br/>
                            <br/>
                            Hot wallet
                            <br/>
                            A wallet connected to the internet.
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center  md:text-justify text-md  md:text-lg font-bold text-white px-2">
                            Whitepaper
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            A document explaining a cryptocurrency and it's purpose and fundamentals.
                        </p>
                    </div>
                </div>

                <div className="py-4 w-full flex justify-center">
                    <div className="py-4 content-box w-full">
                        <h3 className="text-center text-xl  md:text-2xl font-bold text-white px-2">
                            Concepts for Bitcoin
                        </h3>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center  md:text-justify text-md  md:text-lg font-bold text-white px-2">
                            Satoshi
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            The founder(s?) behind Bitcoin. Unknown identity.
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center  md:text-justify text-md  md:text-lg font-bold text-white px-2">
                            Satoshis (Sats)
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            The smallest unit that can be transferred on the Bitcoin network. Worth 0.00000001 BTC.
                        </p>
                    </div>
                </div>

                <div className="py-4 w-full flex justify-center">
                    <div className="py-4 content-box w-full">
                        <h3 className="text-center text-xl  md:text-2xl font-bold text-white px-2">
                            Concepts for Ethereum's protocol
                        </h3>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center md:text-justify  text-md  md:text-lg font-bold text-white px-2">
                            Smart Contracts
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            Self sovereign code that runs and executes the specified logic on the blockchain itself. Can hold funds on it's own and once deployed usually can not be changed on how it behaves and with no one able to control its functionality. Applications that run on the blockchain.
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center  md:text-justify text-md  md:text-lg font-bold text-white px-2">
                            DAO
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            Decentralized autonomous organisation. Organisations that run on smart contracts where holders for the tokens vote on decisions and community governance controls the protocol for the project.                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center  md:text-justify text-md  md:text-lg font-bold text-white px-2">
                            Dapp
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            Decentralized apps that do not use central parties and no central point for failure. Front ends for smart contracts.                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center  md:text-justify text-md  md:text-lg font-bold text-white px-2">
                            DeFi
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            Decentralized Finance, generally takes up the space for any and all financial dapps, loans, NFTs, trading.
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center md:text-justify  text-md  md:text-lg font-bold text-white px-2">
                            Ether (ETH)
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            The currency natively used by the ethereum protocol and the network as gas to run transactions.
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center  md:text-justify text-md  md:text-lg font-bold text-white px-2">
                            Gas
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            The fuel for the network. Paid for in ETH, every operation for a transaction has a small fee, with the gas price being the amount you're willing to spend per 1 gas consumed.
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center  md:text-justify text-md  md:text-lg font-bold text-white px-2">
                            Etherscan
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            The default service for exploring transactions
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center md:text-justify  text-md  md:text-lg font-bold text-white px-2">
                            Gwei
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            Standard representation for .0000000001 ETH and base unit for gas costs. You increase this to up your fee to get into a block faster.
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center  md:text-justify text-md  md:text-lg font-bold text-white px-2">
                            Metamask
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            The most common wallet for using dapps and interacting with Web3.
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center  md:text-justify text-md  md:text-lg font-bold text-white px-2">
                            Tokens
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            Also known as ERC20 (the standard for Ethereum based fungible tokens) for any tokens where you want any 1 token to act as any other. Able to represent value in projects, systems, as wrappers for other assets.
                            <br/>
                            ERC721 tokens are Non Fungible Tokens also known as NFTs and are uniquely tracked, often collectibles (such as art, items in games, used to prove ownership of a specific object).
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center md:text-justify  text-md  md:text-lg font-bold text-white px-2">
                            Web3
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            Web apps with crypto use and integration, usually  decentralized applications running on smart contracts.
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center  md:text-justify text-md  md:text-lg font-bold text-white px-2">
                            Decentralized Exchange (dex)
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            An exchange without human operators, completely autonomous and smart contract controlled. Trades occur between users directly or with the contract itself.
                        </p>
                    </div>
                </div>

                <div className="py-4 w-full flex justify-center">
                    <div className="py-4 content-box w-full">
                        <h3 className="text-center text-xl  md:text-2xl font-bold text-white px-2">
                            Economics
                        </h3>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center  md:text-justify text-md  md:text-lg font-bold text-white px-2">
                            Bull
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            To be optimistic to the price increasing
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center  md:text-justify text-md  md:text-lg font-bold text-white px-2">
                            Bear
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            To expect decreasing prices
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center  md:text-justify text-md  md:text-lg font-bold text-white px-2">
                            HODL
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            To hold onto an asset despite price movements. Originally a typo but was adopted into the crypto community and later became known as an acronym for “hold on for dear life”.
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center  md:text-justify text-md  md:text-lg font-bold text-white px-2">
                            Fiat
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            Centrally issued government backed money such as the USD and Euro. Usually with no underlying value other than as an abstraction for value.
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center md:text-justify  text-md  md:text-lg font-bold text-white px-2">
                            Moon
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            Extreme rises in price.
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center md:text-justify  text-md  md:text-lg font-bold text-white px-2">
                            FUD
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            Fear, uncertainty, doubt
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center md:text-justify  text-md  md:text-lg font-bold text-white px-2">
                            Pump and Dump
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            To push the price up high to attract buyers then sell on them to make money. Market manipulation. Often disguised as signals groups, buy and hold, gurus. Usually just a small amount of people buying an asset then trying to market it in order to sell onto people buying in.
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center md:text-justify  text-md  md:text-lg font-bold text-white px-2">
                            Market Cap
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            The value for the asset as a whole. Shown as the total token supply x the current market price. Usually USD.
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center md:text-justify  text-md  md:text-lg font-bold text-white px-2">
                            ROI and APY
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            Return on investment. Annual percent yield. How much return you get after 1y.
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center md:text-justify  text-md  md:text-lg font-bold text-white px-2">
                            ICO
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            Initial coin offering. Selling a token which represents stake in a project, which has been tokenized as a crypto asset, and sold to the public.
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center md:text-justify  text-md  md:text-lg font-bold text-white px-2">
                            Whale
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            A large holder
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center md:text-justify  text-md  md:text-lg font-bold text-white px-2">
                            TA
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            Technical Analysis. Using financial strategies and indicators to try to predict future price movements.
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center md:text-justify text-md  md:text-lg font-bold text-white px-2">
                            FA
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            Fundamental Analysis. Using concepts such as news, project purpose, market, technology and other fundamental concepts to predict future price.
                        </p>
                    </div>
                </div>

                <div className="py-4 w-full flex justify-center">
                    <div className="py-4 content-box w-full">
                        <h3 className="text-center text-xl  md:text-2xl font-bold text-white px-2">
                            Getting Started
                        </h3>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            Alright now that you know roughly what's what let's go through how Cryptos generally operate at a high level and walk you through your first transaction.
                            <br/>
                            <br/>
                            To get started you'll need to sign up to an exchange such as coinbase.com or binance.com and purchase some cryptocurrency or find someone to send you some. Once you have some ready to be sent to your own wallet we can move to the first step.
                            <br/>
                            <br/>
                            <b>1. Download and setup your wallet</b>
                            <br/>
                            We recommend that the wallet you use be a reputable one as any wallet that controls your keys controls your funds. Once you download a wallet you'll see that it asks you to save your private key or seed. Make sure to keep this somewhere safe and preferably stored not anywhere that has an internet connection. If this gets lost or stolen there’s no way to recover your funds.
                            <br/>
                            <br/>
                            <b>2. Receiving crypto</b>
                            <br/>
                            Now that your wallet is ready to go you should see a button to receive. Press this and you'll be shown your unique address belonging to your private key. Use this as the recipient for your cryptocurrency, make sure to use the correct address for the correct cryptocurrency as each crypto has its own address for your key.
                            <br/>
                            <br/>
                            <b>3. Sending crypto</b>
                            <br/>
                            Now that you have some find someone to send some crypto to. Walk them through if needed and then get your wallet out.
                            <br/>
                            <br/>
                            Go to the send option and put in their address and the amount you want to send. You'll then see a suggested fee for the transaction. This fee will be used by miners or stakers to decide which transactions get in first. The higher the fee the faster it'll be included in a block. The suggested fee should be fine.
                            <br/>
                            <br/>
                            Confirm the transaction and wait for your transaction to be confirmed. And you're done.
                            <br/>
                            <br/>
                            Congrats you just sent someone money with no intermediary, anywhere in the world and in 10m or less.

                        </p>
                    </div>
                </div>

                <div className="py-4 w-full flex justify-center">
                    <div className="py-4 content-box w-full">
                        <h3 className="text-center text-xl  md:text-2xl font-bold text-white px-2">
                            Using DAPPS
                        </h3>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            Now that you have the basics covered lets buy some crypto using a decentralized exchange. For this you will need metamask (metamask.io) and some Ether (the currency for the Ethereum network).
                            <br/>
                            <br/>
                            1. Go to app.uniswap.com and authorize the site to connect to metamask
                            <br/>
                            2. On the bottom box select a token. You can also put a smart contract address for a non listed token to be able to trade it (try 0xfa6de2697D59E88Ed7Fc4dFE5A33daC43565ea41 for a token that acts as an index for DEFI)
                            <br/>
                            3. Choose how much you want to spend or receive
                            <br/>
                            4. Choose your gas fee (note the difference between gas price being how much you pay per 1 gas and gas limit being the max gas you're willing to pay for)
                            <br/>
                            5. Confirm the transaction
                            <br/>
                            6. You're done. You just traded on a completely autonomous exchange thats controlled by no humans and is just code
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center md:text-justify text-md  md:text-lg font-bold text-white px-2">
                            Why Crypto?
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            CryptoCurrency allows you to, for the first time, be in complete control for your money online. No one has access to your money, no one can freeze your accounts, take fees, lose your money, you and only you are responsible. Crypto allows you full control and makes cross border or even national payments easy and faster than traditional rails. You can send money from the US, to South Africa to China, back to the US in under 60s and pay fees usually under 1 USD for any amount.
                            <br/>
                            <br/>
                            Crypto can also act as a hedge against inflation and monetary policy where banks simply print more money, making the value for your savings go down slowly without you knowing. Assets such as Bitcoin and Ethereum are deflationary, holding value against inflationary currencies.
                            <br/>
                            <br/>
                            Crypto allows you to own your money and control how you spend it.
                        </p>
                    </div>
                </div>


                <div className="py-4 w-full flex justify-center">
                    <div className="py-4 content-box w-full">
                        <h3 className="text-center text-xl  md:text-2xl font-bold text-white px-2">
                            Resources
                        </h3>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center md:text-justify text-md  md:text-lg font-bold text-white px-2">
                            Basics
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            Good intro for some background and philosophy of crypto (generally Andreas Antonopolous has really good videos for the space and getting a basic understanding of cryptology)
                            <br/>
                            <a href="https://youtu.be/qkxdys-Ek9U" target="_blank">https://youtu.be/qkxdys-Ek9U</a>
                            <br/>
                            <br/>
                            The original paper for BTC which started the basis for all cryptology
                            <br/>
                            <a href="https://bitcoin.org/bitcoin.pdf" target="_blank">https://bitcoin.org/bitcoin.pdf</a>
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center md:text-justify text-md  md:text-lg font-bold text-white px-2">
                            Technical
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            Mastering Bitcoin (please purchase or support Andreas for making these open source)
                            <br/>
                            <a href="https://gateway.pinata.cloud/ipfs/Qmb4zxhSVqraAXEyUqU5om4Dsv676vgwMcUnHUJPfH8LsF" target="_blank">https://gateway.pinata.cloud/ipfs/Qmb4zxhSVqraAXEyUqU5om4Dsv676vgwMcUnHUJPfH8LsF</a>
                            <br/>
                            <br/>
                            Mastering Ethereum
                            <br/>
                            <a href="https://gateway.pinata.cloud/ipfs/QmSLS1gkC1u9BGsShbxPph6WJ3t5zAz4uoEjRBoyWwz8rr" target="_blank">https://gateway.pinata.cloud/ipfs/QmSLS1gkC1u9BGsShbxPph6WJ3t5zAz4uoEjRBoyWwz8rr</a>
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center md:text-justify text-md  md:text-lg font-bold text-white px-2">
                            Exchanges
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            Coinbase.com
                            <br/>
                            Kraken.com
                            <br/>
                            App.Uniswap.org
                            <br/>
                            Binance.com
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center md:text-justify text-md  md:text-lg font-bold text-white px-2">
                            Decentralized Finance
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            Indexed.Finance (decentralized tokenized indexs, good for beginners to be exposed to the whole space)
                            <br/>
                            App.uniswap.org (decentralized exchange)
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center md:text-justify text-md  md:text-lg font-bold text-white px-2">
                            Tools
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            etherscan.io (for ethereum transactions, blocks, network info, contract verification)
                            <br/>
                            Zapper.Fi (useful dashboard for many defi projects)
                            <br/>
                            Handles.me (links that replace addresses with usernames)
                        </p>
                    </div>
                </div>

                <div className="py-2 w-full flex justify-center">
                    <div className="py-2 w-full">
                        <p className="text-center md:text-justify text-md  md:text-lg font-bold text-white px-2">
                            Disclaimer
                        </p>
                        <p className="text-justify text-md  md:text-lg text-white px-2">
                            Many “Dapps” aren’t actually decentralized as they can potentially be manipulated by the contract owner or have other things that could be exploited built in as well as many other aspects that aren’t really decentralized such as prices, ability to change the contract and balances. Always do thorough research on any crypto you wish to interact with.
                        </p>
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
