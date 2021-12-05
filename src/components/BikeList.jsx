import React, { useState, useEffect } from "react";
import { BikeItem } from "./BikeItem";
import { bikes } from "../services/bikes";
import { Row, Col, Button } from "react-bootstrap";

export const BikeList = () => {
  const [filtBike, setFiltBike] = useState(bikes);
  const [txtSearch, setTxtSearch] = useState("KTM 200 Duke");
  const handleSearch = () => {
    const filteredBikes = bikes.filter((item) =>
      item.name.toUpperCase().includes(txtSearch.toUpperCase())
    );
    txtSearch !== "" ? setFiltBike(filteredBikes) : setFiltBike(bikes);
  };
  useEffect(() => {
    console.log("This is mounting hook");
    return () => {
      console.log("Your component is unmounting");
    };
  }, []);
  return (
    <div>
      <Row>
        <Col lg={8}>
          <input
            type="text"
            onChange={(e) => setTxtSearch(e.target.value)}
            placeholder="Search..."
            style={{ width: "700px" }}
          ></input>
        </Col>
        <Col lg={2}>
          <Button onClick={handleSearch}>Search</Button>
        </Col>
      </Row>
      <Row>
        {filtBike.map((item, index) => (
          <Col lg={3}>
            <BikeItem item={item} index={index} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
