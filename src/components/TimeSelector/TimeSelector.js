import styled from "styled-components";

export default function TimeSelector({testvalue}) {
    return(
        <>
            <SelecioneOHorario>Selecione o horário</SelecioneOHorario>
            <Schedule>
                <Day>Quinta-feira - 24/06/2021</Day>
                <Time>
                    <p>15:00</p>
                    <p>19:00</p>
                </Time>
            </Schedule>
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

    p:hover {
        background-color: black;
    }
`;

