import { Button } from "@material-ui/core";
import React from "react";
const MyButton = ({ text, disabled }) => {
  return disabled === true ? (
    <Button variant="outlined" color="primary" size="medium" disabled>
      {text}
    </Button>
  ) : (
    <Button variant="outlined" color="primary" size="medium" dis>
      {text}
    </Button>
  );
};

export default MyButton;
