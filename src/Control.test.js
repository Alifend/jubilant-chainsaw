import React from "react";
import { cleanup, render } from "@testing-library/react";
import Control from "./Control";

afterEach(cleanup);

it("El código no puede ser vacío", () => {
  const { queryByTestId } = render(<Control />);
  const codigoNode = queryByTestId(/codigo/i);

  expect(codigoNode.value).not.toEqual("");
});

it("El plan debe ser un número", () => {
  const { queryByTestId } = render(<Control />);
  const value = queryByTestId(/plan/i).value;
  let isnum = /^\d+$/.test(value);

  expect(isnum).toBe(true);
});

it("El plan debe ser una combinación de 4 dígitos", () => {
  const { queryByTestId } = render(<Control />);
  const value = queryByTestId(/plan/i).value;
  expect(value.length).toBe(4);
});

it("La temperatura debe ser un número", () => {
  const { queryByTestId } = render(<Control />);
  const value = queryByTestId(/temperatura/i).value;
  let isnum = /^\d+$/.test(value);

  expect(isnum).toBe(true);
});

it("La temperatura no debe ser superior a 38 grados", () => {
  const { queryByTestId } = render(<Control />);
  const value = queryByTestId(/temperatura/i).value;
  expect(parseInt(value)).toBeLessThan(38);
});

it("Síntomas deben ser falsos", () => {
  const { queryByTestId } = render(<Control />);
  const tosNode = queryByTestId(/tos/i);
  const indisNode = queryByTestId(/indis/i);
  const mareoNode = queryByTestId(/mareo/i);

  expect(tosNode.checked).toBe(false);
  expect(indisNode.checked).toBe(false);
  expect(mareoNode.checked).toBe(false);
});
