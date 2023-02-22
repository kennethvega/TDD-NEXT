import Button from "@/components/utility/button/Button";
import React from "react";

const utility = () => {
  return (
    <div>
      <div className="mx-auto p-5 max-w-lg flex gap-3 flex-col">
        <h3>Buttons</h3>
        <Button variant={"primary"}>Primary Button</Button>
        <Button variant={"secondary"}>Secondary Button</Button>
        <Button>Default button if no variant is specified</Button>
      </div>
    </div>
  );
};

export default utility;
