import useForm from "./UpdateRessources.jsx";

import {
  FlexBox2,
  FlexBox,
  P,
  Formulaire,
  DivLabel,
  Label,
  Input,
  StyledButton,
  InputDescription,
} from "../styled-components/UpdateRessourcesForm";

import SideBar from "./Sidebar";
import Footer from "./Footer";

export default function Inscription() {
  const { handleChange, values, handleSubmit } = useForm();
  return (
    <>
      <FlexBox>
        <SideBar />
        <FlexBox2>
          <P>Remplissez les champs suivants pour ajouter un document :</P>
          <Formulaire onSubmit={handleSubmit}>
            <fieldset>
              <DivLabel>
                <Label>Lien *</Label>
                <Input
                  type="text"
                  name="link"
                  placeholder="Lien"
                  value={values.link}
                  onChange={handleChange}
                  required
                />
              </DivLabel>
              <DivLabel>
                <Label>Titre *</Label>
                <Input
                  type="text"
                  name="title"
                  placeholder="titre"
                  value={values.title}
                  onChange={handleChange}
                  required
                />
              </DivLabel>
              <DivLabel>
                <Label>Description *</Label>
                <InputDescription
                  type="text"
                  name="description"
                  placeholder="Description"
                  value={values.description}
                  onChange={handleChange}
                />
              </DivLabel>
              <StyledButton type="submit" value="Envoyer">
                Enregistrer
              </StyledButton>
            </fieldset>
          </Formulaire>
        </FlexBox2>
      </FlexBox>
      <Footer />
    </>
  );
}
