import styled from "styled-components";

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  max-width: 100%;
  margin: 20px 0 20px;
  overflow: hidden;
  width: 400px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  background-color: #344b60;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  max-width: 100%;
  width: 400px;
  height: 40px;
  overflow: hidden;
`;

export const ContainerButtons = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  top: 8px;
  right: 5px;
  text-align: right;
  width: 150px;
`;

export const Action = styled.a`
  background-color: white;
  color: #ef8a4d;
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
  border-radius: 50%;
  text-align: center;
  background: #fff;
  cursor: pointer;
  transition: all 0.4s ease;
  display: inline-block;
  line-height: 21px;
  height: 22px;
  width: 22px;
  box-shadow: 0 5px 25px rgba(93, 70, 232, 0.15);
  margin: 0px 5px;

  & > .svg-inline--fa.fa-w-18 {
    width: 1em;
  }
`;

export const Descricao = styled.h2`
  opacity: 0.7;
  font-family: "Muli", sans-serif;
  font-size: 1.1em;
  font-weight: bold;
  color: #6b6a6a;
  margin: 10px 0;
  margin-left: 1.4em;
  text-align: start;
`;

export const Title = styled.h6`
  margin: 0;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #fff;
  display: block;
  font-size: 0.67em;
  margin-left: 2em;
  align-self: center;
`;
