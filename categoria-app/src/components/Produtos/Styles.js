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
  background-color : white;
  flex-direction : column;
  margin: 1.5rem;
  padding: 1.5rem;
  max-width : 300px;
  overflow :  hidden;
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
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
    font-size: 1.5rem;
    font-weight: 700;
    text-align : center;
    padding: 1rem 0;
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
        font-size: 1.5rem;
        background-color : #ffd01a;
        width : 100%;
        border : none;
        padding : 1rem;
        outline : none;
        box-sizing : border-box;
        border-radius : 1.5rem / 50%;
        text-transform: uppercase;
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
    padding:  0;
    order 100;
`;

