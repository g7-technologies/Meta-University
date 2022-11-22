import styled from "styled-components";


const Wrapper = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    .card-item {
        position: relative;
        background: hsla(0, 0%, 100%, 0.16);
        margin: 10px;
        border: 1px solid grey;
        border-radius: 15px;
        :not(:first-child) {
            @media (max-width: 768px) {
                margin-top: 50px;
            }
        }
        .card-img {
            position: absolute;
            left: 50%;
            top: -40%;
            transform: translate(-50%, 40%);
            width: 100px;
            height: 100px;
            border-radius: 15px;
            overflow: hidden;
            border: 1px solid grey;
            @media (max-width: 1024px) {
                top: -30%;
            }
            img {
                width: 100%;
                height: 100%;
            }
        }
        h4 {
            @media (max-width: 768px) {
                padding-top: 30px;
            }
        }
        p {
            font-size: 14px;
        }
    }
`

export default Wrapper;