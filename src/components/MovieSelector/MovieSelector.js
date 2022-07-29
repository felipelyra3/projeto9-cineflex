import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from "styled-components";
import loadingCat from "../../assets/images/reload-cat.gif"
import TimeSelector from '../TimeSelector/TimeSelector';
import { Link, useParams } from "react-router-dom";

function MovieSelectorJSX({ posterURL, imageId, key }) {
    console.log('Key = ' + key);
    console.log('Imageid = ' + imageId);
    return (
        <>
            <Link to={`/TimeSelector/${key + 1}`} params={{ testvalue: "hello" }} ><Img src={posterURL} alt='poster' /></Link>
        </>
    );
}

export default function MovieSelector() {
    const [request, setRequest] = useState("");
    const { imageId } = useParams();

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");

        promise.then((request) => {
            setRequest(request.data);
            //console.log(request);
        });
    }, []);


    return (
        <>
            <SelecioneOFilme>Selecione o filme</SelecioneOFilme>
            {request ? (
                request.map((request, key) => (<MovieSelectorJSX key={key} posterURL={request.posterURL} imageId={imageId} />))
            ) : (
                <Loading>
                    <img src={loadingCat} alt="loading" />
                </Loading>
            )}
        </>
    );
}

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

const SelecioneOFilme = styled.div`
    text-align: center;
    margin: 12px 0px 0px 0px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #293845;
`;

const Img = styled.img`
    width: 129px;
    height: 193px;
    margin: 38px;
`;