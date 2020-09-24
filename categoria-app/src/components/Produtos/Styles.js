import styled from "styled-components";

export const CardContainer = styled.div`
  background-color : white;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow :  hidden;
`;

export const Card = styled.div`
  flex: 1 0 21%;
  background-color : white;
  max-width : 360px;
  display : flex;
  flex-direction : column;
  overflow :  hidden;
  border-radius :  2rem;
  box-shadow : 0 1rem 1.5rem rgba(0, 0, 0, 0.5);
  margin: 5rem;
`;

export const Baner = styled.div`
    background-image : url(${props => props.src});
    background-position : center;
    background-repeat : no-repeat;
    background-size : contain;
    height : 11rem;
    display : flex;
    align-items : flex-end;
    justify-content : center;
    box-sizing : border-box;
`;

export const NomeProduto = styled.h2`
    color: #404040;
    font-family: Montserrat, sans-serif;
    text-align : center;
    padding: 0.5rem;
    margin : 0;
`;

export const CardAction = styled.div`
padding: 0 2rem 1.2rem;
display: flex;
flex-direction: column;
`;


export const ButtonPoduto = styled.button`
        color : inherit;
        font : inherit;
        font-weight : bold;
        background-color : #ffd01a;
        width : 100%;
        border : none;
        padding : 1rem;
        outline : none;
        box-sizing : border-box;
        border-radius : 1.5rem / 50%;
        transition : background-color 100ms ease-in-out, transform 200ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
        &:hover{
          background-color : #efb10a;
          transform : scale(1.1);
        }
        &:active {
          background-color : #e8a200;
          transform : scale(1);
        }
`;

export const DescricaoProduto = styled.div`
    text-align : center;
    padding:  2.5rem;
    order 100;
`;

