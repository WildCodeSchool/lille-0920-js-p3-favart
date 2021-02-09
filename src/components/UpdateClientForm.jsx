import useForm from "./UpdateClient.jsx";
import { useState, useEffect } from "react";

import ClientProfil from "./ClientProfil";
import Footer from "./Footer";

import SideBar from "./Sidebar";

import {
  FlexBox,
  FlexBox2,
  P,
  FlexBox1,
  Formulaire,
  DivLabel,
  Label,
  Input,
  StyledButton,
  Textarea,
  TextareaEnvies,
  DivLabelText,
  DivLabelTerr,
  InputSite,
  FlexBoxClient,
} from "../styled-components/UpdateClientForm";

export default function UpdateClient() {
  const { handleChange, values, handleSubmit } = useForm();
  return (
    <>
      <FlexBox>
        <FlexBox1>
          <SideBar />
        </FlexBox1>
        <FlexBoxClient>
          <ClientProfil />
          <FlexBox2>
            <P>Modifiez vos informations : </P>
            <Formulaire onSubmit={handleSubmit}>
              <fieldset>
                <DivLabel>
                  <Label>Prénom *</Label>
                  <Input
                    type="text"
                    name="username"
                    placeholder="Prénom"
                    value={values.username}
                    onChange={handleChange}
                  />
                </DivLabel>
                <DivLabel>
                  <Label>Nom *</Label>
                  <Input
                    type="text"
                    name="surname"
                    placeholder="Nom"
                    value={values.surname}
                    onChange={handleChange}
                  />
                </DivLabel>
                <DivLabel>
                  <Label>Téléphone *</Label>
                  <Input
                    type="text"
                    name="phone"
                    placeholder="Numéro de téléphone"
                    value={values.phone}
                    onChange={handleChange}
                  />
                </DivLabel>
                <DivLabel>
                  <Label>Métier *</Label>
                  <Input
                    type="text"
                    name="job"
                    placeholder="Métier"
                    value={values.job}
                    onChange={handleChange}
                  />
                </DivLabel>
                <DivLabel>
                  <Label>Nom de la structure *</Label>
                  <Input
                    type="text"
                    name="structure_name"
                    placeholder="Nom de la structure"
                    value={values.structure_name}
                    onChange={handleChange}
                  />
                </DivLabel>
                <DivLabel>
                  <Label>Type de la structure *</Label>
                  <Input
                    type="text"
                    name="structure_type"
                    placeholder="Type de la structure"
                    value={values.structure_type}
                    onChange={handleChange}
                  />
                </DivLabel>
                <DivLabel>
                  <Label>Domaine de la structure *</Label>
                  <Input
                    type="text"
                    name="structure_field"
                    placeholder="Domaine de la structure"
                    value={values.structure_field}
                    onChange={handleChange}
                  />
                </DivLabel>
                <DivLabel>
                  <Label>Votre domaine d'activité</Label>
                  <Textarea
                    type="text"
                    name="job_field"
                    placeholder="Domaine d'activité"
                    value={values.job_field}
                    onChange={handleChange}
                  />
                </DivLabel>
                <DivLabelTerr>
                  <Label>Votre territoire d'action</Label>
                  <Textarea
                    type="text"
                    name="territory"
                    placeholder="Votre territoire d'action"
                    value={values.territory}
                    onChange={handleChange}
                  />
                </DivLabelTerr>
                <DivLabelText>
                  <Label>Vos envies</Label>
                  <TextareaEnvies
                    type="text"
                    name="wishes"
                    value={values.wishes}
                    onChange={handleChange}
                    placeholder="Vos envies"
                  />
                </DivLabelText>
                <DivLabelText>
                  <Label>Votre site internet</Label>
                  <InputSite
                    type="text"
                    name="website"
                    value={values.website}
                    onChange={handleChange}
                    placeholder="Votre site internet"
                  />
                </DivLabelText>
                <StyledButton onClick={handleSubmit}>Enregistrer</StyledButton>
              </fieldset>
            </Formulaire>
          </FlexBox2>
        </FlexBoxClient>
      </FlexBox>
      <Footer />
    </>
  );
}
