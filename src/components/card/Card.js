import React from 'react'
import Wrapper from "./Card.styled"

const Card = () => {
return( 
    <Wrapper>
        <div className="container-fluid my-5 py-5" id='Roadmap'>
            <div className="row text-center">
                <h4 className='display-6 fw-bold text-center text-primary mt-5'>ROADMAP</h4>
                <p className="text-light mt-3">The METAVERSE UNIVERSITY all access NFT mint day is <b className="text-primary fw-bold fs-6">2/14/2022</b>
                </p>
            </div>
            <div className="row mt-5 flex-column roadmap">
                <div className="vertical-line"></div>
                <div className="col roadmap-card roadmap-card-odd">
                    <p className="card-title fw-bold fs-5 text-primary">25%</p>
                    <div className="title-border"></div>
                    <p className="card-text text-light">At 25% Mint we will Giveaway $10000 in Ethereum returned to our Holders and 10 Unique NFTs to our NFT Community. Donate 30 Oculus Headset to a West Palm Beach Elementary School. 1 Mental Health Scholarship. </p>
                    <div className="roadmap-card-icon roadmap-card-icon-even d-flex justify-content-center">
                        <p className="fw-bold fs-6 text-center mt-1">25%</p>
                    </div>
                </div>
                <div className="col roadmap-card roadmap-card-even">
                    <p className="card-title fw-bold fs-5 text-primary">50%</p>
                    <div className="title-border"></div>
                    <p className="card-text text-light">At 50% we giveaway $20000 in Ethereum to our NFT Holders, & Giveaway of 100 Oculus Headsets 50 to Holders and 50 to a second Elementary School. 3 Mental Health Scholarships.</p>
                    <div className="roadmap-card-icon roadmap-card-icon-odd d-flex justify-content-center">
                        <p className="fw-bold fs-6 text-center mt-1">50%</p>
                    </div>
                </div>
                <div className="col roadmap-card roadmap-card-odd">
                    <p className="card-title fw-bold fs-5 text-primary">75%</p>
                    <div className="title-border"></div>
                    <p className="card-text text-light">At 75% mint,  We Sponsor 50 holders for the Meetup at the Breaker’s Hotel West Palm Beach Florida, Along wth a drop of 10000 NFT Collection & Giveaway $30000 in Erhereum. 200 Oculus Headset Giveaway, 100 to our Holders and 100 to a Middle School. 5 Mental Health Scholarships.</p>
                    <div className="roadmap-card-icon roadmap-card-icon-even d-flex justify-content-center">
                        <p className="fw-bold fs-6 text-center mt-1">75%</p>
                    </div>
                </div>
                <div className="col roadmap-card roadmap-card-even">
                    <p className="card-title fw-bold fs-5 text-primary">100%</p>
                    <div className="title-border"></div>
                    <p className="card-text text-light">At 100% mint we will Giveaway My S550 Mercedes Benz and Start the Development of The Metaverse University. $50000 Returned to Our TMU NFT Holders. Give away a 1/1 TMU NFT to the last BUYER.  500 Oculus Headset Giveaway, 250 to our Holders and 250 to a High School. 10 Mental Health Scholarships.</p>
                    <div className="roadmap-card-icon roadmap-card-icon-odd d-flex justify-content-center">
                        <p className="fw-bold fs-6 text-center mt-1">100%</p>
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>);
}

export default Card
