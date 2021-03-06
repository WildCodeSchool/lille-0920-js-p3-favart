import styled from "styled-components";
import { Device } from "../assets/Device/Device";

export const FlexBox = styled.div`
  display: flex;
  margin-top: 4vh;
  @media ${Device.mobile} {
    flex-direction: column;
  }
`;

export const FlexBox2 = styled.div`
  flex: 2;
  height: 400vh;
  padding-right: 3vw;
  padding-left: 3vw;
  padding-top: 8vh;
`;

export const FlexBox1 = styled.div`
  flex: 1;
  background: #122239;
  height: 200vh;
  @media ${Device.mobile} {
    flex-direction: column;
    height: 5vh;
  }
`;

export const FlexBoxClient = styled.div`
  display: flex;
  flex-direction: column;
  height: 190vh;
`;

export const P = styled.h1`
  font-size: 1.5rem;
  font-family: "JosefinSans-SemiBold";
  @media ${Device.mobile} {
    margin-left: 2vw;
  }
`;

export const Formulaire = styled.form`
  width: 65vw;
  margin-top: 8vh;
  margin-right: 2vw;
  display: flex;
  font-size: 1.5em;
  flex-direction: column;
  justify-content: space-between;
  height: 50vh;
  @media ${Device.mobile} {
    margin-left: 2vw;
  }
`;

export const DivLabel = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  margin-bottom: 6vh;
  width: 100%;
  height: 2.7vh;
  @media ${Device.mobile} {
  }
`;

export const DivLabelText = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: start;
  flex-direction: column;
  margin-bottom: 6vh;
  margin-top: 10vh;
  width: 100%;
  height: 2.7vh;
  @media ${Device.mobile} {
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const DivLabelTerr = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: start;
  flex-direction: column;
  margin-bottom: 6vh;
  margin-top: 11vh;
  width: 100%;
  height: 2.7vh;
  @media ${Device.mobile} {
  }
`;

export const DivTheme = styled.div`
  display: flex;
  justify-content: center;
  margin: 5vh;
  width: 100%;
  text-align: start;
  height: 2.7vh;
  @media ${Device.mobile} {
  }
`;

export const Label = styled.label`
  font-size: 1rem;
  color: black;
  margin-bottom: 0.5vw;
  width: 30%;
  font-family: "JosefinSans-SemiBold";
  @media ${Device.mobile} {
    display: none;
  }
`;

export const Input = styled.input`
  width: 50%;
  text-align: center;
  font-family: "JosefinSans-SemiBold";
  @media ${Device.mobile} {
    width: 82vw;
  }
`;

export const InputSite = styled.input`
  width: 75.6%;
  text-align: center;
  font-family: "JosefinSans-SemiBold";
  @media ${Device.mobile} {
    width: 82vw;
    margin-top: 9vh;
  }
`;

export const Textarea = styled.textarea`
  width: 77%;
  height: 25vh;
  text-align: center;
  font-family: "JosefinSans-SemiBold";
  resize: none;
  @media ${Device.mobile} {
    width: 86vw;
  }
`;

export const TextareaEnvies = styled.textarea`
  width: 77%;
  height: 25vh;
  text-align: center;
  font-family: "JosefinSans-SemiBold";
  resize: none;
  @media ${Device.mobile} {
    width: 86vw;
    margin-top: 0vh;
  }
`;

export const StyledButton = styled.button`
  padding: 2 2vw;
  font-size: 1.5rem;
  font-family: "JosefinSans-SemiBold";
  border: none;
  background: #122239;
  color: #c4c1c7;
  letter-spacing: 2px;
  transition: 0.2s all ease-in-out;
  border-bottom: 2px solid transparent;
  outline: none;
  height: 4vh;
  border-radius: 5px;
  margin-top: 10vh;
  margin-bottom: 20vh;
  &:hover {
    background: #008bd0;
    color: #d7d0db;
    cursor: pointer;
  }
  @media ${Device.mobile} {
    margin-left: 23vw;
    margin-bottom: 4vh;
    margin-top: 20vh;
    height: 9vw;
  }
`;
