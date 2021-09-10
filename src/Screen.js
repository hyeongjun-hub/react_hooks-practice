import React from "react";
import { useSetLang, useT } from "./context";

const Screen = () => {
  const setLang = useSetLang();
  const t = useT();
  return (
    <>
      <h1>{t("hello")}!</h1>
      <button onClick={() => setLang("es")}>{t("translate")}!</button>
    </>
  );
};

export default Screen;
