import React from "react";
import { Providers } from "../providers";
import { Switch as SwitchToggle } from "@nextui-org/react";
import { PropsSwitch } from "./TypeSwitch";
const Switch: React.FC<PropsSwitch> = ({ btnSize }) => {
  return (
    <Providers>
      <div className="flex gap-4">
        <SwitchToggle defaultSelected color="default" size={btnSize}>
          Default
        </SwitchToggle>
        <SwitchToggle defaultSelected color="primary" size={btnSize}>
          Primary
        </SwitchToggle>
        <SwitchToggle defaultSelected color="secondary" size={btnSize}>
          Secondary
        </SwitchToggle>
        <SwitchToggle defaultSelected color="success" size={btnSize}>
          Success
        </SwitchToggle>
        <SwitchToggle defaultSelected color="warning" size={btnSize}>
          Warning
        </SwitchToggle>
        <SwitchToggle defaultSelected color="danger" size={btnSize}>
          Danger
        </SwitchToggle>
      </div>
    </Providers>
  );
};

export default Switch;
