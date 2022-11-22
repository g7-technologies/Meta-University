import styled from "styled-components";


const Wrapper = styled.div`
    .social-icons {
        a {
            text-decoration: none;
            color: #000000;
            width: 40px;
            height: 40px;
            display: inline-flex;
            border-radius: 50%;
            background: #ffffff;
            justify-content: center;
            align-items: center;
            font-size: 22px;
            :first-child {
                margin-right: 10px;
            };
            :nth-child(2) {
                margin-right: 10px;
            }
            :nth-child(3) {
                margin-right: 10px;
            }
        }
    }
    .footer-button {
        width: 300px;
        margin: auto;
        button {
            width: 100%;
            padding: 15px 0;
        }
    }
    .navbar-link {
        margin-right: 20px;
        margin-bottom: 20px;
        a {
            text-decoration: none;
            color: white;
            font-size: 16px;
            margin-right: 30px;
            font-weight: bold;
        }
    }
`

export default Wrapper;