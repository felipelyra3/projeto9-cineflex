import styled from "styled-components";
import Footer from "../Footer/Footer";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import loadingCat from "../../assets/images/reload-cat.gif";
import MovieSelector from "../MovieSelector/MovieSelector";

function TimeJSX({ name, imageId }) {
    return (
        <Link to={`/SeatSelector/${imageId}`} >
            <Time>{name}</Time>
        </Link>
    );
}

function TimerSelectorJSX({ day, imageId }) {
    return (
        <>
            <Schedule>
                <Day>{day.weekday} - {day.date}</Day>
                <ContainerTime>
                    {day.showtimes.map((time, index) => (<TimeJSX key={index} name={time.name} imageId={imageId} />))}
                </ContainerTime>
            </Schedule>
        </>
    );
}

export default function TimeSelector() {
    const [request, setRequest] = useState('');
    const { imageId } = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${imageId}/showtimes`);

        promise.then((request) => {
            setRequest(request.data);
            console.log(request);
        });
    }, []);


    return (
        <>
            <SelecioneOHorario>Selecione o horário</SelecioneOHorario>
            {request ? (
                request.days.map((day, index) => (<TimerSelectorJSX key={index} day={day} imageId={imageId} />))
            ) : (
                <Loading>
                    <img src={loadingCat} alt="loading" />
                </Loading>
            )
            }

            <Footer posterURL={request.posterURL} title={request.title} />
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

const ContainerTime = styled.ul`
    display: flex;
`;

const Time = styled.li`
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


    &:hover {
        background-color: green;
    }
`;

const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
    img {
    width: 129px;
    height: 193px;
    margin: 38px;
    }
`;

