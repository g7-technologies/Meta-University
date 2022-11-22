import styled from "styled-components"

const Wrapper = styled.div`
    position: sticky;
    top: 0;
    z-index: 9999;
    .desktop-menu {
    background: #000;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 992px) {
        display: none;
    }
    .navbar-link {
        margin-right: 20px;
        a {
            text-decoration: none;
            color: white;
            font-size: 16px;
            margin-right: 50px;
        }
    }
    .nav-social-media-icons {
        .nav-button {
            margin-left: 20px;
            width: 200px;
        }
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
            font-size: 18px;
            padding: 6px;
            :first-child {
                margin-right: 10px;
            }
            :nth-child(2) {
                margin-right: 10px;
            }
            :nth-child(3) {
                margin-right: 10px;
            }
        }
    }
    }
`

export const MobileMenu = styled.div`
    display: none;
    @media (max-width: 992px) {
        background: #000;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .bg-black {
        background: #000000;
        height: 50px;
        display: flex;
        justify-content: center;
        a {
            text-decoration: none;
            color: #000 !important;
            width: 40px;
            height: 40px;
            padding: 0% !important;
            display: inline-flex;
            border-radius: 50%;
            background: #fff !important;
            text-align: center;
            margin-bottom: 5px !important;
            width: 10% !important;
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
    .mobile-menu-container {
        position: relative;
        height: 100%;
        .mobile-menu-items {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .mobile-logo {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 22px;
                font-weight: bold;
                @media (max-width: 400px) {
                    font-size: 18px;
                }
            }
            .humberger-button {
                text-align: right;
                button {
                    background: transparent;
                    color: #ffffff;
                    font-size: 18px;
                    border: none;
                    outline: none;
                    cursor: pointer;
                }
            }
        }
    }
    .sideMenu {
        position: absolute;
        left: 0;
        right: 0;
        height: 0px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        transition: 0.5s ease;
        a {
            width: 100%;
            display: block;
            color: grey;
            background: #000;
            padding: 15px;
            text-decoration: none;
        }
        .active {
            color: #fff;
        }
    }
`

export default Wrapper;