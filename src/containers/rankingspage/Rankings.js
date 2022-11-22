import React from 'react'
import Wrapper from './Rankings.styled'
import RankingpageData from './Rankingpage.data'

const Rankings = () => {
    return (
        <Wrapper>
            {RankingpageData.map( (item) => (
                <div key={item.id} className='card ranking-card'>
                    <img src={item.pic} alt='metaverse_university' />
                    <div className='card-body'>
                        <h4 className='card-title'>{item.title}</h4>
                        <p className="card-text">{item.description}</p>
                    </div>
                </div>
            ))}
        </Wrapper>
    )
}

export default Rankings
