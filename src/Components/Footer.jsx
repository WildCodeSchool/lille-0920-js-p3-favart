import {
  FooterMain,
  ContactUs,
  MapContainer,
  FirstUl,
  Space,
  UlIcons,
  Img,
  EndFooter,
  MyFrame,
} from "../Styled-components/FooterStyle";

import { ulMap } from "../Assets/others/test";

export default function Footer() {
  return (
    <FooterMain>
      <ContactUs>
        <h1>Nous contacter</h1>
        <Space />
        <FirstUl>
          <li>Favart</li>
          <li>94, rue La Fayette</li>
          <li>75009 PARIS</li>
          <br />
          <li>Tél. :+33(0) 155 333 333</li>
          <li>Mail : contact@favart.com</li>
        </FirstUl>
        <h1>Nous suivre</h1>
        <Space />
        <UlIcons>
          {ulMap.map((social) => {
            return (
              <li>
                <Img src={social.url} alt={social.alt} />
              </li>
            );
          })}
        </UlIcons>
        <EndFooter>
          <p>Plan du site | Informations légales</p>
          <p>FAVART - 2020</p>
        </EndFooter>
      </ContactUs>
      <MapContainer>
        <MyFrame
          title="myframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.008758496551!2d2.346904715963809!3d48.87710957928944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e6b2744ee1d%3A0x6442d1d0970a773!2sFavart!5e0!3m2!1sfr!2sfr!4v1608124901714!5m2!1sfr!2sfr"
          height="300"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></MyFrame>
      </MapContainer>
    </FooterMain>
  );
}