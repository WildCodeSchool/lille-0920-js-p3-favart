import {
  FlexBox1,
  Name,
  Company,
  Info,
  Button,
  Link1,
} from "../styled-components/Sidebar";
import React, { useState, useEffect } from "react";

import { api } from "../conf";
import { useSelector, useDispatch } from "react-redux";

export default function Sidebar({ setToken }) {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const { idClient } = useSelector((state) => state.idClientReducer);

  function handleClick(e) {
    e.preventDefault();
    dispatch({ type: "UNSET_ID" });
  }

  useEffect(() => {
    setLoading(true);
    api.get(`/client/${idClient}`).then((res) => {
      setClients(res.data[0]);
      setLoading(false);
    });
  }, []);

  return (
    <FlexBox1>
      <Info>
        <Name>{clients.username}</Name>
        <Company>{clients.job}</Company>
      </Info>
      <Button onClick={handleClick}>
        <Link1 to="/">Déconnexion</Link1>
      </Button>
    </FlexBox1>
  );
}
