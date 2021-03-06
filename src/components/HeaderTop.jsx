import React from "react";
import logo from "../assets/logo-icon-header/FAVART.jpg";
import twitter from "../assets/logo-icon-header/twitter.svg";
import linkedin from "../assets/logo-icon-header/linkedin.svg";
import mail from "../assets/logo-icon-header/mail.svg";
import connect from "../assets/logo-icon-header/connect.svg";
import user from "../assets/logo-icon-header/user.svg";

import {
  LinkLogo,
  LinkMail,
  DivHeaderTop,
  Logo,
  ContainerIcon,
  IconTwitter,
  IconLinkedin,
  IconMail,
  ContainerIconConnexion,
  IconConnexion,
  ContainerConnexionSentence,
  ConnexionSentence,
} from "../styled-components/HeaderTopStyled.jsx";

import { useSelector } from "react-redux";

export default function HeaderTop() {
  const { idClient } = useSelector((state) => state.idClientReducer);

  return (
    <>
      <DivHeaderTop>
        <LinkLogo to="/">
          <Logo src={logo} alt="logo favart" />
        </LinkLogo>
        <ContainerIcon>
          <a href="https://twitter.com/favart_fr">
            <IconTwitter src={twitter} alt="logo twitter" />
          </a>
          <LinkMail to="/contact">
            <IconMail src={mail} alt="logo mail" />
          </LinkMail>
          <a href="https://www.linkedin.com/company/favart/">
            <IconLinkedin src={linkedin} alt="logo linkedin" />
          </a>
        </ContainerIcon>
        <ContainerConnexionSentence>
          {idClient === 0 ? (
            <ConnexionSentence to="/connection">
              Connexion / Inscription
            </ConnexionSentence>
          ) : idClient === 1 ? (
            <ConnexionSentence to="/pagefavart"> Mon Profil </ConnexionSentence>
          ) : (
            <ConnexionSentence to="/clientpage"> Mon Profil </ConnexionSentence>
          )}
        </ContainerConnexionSentence>
        {idClient === 0 ? (
          <ContainerIconConnexion to="/connection">
            <IconConnexion src={connect} alt="logo connexion" />
          </ContainerIconConnexion>
        ) : idClient === 1 ? (
          <ConnexionSentence to="/pagefavart">
            <IconConnexion src={user} alt="logo connexion" />
          </ConnexionSentence>
        ) : (
          <ConnexionSentence to="/clientpage">
            <IconConnexion src={user} alt="logo connexion" />
          </ConnexionSentence>
        )}
      </DivHeaderTop>
    </>
  );
}
