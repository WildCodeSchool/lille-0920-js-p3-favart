import ImgRessources from "../assets/ImgRessources.jpg";

import SideBar from "./Sidebar";
import Footer from "./Footer";

import {
  FlexBox,
  FlexBox2,
  Ressources,
  RessourcesFlex,
  Agir,
  AgirFlex,
  TextAgir,
  Flash,
  ButtonFavart,
  ButtonExt,
  DivCenter,
  ButtonEnd,
  RessourcesFav,
  RessourcesExt,
} from "../styled-components/ClientPage";

export default function connexion() {
  return (
    <>
      <FlexBox>
        <SideBar />
        <FlexBox2>
          <Ressources>Accéder au centre de ressources Favart</Ressources>
          <RessourcesFlex>
            <RessourcesFav to="/ressources">
              <ButtonFavart>Centre de ressources Favart</ButtonFavart>
            </RessourcesFav>
            <RessourcesExt to="/ressourcesext">
              <ButtonExt>Centre de ressources externe</ButtonExt>
            </RessourcesExt>
          </RessourcesFlex>
          <Agir to="/updateclient">Votre profil</Agir>
          <AgirFlex>
            <TextAgir>Accédez à votre profil afin de le modifier.</TextAgir>
          </AgirFlex>
          <Flash>Echange flash avec nous</Flash>
          <DivCenter>
            <a
              href="https://meetings.hubspot.com/yoann-geffroy"
              target="_blank"
            >
              <ButtonEnd>Rendez-vous flash</ButtonEnd>
            </a>
          </DivCenter>
        </FlexBox2>
      </FlexBox>
      <Footer />
    </>
  );
}
