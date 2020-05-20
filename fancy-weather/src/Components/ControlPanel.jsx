import React from "react";
import { IconRefreshBg } from "./IconRefreshBg";
import { SelectLanguage } from "./SelectLanguage";

export const ControlPanel = () => {
  return (
    <div className="control-panel">
      <IconRefreshBg />
      <SelectLanguage />
    </div>
  );
};
