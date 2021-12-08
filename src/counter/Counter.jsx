import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Badge } from "react-navigation-pickupbiz";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Button disabled={!(counter > 0)} onClick={() => setCounter(counter - 1)}>
        -
      </Button>
      <h1>{counter}</h1>
      <Button
        disabled={!(counter < 10)}
        onClick={() => setCounter(counter + 1)}
      >
        +
      </Button>
      <p>
        <Badge value="Asad Component" />
      </p>
    </div>
  );
};
