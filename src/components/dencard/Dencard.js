import React from 'react'
import Wrapper from './Dencard.styled'
import { NavHashLink } from 'react-router-hash-link';

// import images and icons
import dencard1 from "../../images/dencard1.gif"
import dencard2 from "../../images/dencard2.gif"
import dencard3 from "../../images/dencard3.svg"


const Dencard = () => {

const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

    return (
        <Wrapper>
            <div className='card-item'>
                <div className='card-img'>
                    <img src={dencard1} alt="metaverse_university" />
                </div>
                <div className="card-body text-center pb-5">
                    <h4 className="card-title fs-5 fw-bold mt-5">DOWNLOAD METAMASK</h4>
                    <p className="card-text">The Chrome Metamask extension will allow you to make purchases with Ethereum. If you are on mobile, please use the Metamask app.</p>
                    <a href="https://metamask.io/" target="blank" className="btn btn-primary w-50">METAMASK</a>
                </div>
            </div>
            <div className='card-item'>
                <div className='card-img'>
                    <img src={dencard2} alt="metaverse_university" />
                </div>
                <div className="card-body text-center pb-5">
                    <h4 className="card-title fs-5 fw-bold mt-5">ADD ETH</h4>
                    <p className="card-text">You can purchase Ethereum through your Metamask wallet using Wyre or send Ethereum from an exchange like Coinbase.</p>
                    <a href="https://www.coinbase.com/de/" target="blank" className="btn btn-primary w-50">COINBASE</a>
                </div>
            </div>
            <div className='card-item'>
                <div className='card-img bg-dark'>
                    <img src={dencard3} alt="metaverse_university" />
                </div>
                <div className="card-body text-center pb-5">
                    <h4 className="card-title fs-5 fw-bold mt-5">MINT A METAVERSE UNIVERSITY NFT</h4>
                    <p className="card-text">Connect your Metamask to our website. Once connected, you will be able to mint your Metaverse University NFT and approve the transaction.</p>
                    <NavHashLink className="btn btn-primary w-50" to="/#Home" scroll={el => scrollWithOffset(el)}>MINT NOW</NavHashLink>
                </div>
            </div>
        </Wrapper>
    )
}

export default Dencard
