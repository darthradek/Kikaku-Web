import * as React from "react";
import { useEffect, useState } from "react";

interface IProps {}

function Component(props: IProps) {
  // SECTION: Props
  const {} = props;

  // SECTION: Constants & Variables

  // SECTION: Hooks State - Data
  const [dataState, setDataState] = useState();

  // SECTION: Hooks Effect - Data
  useEffect(() => {}, []);

  // SECTION: Services

  // SECTION: Services calls
  async function fetchData() {}

  // SECTION: UI Constants & Variables

  // SECTION: Hooks State - UI
  const [uiState, setUiState] = useState();

  // SECTION: Hooks Effect - UI
  useEffect(() => {}, [uiState]);

  // SECTION: UI Events
  function uiEvent() {}

  // SECTION: Render
  return (
    <div>
      <div>{/* Your html here ----**---- */}</div>
    </div>
  );
}

export default Component;
