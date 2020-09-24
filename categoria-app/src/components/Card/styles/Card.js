import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
background-color: #fff;
border-radius: 0.25rem;
box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
overflow: hidden;
`;

export const Form = styled.div`
padding: 30px;
width: 100%;
max-height: 450px;
max-width: 550px;
overflow: auto;
`;

export const Image = styled.img`
width: 100%;
max-width: 550px;
`;

export const Button = styled.button`
background-color: #4CAF50; /* Green */
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
`;