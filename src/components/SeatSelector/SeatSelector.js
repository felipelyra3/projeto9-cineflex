import styled from "styled-components";
import Footer from "../Footer/Footer";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import loadingCat from "../../assets/images/reload-cat.gif";

function SeatSelectorJSX({ name, isAvailable, id, allSelected, setAllSelected }) {
    const [selected, setSelected] = useState(false);
    let txt = 'circle';
    if (isAvailable === true && selected === true) {
        txt += ' selected';
    } else if (isAvailable === false) {
        txt += ' unavailable'
    }

    function seatAvailable() {
        setSelected(!selected);

        if (allSelected.includes(id) === true) {
            let aux = [...allSelected];
            for (let i = 0; i < allSelected.length; i++) {
                if (id === allSelected[i]) {
                    aux.splice(i, 1);
                    setAllSelected([...aux]);
                }
            }
        } else {
            setAllSelected([...allSelected, id]);
        }

    }

    return (

        <div className={txt} onClick={isAvailable ? (seatAvailable) : (() => { alert('Esse assento não está disponível') })}>{name}</div>
    );
}

export default function SeatSelector() {
    const [request, setRequest] = useState('');
    const { timeId } = useParams();
    const [allSelected, setAllSelected] = useState([]);
    const [name, setName] = useState('');
    const [CPF, setCPF] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${timeId}/seats`);

        promise.then((request) => {
            setRequest(request.data);
            console.log(request.data);
        });
    }, []);

    function handleForm(e) {
        e.preventDefault();
        const body = {
            ids: allSelected,
            name: name,
            cpf: CPF
        }

        const obj = {
            title: request.movie.title,
            date: request.day.date,
            time: request.name,
            seats: allSelected,
            name: name,
            CPF: CPF
        }

        const post = axios.post('https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many', body);

        post.then(() => {
            console.log(obj);
            navigate('/Success', { state: obj });
        });

        post.catch((error) => {
            console.log(error);
        })

    }


    return (
        <Page>
            <SelecioneOAssento>Selecione o(s) assento(s)</SelecioneOAssento>

            <ContainerCircle>
                {request ? (
                    request.seats.map((seats, index) => (<SeatSelectorJSX key={index} id={seats.id} name={seats.name} isAvailable={seats.isAvailable} allSelected={allSelected} setAllSelected={setAllSelected} />))
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
                <form onSubmit={handleForm}>
                    <label htmlFor="name">Nome do comprador: </label>
                    <input type="text" id="name" placeholder="Digite seu nome..." value={name} onChange={(e) => { setName(e.target.value) }} required></input>

                    <label htmlFor="cpf">CPF do comprador: </label>
                    <input type="text" id="cpf" placeholder="Digite seu CPF..." value={CPF} onChange={(e) => { setCPF(e.target.value) }} required></input>

                    <ContainerButton><Button type="submit">Reservar assento(s)</Button></ContainerButton>
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

const Button = styled.button`
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
    border: none;
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
        background: #FBE192;
        border: 1px solid #F7C52B;
    }

    .selected {
        background: #8DD7CF;
        border: 1px solid #45BDB0;
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