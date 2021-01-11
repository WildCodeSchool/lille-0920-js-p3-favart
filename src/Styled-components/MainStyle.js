import styled from "styled-components";
import { device } from "../Assets/Device/Device";

export const Body = styled.div`
  font-family: "Roboto", sans-serif;
  background-color: #D3D3D3;
`;

export const H1Left = styled.h1`
  color: #122239;
  margin: 0 0 1vh 7vw;
  font-size: 3rem;

  @media ${device.smallDevices} {
    text-align: center;
    font-size: 2.3rem;
    margin: 5vh 0 3vh 0;
    text-decoration: underline;
  }
`;

export const ContainerWhy = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 7vw 0 7vw;
  justify-content: center;
  text-align: justify;
  align-items: center;

  @media ${device.smallDevices} {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const List = styled.ul`
  padding-left:0;
`

export const PWhy = styled.p`
  padding-left: 3vw;
  font-size: 1.2rem;
  color: black;
  line-height: 140%;

  @media ${device.smallDevices} {
    text-align: justify;
    padding-left: 0;
  }
`;

export const ImgWhy = styled.img`
  width: 30vw;
  height: 40vh;
  border-radius: 15px;

  @media ${device.smallDevices} {
    width: 90vw;
    height: 40vh;
  }
`;

export const H2Title = styled.h2`
  color: #122239;
  text-align: center;
  font-size: 2.5rem;
  margin-top: 8vh;
`;

export const PTitle = styled.p`
  text-align: justify;
  font-size: 1.2rem;
  margin: 2vh 7vw 8vh 7vw;
  color: black;
  line-height: 140%;
`;

export const H1Right = styled.h1`
  color: #122239;
  display: flex;
  justify-content: flex-end;
  margin: 0 7vw 1vh 0;
  font-size: 3rem;

  @media ${device.smallDevices} {
    text-align: center;
    font-size: 2.3rem;
    margin: 0 0 1vh 0;
    display: flex;
    justify-content: center;
    text-decoration: underline;
  }
`;

export const ContainerWhom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: justify;
  align-items: center;
  margin: 0 7vw 0 7vw;

  @media ${device.smallDevices} {
    display: flex;
    flex-direction: column;
  }
`;

export const ImgWhom = styled.img`
  width: 50vw;
  height: 50vh;
  border-radius: 15px;

  @media ${device.smallDevices} {
    width: 90vw;
    height: 40vh;
  }
`;

export const PWhom = styled.p`
  padding-right: 50px;
  font-size: 1.2rem;
  color: black;

  @media ${device.smallDevices} {
    display: flex;
    justify-content: center;
    padding: 0;
  }
`;

export const PMap = styled.p`
  color: black;
  margin: 2vh 7vw 1vh 7vw;
  font-size: 1.2rem;
  text-align: justify;

  @media ${device.smallDevices} {
  }
`;

export const Map = styled.div`
  text-align: center;
  margin: 5vh 0 5vh 0;

  @media ${device.smallDevices} {
    display: none;
  }
`;

export const Testing = styled.h3`
  text-align: center;
  padding: 3vh 0 3vh 0
`