import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import Wrapper from '../containers/Home.styled'
import { Routes, Route } from "react-router-dom"
import { NavHashLink } from 'react-router-hash-link';
import ReactPlayer from 'react-player'

// importing components
import Navbar from '../components/navbar/Navbar'
import Card from '../components/card/Card'
import Rankings from "../containers/rankingspage/Rankings"
import Dencard from '../components/dencard/Dencard'
import Accordian from '../components/accordian/Accordian'
import Footer from '../components/footer/Footer'

// importing icons and images
import intro_vid from "../images/intro_vid.mp4"
import logo from "../images/logo.png"
import about_us from "../images/about_us.svg"
import nft_evening from "../images/nft_evening.svg"
import nft_calendar from "../images/nft_calendar.svg"
import Slider from "react-slick"
import { SlidesData } from "../components/slidesData/Slide.data"
// import Particles from "react-tsparticles"

const Home = () => {

    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const [claimingNft, setClaimingNft] = useState(false);
    const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
    const [mintAmount, setMintAmount] = useState(1);
    const [CONFIG, SET_CONFIG] = useState({
        CONTRACT_ADDRESS: "",
        SCAN_LINK: "",
        NETWORK: {
            NAME: "",
            SYMBOL: "",
            ID: 0,
        },
        NFT_NAME: "",
        SYMBOL: "",
        MAX_SUPPLY: 1,
        WEI_COST: 0,
        DISPLAY_COST: 0,
        GAS_LIMIT: 0,
        MARKETPLACE: "",
        MARKETPLACE_LINK: "",
        SHOW_BACKGROUND: false,
    });

    const claimNFTs = () => {
        let cost = CONFIG.WEI_COST;
        let gasLimit = CONFIG.GAS_LIMIT;
        let totalCostWei = String(cost * mintAmount);
        let totalGasLimit = String(gasLimit * mintAmount);
        console.log("Cost: ", totalCostWei);
        console.log("Gas limit: ", totalGasLimit);
        setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
        setClaimingNft(true);
        blockchain.smartContract.methods
            .mint(mintAmount)
            .send({
                gasLimit: String(totalGasLimit),
                to: CONFIG.CONTRACT_ADDRESS,
                from: blockchain.account,
                value: totalCostWei,
            })
            .once("error", (err) => {
                console.log(err);
                setFeedback("Sorry, something went wrong please try again later.");
                setClaimingNft(false);
            })
            .then((receipt) => {
                console.log(receipt);
                setFeedback(
                    `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
                );
                setClaimingNft(false);
                dispatch(fetchData(blockchain.account));
            });
    };

    const decrementMintAmount = () => {
        let newMintAmount = mintAmount - 1;
        if (newMintAmount < 1) {
            newMintAmount = 1;
        }
        setMintAmount(newMintAmount);
    };

    const incrementMintAmount = () => {
        let newMintAmount = mintAmount + 1;
        if (newMintAmount > 10) {
            newMintAmount = 10;
        }
        setMintAmount(newMintAmount);
    };

    const getData = () => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
            dispatch(fetchData(blockchain.account));
        }
    };

    const getConfig = async () => {
        const configResponse = await fetch("/config/config.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        const config = await configResponse.json();
        SET_CONFIG(config);
    };

    useEffect(() => {
        getConfig();
    }, []);

    useEffect(() => {
        getData();
    }, [blockchain.account]);
    // slider settings
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Wrapper id="Home">
            <Navbar />
            <div className='container'>
                <div className='row mt-5'>
                    <h1 className='display-6 text-primary text-center fw-bold'>PUBLIC SALE IS LIVE NOW!!</h1>
                </div>
                <div className='row'>
                    <div className='col-md-6 d-flex justify-content-end'>
                        <div className='gif-container mbl_logo'>
                            <img src={logo} alt="metaverse_university"/>
                        </div>
                        <div className='gif-container web_logo'>
                            <ReactPlayer url={intro_vid} playing={true} loop={true} muted={true} controls={false}/>
                        </div>
                    </div>
                    <div className='col-md-6 d-flex flex-column justify-content-center hero-area'>
                        <div>
                            <h1 className='text-center mb-4'>The Metaverse University</h1>
                            <p class="fs-6 fw-bold text-center">Mint your <span class="fw-bold text-primary fw-5">The Metaverse University NFT's</span></p>
                        </div>
                        {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                                <>
                                    <p className='text-secondary fs-6 fw-bold text-center'>
                                        The sale has ended.
                                    </p>
                                    <p className='text-secondary fs-6 fw-bold text-center'>
                                        You can still find {CONFIG.NFT_NAME} on
                                    </p>
                                    <button className='btn btn-primary w-75 mt-5 p-2 rounded-pill fs-4 fw-bold text-center' target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                                        {CONFIG.MARKETPLACE}
                                    </button>

                                </>
                            ) : (
                                <>
                                    <p className='text-secondary fs-6 fw-bold text-center'
                                        style={{ textAlign: "center", color: "var(--accent-text)" }}
                                    >
                                        1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                                        {CONFIG.NETWORK.SYMBOL}. Excluding gas fees.
                                    </p>

                                    <p className='text-secondary fs-6 fw-bold text-center'>
                                    </p>

                                    {blockchain.account === "" ||
                                        blockchain.smartContract === null ? (
                                        <div style={{ alignItems: "center", width: "100%" }}>
                                            <p className="text-secondary fs-6 fw-bold text-center">
                                                Connect to the {CONFIG.NETWORK.NAME} network
                                            </p>
                                            <div className='d-flex justify-content-center'>
                                                <button className='btn btn-primary w-75 p-2 rounded-pill fs-4 fw-bold text-center' onClick={(e) => {
                                                    e.preventDefault();
                                                    dispatch(connect());
                                                    getData();
                                                }}>Connect</button>
                                            </div>
                                            {blockchain.errorMsg !== "" ? (
                                                <div className="d-flex justify-content-center">
                                                    <p className='text-secondary fs-6 fw-bold text-center'>
                                                        {blockchain.errorMsg}
                                                    </p>
                                                </div>
                                            ) : null}
                                        </div>
                                    ) : (
                                        <>
                                            <p className='text-secondary fs-6 fw-bold text-center'>
                                                {data.totalSupply} out of {CONFIG.MAX_SUPPLY} Minted
                                            </p>
                                            <div className='col-md-12 text-center justify-content-center d-flex'>
                                                <div className='input-group counter justify-content-center text-center'>
                                                    <button className="input-group-text bg-light" onClick={decrementMintAmount} >-</button>
                                                    <input type="number" className="form-control text-center" min="1" step="1" id="nft_amount" value={mintAmount} onChange={(e) => { setCounter(e.target.value) }} />
                                                    <button className="input-group-text bg-light" onClick={incrementMintAmount} >+</button>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <button onClick={(e) => {
                                                    e.preventDefault();
                                                    claimNFTs();
                                                    getData();
                                                }} className='btn btn-primary w-75 mt-3 p-2 rounded-pill fs-4 fw-bold'>{claimingNft ? "MINTING IN PROCESS" : "MINT NOW"}</button>
                                            </div>
                                        </>
                                    )}
                                </>
                            )
                            }
                    </div>
                </div>
                <div className='row mt-3 text-center'>
                    <p>Now Metaverse University NFT's are also listed on <a href="https://nftevening.com/event/the-metaverse-university-nft-launch/" target="blank" className="text-primary"><b>NFT Evening</b></a> and <a href="https://nftcalendar.io/event/the-metaverse-university/" target="blank" className="text-primary"><b>NFT Calendar</b></a>.</p>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-6 right_side">
                        <a href="https://nftevening.com/event/the-metaverse-university-nft-launch/" target="blank"><img src={nft_evening} alt="metaverse_university" className="press_images"/></a>
                    </div>
                    <div className="col-sm-6 left_side">
                        <a href="https://nftcalendar.io/event/the-metaverse-university/" target="blank"><img src={nft_calendar} alt="metaverse_university" className="press_images"/></a>
                    </div>
                </div>
                <div className='row mt-2 mb-5 text-center'>
                    <h4 className='display-6 fw-bold text-primary mt-5'>HOW TO JOIN US?</h4>
                    <p>New to NFTs? No worries, here are some steps on what you need to do to get your Metaverse University NFT.</p>
                </div>
                <div className='row'>
                    <Dencard />
                </div>
                <div className='row mt-5' id="About">
                    <div className='col-md-6 d-flex justify-content-center mt-5'>
                        <div className='gif-container'>
                            <img src={about_us} alt="metaverse_university"/>
                        </div>
                    </div>
                    <div className='col-md-6 d-flex flex-column justify-content-center'>
                        <div>
                            <div className='d-flex'>
                                <h4 className='display-6 fw-bold text-primary'>ABOUT</h4>
                            </div>
                            <div>
                                <h2 className='mt-3'>
                                    A Society Where Human And Machine Intelligence Collaborates.
                                </h2>
                            </div>
                            <div>
                                <p>
                                    Our goal is to educate students to deliver high-demand building skills. By
                                    implementing virtual reality (VR) gear to educate from afar. We want to strive to
                                    develop communities and promote sustainable settings by providing free Vr Learning
                                    to Millions of People World Wide.
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <Card />
                </div>
                <div className='row mt-5' id="Rarity">
                    <h4 className='display-6 fw-bold text-center text-primary mt-5 mb-5'>TRAIT RARITY</h4>
                </div>
                <div className='row mt-5'>
                    <Routes>
                        <Route index element={<Rankings />} />
                    </Routes>
                </div>
                <div className='row mt-5' id='Team'>
                    <h4 className='display-6 fw-bold text-center text-primary mt-5 mb-5'>OUR TEAM</h4>
                    <p className="text-center">We are committed to delivering a cutting-edge experience and making this project a success. Our team is formed by the investors specialized in marketing , expert blockchain and extremely talented artist as well as all community managers.</p>
                </div>
                <div className='row mt-5 mb-5 text-light carousel-container'>
                    <Slider {...settings}>
                        {SlidesData.map( (item) => (
                            <div key={item.id}>
                                <div className='card carousel-card'>
                                    <img src={item.pic} alt='metaverse_university' />
                                    <div className='card-body'>
                                        <h4 className='card-title'>{item.title}</h4>
                                        <p className="card-text">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className='row mt-5'>
                    <h4 className='display-6 fw-bold text-center text-primary mt-5 mb-5'>FREQUENTLY ASKED QUESTIONS</h4>
                </div>
                <div className='row'>
                    <Accordian />
                </div>
                <div className='row'>
                    <Footer />
                </div>
            </div>
        </Wrapper>
    )
}

export default Home


