import styled from "styled-components";
import Footer from "../Footer/Footer";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import loadingCat from "../../assets/images/reload-cat.gif";

function SeatSelectorJSX({ name, isAvailable }) {
    let txt = '';
    if (isAvailable === true) {
        txt = 'circle';
    } else if (isAvailable === false) {
        txt = 'circle unavailable';
    }

    return (

        <div className={txt}>{name}</div>
    );
}

export default function SeatSelector() {
    const [request, setRequest] = useState('');
    const { imageId } = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${imageId}/seats`);

        promise.then((request) => {
            setRequest(request.data);
            console.log(request.data);
        });
    }, []);


    return (
        <Page>
            <SelecioneOAssento>Selecione o(s) assento(s)</SelecioneOAssento>

            <ContainerCircle>
                {request ? (
                    request.seats.map((seats, index) => (<SeatSelectorJSX key={index} id={seats.id} name={seats.name} isAvailable={seats.isAvailable} />))
                ) : (
                    <Loading>
                        <img src={loadingCat} alt="loading" />
                    </Loading>
                )
                }
            </ContainerCircle>

            <DisplayInfo>
                <Selected><div className="box"></div><p>Selecionado</p></Selected>
                <Available><div className="box"></div><p>Disponível</p></Available>
                <Unavailable><div className="box"></div><p>Indisponível</p></Unavailable>
            </DisplayInfo>

            <Form>
                <form>
                    <label htmlFor="name">Nome do comprador: </label>
                    <input type="text" id="name" placeholder="Digite seu nome..." required></input>

                    <label htmlFor="cpf">CPF do comprador: </label>
                    <input type="text" id="cpf" placeholder="Digite seu CPF..." required></input>

                    <ContainerButton><Link to={`/Success`} ><Button>Reservar assento(s)</Button></Link></ContainerButton>
                </form>
            </Form>

            {request ? (
                <Footer posterURL={request.movie.posterURL} title={request.movie.title} time={request.name} weekday={request.day.weekday} />
            ) : (
                <Loading>
                    <img src={loadingCat} alt="loading" />
                </Loading>
            )
            }


        </Page>
    );
}

const Page = styled.div`
    width: 90vw;
    margin: 70px auto 150px auto;
`;

const SelecioneOAssento = styled.div`
    margin: 12px 0px 0px 0px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #293845;
`;

const DisplayInfo = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 12px 0px 0px 0px;

`;

const Selected = styled.div`
    display: flex;
    justify-content: center;

    p {
        padding: 30px 0px 0px 0px;
    }

    .box {
        box-sizing: border-box;
        position: absolute;
        width: 25px;
        height: 25px;
        background: #8DD7CF;
        border: 1px solid #1AAE9E;
        border-radius: 17px;
    }
`;

const Available = styled.div`
    display: flex;
    justify-content: center;

    p {
        padding: 30px 0px 0px 0px;
    }

.box {
        box-sizing: border-box;
        position: absolute;
        width: 25px;
        height: 25px;
        background: #C3CFD9;
        border: 1px solid #7B8B99;
        border-radius: 17px;
    }
`;

const Unavailable = styled.div`
    display: flex;
    justify-content: center;

    p {
        padding: 30px 0px 0px 0px;
    }

.box {
        box-sizing: border-box;
        position: absolute;
        width: 25px;
        height: 25px;
        background: #FBE192;
        border: 1px solid #F7C52B;
        border-radius: 17px;
    }
`;

const Form = styled.div`
    display: flex;
    justify-content: center;
    margin: 50px 0px 0px 24px;

    label {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        color: #293845;
    }

    input {
        width: 327px;
        height: 51px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        padding-left: 12px;
        color: #AFAFAF;
    }
`;

const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
`;

const Button = styled.div`
    display: flex;
    justify-content: center;
    margin: 30px 0px 0px 0px;
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
`;

const ContainerCircle = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 340px;
    margin: 0px auto;
    padding: 12px;

    .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    background: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 12px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #000000;
    margin: 9px 3px 9px 3px;
    }

    circle:hover {
        background-color: #445a6c;
        color: white;
    }

    .unavailable {
        background-color: #FBE192;;
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