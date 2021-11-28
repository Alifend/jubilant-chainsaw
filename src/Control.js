import React, { useState } from "react";
import styled from "styled-components";
const Control = () => {
  //Hey, Mr Joshua, modify this data to test different cases
  const [dummyData, setDummyData] = useState({
    codigo: 176616,
    plan: 3743,
    temperatura: 36,
    tos: false,
    indisposicion: false,
    mareo: false,
  });
  return (
    <LoginCard>
      <Title>Acceda al Campus Virtual </Title>
      <Name>Código de estudiante</Name>
      <Input
        placeholder="Código de estudiante"
        id="codigo"
        data-testid="codigo"
        defaultValue={dummyData.codigo}
      ></Input>
      <Name>Plan</Name>
      <Input
        placeholder="Plan"
        data-testid="plan"
        id="plan"
        defaultValue={dummyData.plan}
      ></Input>
      <Name>Temperatura</Name>

      <Input
        placeholder="Temperatura"
        data-testid="temperatura"
        id="temperatura"
        defaultValue={dummyData.temperatura}
      ></Input>
      <Title style={{ alignSelf: "center" }}>
        ¿Posee alguno de estos síntomas?
      </Title>
      <Lista>
        <label>
          <Input
            data-testid="tos"
            id="tos"
            type="checkbox"
            defaultChecked={dummyData.tos}
          ></Input>
          Tos
        </label>
        <label>
          <Input
            data-testid="indis"
            type="checkbox"
            defaultChecked={dummyData.indisposicion}
          ></Input>
          Indisposición
        </label>
        <label>
          <Input
            data-testid="mareo"
            type="checkbox"
            defaultChecked={dummyData.mareo}
          ></Input>
          Mareos
        </label>
      </Lista>
      <Submit>Ingresar datos</Submit>
    </LoginCard>
  );
};

const Lista = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
const Title = styled.p`
  font-size: 20px;
  color: #4c5a64;
  margin: 10px 0px;
`;

const Name = styled.p`
  margin-top: 5px;
`;
const Submit = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  border: none;
  background-color: #2196f3;
  border-radius: 10px;
  align-self: center;
  margin-top: 20px;
  color: white;
`;
const LoginCard = styled.div`
  padding: 50px 20px;
  height: 400px;
  width: 400px;
  border-radius: 10px;
  border: solid 1px black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Input = styled.input`
  border: solid 1px gray;
  border-radius: 10px;
  width: 100%;
  padding: 10px 10px;
  margin-top: 5px;
`;
export default Control;
