import styled from "styled-components";
import { Link, useParams, useLocation } from "react-router-dom";

export default function Success() {
    const location = useLocation();

    return (
        <>
            <PedidoFeitoComSucesso>Pedido feito<br />com sucesso!</PedidoFeitoComSucesso>
            <MovieSession>
                <h1>Filme e sessão</h1>
                <p>{location.state.title}</p>
                <p>{location.state.date} - {location.state.time}</p>
            </MovieSession>

            <MovieSession>
                <h1>Ingresso(s)</h1>
                {location.state.seats.map((seat) => <p key={seat % 50}>Assento {seat % 50}</p>)}
            </MovieSession>

            <MovieSession>
                <h1>Comprador</h1>
                <p>{location.state.name}</p>
                <p>{location.state.CPF}</p>
            </MovieSession>

            <ContainerButton><Link to={`/`} ><Button>Voltar para home</Button></Link></ContainerButton>
        </>
    );
}

const PedidoFeitoComSucesso = styled.div`
    display: flex;
    justify-content: center;
    margin: 12px 0px 0px 0px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #247A6B;
`;

const MovieSession = styled.div`
    margin: 28px 0px 0px 28px;

    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;
        color: #293845;
    }

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;
        color: #293845;
    }
`;

const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
    margin: 24px 0px 0px 0px;
`;

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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