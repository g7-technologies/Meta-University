import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .ranking-card {
        width: calc( 100% / 4 - 40px);
        margin: 20px;
        background: #000000;
        text-align: center;
        border: 2px solid #ffffff;
        border-radius: 15px;
        overflow: hidden;
        img {
            width: 100%;
            object-fit: contain;
        }
        @media (max-width: 768px) {
            width: calc( 100% / 3 - 20px);
            margin: 10px;
        }
        @media (max-width: 500px) {
            width: 100%;
            margin: 10px;
        }
    }
`

export default Wrapper;