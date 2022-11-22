import styled from "styled-components";
import Accordionicon from "../../images/plusicon.svg"

const Wrapper = styled.div`
    margin-bottom: 50px;
    .accordion-item {
        border: none;
        background: #000000;
    }
    .accordion-button {
        font-size: 20px;
        font-weight: 700;
        color: #fff;
        box-shadow: none;
        background: #000;
        @media (max-width: 600px) {
            font-size: 16px;
        }
        ::after {
            color: #000;
            background-image: url("${Accordionicon}"), linear-gradient(to right, #fff , #fff);
        }
    }
    .accordion-collapse {
        background: #000000;
        color: #ffffff;
    }
`

export default Wrapper;