import styled from "styled-components";
import Footer from "../Footer/Footer";
import { Link, useParams } from "react-router-dom";

export default function TimeSelector({idParams, testvalue, posterURL}) {
    const {id1} = useParams();
    
    console.log('id1' + id1);
    console.log('id: ' + idParams);
    console.log('posterURL: ' + posterURL);
    console.log('testvalue: ' + testvalue);
    return(
        <>
            <SelecioneOHorario>Selecione o horário</SelecioneOHorario>
            <Schedule>
                <Day>Quinta-feira - 24/06/2021</Day>
                <Time>
                <Link to={`/SeatSelector`} ><p>15:00</p></Link>
                    <p>19:00</p>
                </Time>
            </Schedule>
        <Footer />
        </>
    );
}

const SelecioneOHorario = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #293845;
    margin: 12px 0px 0px 0px;
`;

const Schedule = styled.div`
    margin: 28px 0px 0px 24px;
`;

const Day = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #293845;
    margin: 12px 0px 20px 0px;
`;

const Time = styled.div`
    display: flex;

    p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 12px 0px 0px;
    width: 83px;
    height: 43px;
    background: #E8833A;
    border-radius: 3px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    }

    &:hover {
    filter: brightness(0.9);
  }
`;

