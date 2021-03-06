import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Reset } from "styled-reset";

import Connexion from "./components/Connection";
import HeaderTop from "./components/HeaderTop";
import MainPage from "./components/header/HeaderMenu01";
import Agissons from "./components/header/HeaderMenu02";
import IlsEtElles from "./components/header/HeaderMenu03";
import Action from "./components/header/HeaderMenu04";
import Sommaire from "./components/header/HeaderMenu00";

import Inscription from "./components/Inscription";
import DisplayClient from "./components/DisplayClient";
import PageFavart from "./components/PageFavart";

import MentionsLegales from "./components/LegalNotice";
import ContactMail from "./components/ContactMail";

import UpdateClient from "./components/UpdateClientForm";
import ClientPage from "./components/ClientPage";
import SideBar from "./components/Sidebar";

import ClientProfil from "./components/ClientProfil";
import RessourcePage from "./components/RessourcePage";
import RessourcePageExt from "./components/RessourceExtPage";
import RessourcesForm from "./components/UpdateRessourcesForm";
import RessourcesFormExt from "./components/UpdateRessourcesExtForm";

import DisplayRessources from "./components/DisplayRessources";

export default function App() {
  const [token, setToken] = useState("");
  const [idClient, setIdClient] = useState("");

  return (
    <div>
      <Reset />
      <HeaderTop token={token} />
      <Switch>
        <Route exact path="/" component={Sommaire} />
        <Route exact path="/main" component={MainPage} />
        <Route path="/agissons" component={Agissons} />
        <Route path="/ilsetelles" component={IlsEtElles} />
        <Route path="/action" component={Action} />
        <Route exact path="/inscription">
          <Inscription setToken={setIdClient} />
        </Route>
        <Route exact path="/sidebar">
          <SideBar setToken={setToken} />
        </Route>
        <Route path="/clientpage" component={ClientPage} />
        <Route path="/mentionslegales" component={MentionsLegales} />
        <Route path="/contact" component={ContactMail} />
        <Route path="/connection">
          <Connexion setToken={setToken} />
        </Route>
        <Route path="/pagefavart" component={PageFavart} />
        <Route path="/clientpage" component={ClientPage} />
        <Route exact path="/updateclient">
          <UpdateClient setId={setIdClient} />
        </Route>
        <Route exact path="/clientprofil">
          <ClientProfil setToken={setToken} />
        </Route>
        <Route exact path="/mentionslegales" component={MentionsLegales} />
        <Route exact path="/contact" component={ContactMail} />
        <Route path="/DisplayClient" component={DisplayClient} />
        <Route path="/ressources" component={RessourcePage} />
        <Route path="/displayressources" component={DisplayRessources} />
        <Route path="/ressourcesext" component={RessourcePageExt} />
        <Route path="/addressources" component={RessourcesForm} />
        <Route path="/addressourcesext" component={RessourcesFormExt} />
        <Route path="/agissons" component={Agissons} />
        <Route path="/ilsetelles" component={IlsEtElles} />
        <Route path="/action" component={Action} />
        <Route path="/inscription" component={Inscription} />
        <Route path="/DisplayClient" component={DisplayClient} />
      </Switch>
    </div>
  );
}
