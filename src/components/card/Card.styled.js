import styled from "styled-components";


const Wrapper = styled.div`
.roadmap {
    width: 100%;
    margin: 0;
    padding: 0;
    .roadmap-card {
        width: 50%;
        min-height: 100px;
        position: relative;
        padding: 0 50px;
        @media (max-width: 768px) {
            width: 100%;
        }
        .card-text {
            color: #000000;
            margin-top: 5px;
        }
        .title-border {
            width: 75%;
            border: 2px solid #ffffff;
            position: relative;
            @media (max-width: 992px) {
                width: 100%;
            }
            :after {
                content: "";
                border: 5px solid #ffffff;
                border-radius: 50%;
                position: absolute;
                left: 50%;
                transform: translateY(-50%);
            }
        }
        .roadmap-card-icon {
            width: 50px;
            height: 50px;
            padding: 5px;
            position: absolute;
            border: 2px solid #ffffff;
            border-radius: 50%;
            background: #0d6efd;
            @media (max-width: 600px) {
                display: none;
            }
        }
        .roadmap-card-icon-even {
            right: 0;
            top: 15px;
            transform: translateX(55%);
            @media (max-width: 768px) {
                left: 0;
                transform: translateX(-55%);
            }
        }
        .roadmap-card-icon-odd {
            left: 0;
            top: 15px;
            transform: translateX(-55%);
        }
    }
    .roadmap-card-odd {
        margin-left: 5px;
        border-right: 5px solid #ffffff;
        @media (max-width: 768px) {
            margin: 0;
            border-right: 0px;
            border-left: 5px solid #ffffff;
        }
        @media (max-width: 600px) {
            border-left: 0;
        }
    }
    .roadmap-card-even {
        border-left: 5px solid #ffffff;
        align-self: flex-end;
        @media (max-width: 768px) {
            align-self: flex-start;
            align-items: center;
        }
        @media (max-width: 600px) {
            border-left: 0;
        }
    }
}

`

export default Wrapper