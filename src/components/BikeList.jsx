// <<<<<<< Updated upstream
// import React, { useState } from "react";
// import { BikeItem } from "./BikeItem";
// import { bikes } from "../services/bikes";
// import { Row, Col, Button } from "react-bootstrap";

// export const BikeList = () => {
//   const [filtBike, setFiltBike] = useState(bikes);
//   const [txtSearch, setTxtSearch] = useState("KTM 200 Duke");
//   const handleSearch = () => {
//     const filteredBikes = bikes.filter((item) => item.name === txtSearch);
//     txtSearch !== "" ? setFiltBike(filteredBikes) : setFiltBike(bikes);
//   };
// =======
import React, { useState} from "react";
import { BikeItem } from "./BikeItem";
import { bikes } from "../services/bikes";
import { Row, Col, Button } from "react-bootstrap";
import { width } from "dom-helpers";
export const BikeList = () => {
  const [filtBike, setFiltBike] = useState(bikes);
  const [txtSearch, setTxtSearch]= useState("KTM 200 Duke");
  const handleSearch = () => {
   const filteredBikes = bikes.filter(item=> item.name=== txtSearch);
   if(txtSearch!=="") setFiltBike(filteredBikes);
   else setFiltBike(bikes)
  //  or optimum code of if else is:
  txtSearch !=="" ? setFiltBike(filteredBikes): setFiltBike(bikes);

  }
// >>>>>>> Stashed changes
  return(
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
          <Button onClick={() => handleSearch()} >Search</Button>
        </Col>
      </Row>
      <Row>
        {filtBike.map((item, index) => (
          <Col>
            <BikeItem item={item} index={index} />
          </Col>
        ))}
      </Row>
    </div>
  );