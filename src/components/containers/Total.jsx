import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 800px;
    height: 200px;
    background-color: #101010;
    border-radius: 10px;
    overflow: hidden;

`

const TitleWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    justify-items: center;
    background-color:  rgba(167, 167, 167, 0.47);
    width: 100%;
    color: white;
    font-weight: 500;
    padding: 10px 0px; 

`

const InfoWrapper = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    justify-items: center;
    justify-content: space-around;
    list-style-type: none;
    padding-left: 0;
    margin-top: 8px;
`

const Li = styled.li`
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    color: white;
`
export default function Total(){

    return(
        <Container>  
            <TitleWrapper>
                <p>Empresa</p>
                <p>Ticket</p>
                <p>Preço (de um)</p>
                <p>Quantidade</p>
                <p>Variação</p>
            </TitleWrapper>
            <div>
                <InfoWrapper>
                    <Li>Apple</Li>
                    <Li>AAPL</Li>
                    <Li>R$69,90</Li>
                    <Li>2</Li>
                    <Li>0,00%</Li>
                </InfoWrapper>   
            </div>
        </Container>
    )
}
