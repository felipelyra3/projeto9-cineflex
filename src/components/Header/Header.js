import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <Link to="/"><HeaderStyled>CINEFLEX</HeaderStyled></Link>
    );
}

    const HeaderStyled = styled.div`
        display: flex;
    justify-content: center;
    height: 67px;
    width: auto;
    background-color: #C3CFD9;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #E8833A;

    a {
        text-decoration: none;
    }
    
    link {
        text-decoration: none;
    }
    `;
