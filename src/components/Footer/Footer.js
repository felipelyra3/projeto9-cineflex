import styled from "styled-components";

export default function Footer({ posterURL, title, time, weekday }) {
    return (
        <ContainerFooter>
            <ContainerImg><img src={posterURL} alt='poster' /></ContainerImg>
            <Text>
                <p>{title}</p>
                {weekday && time ? <p>{weekday} - {time}</p> : <></>}
            </Text>
        </ContainerFooter>
    );
}

const ContainerFooter = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    height: 117px;
    left: 0px;
    bottom: 0px;
    background: #DFE6ED;
    border: 1px solid #9EADBA;

    img {
        width: 48px;
        height: 72px;
    }

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        display: flex;
        align-items: center;
        color: #293845;
    }
`;

const ContainerImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 89px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    margin: 14px 14px 14px 10px;
`;

const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;