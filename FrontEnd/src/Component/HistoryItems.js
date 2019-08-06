import React from 'react'
import {Row, Col, Collection, CollectionItem} from "react-materialize";
//import "../css/materialize.min.css"

const HistoryItems = () => {
  return (
    <Row>
      <Col m={6} s={12}>
        <Collection>
          <CollectionItem href="#">Alvin</CollectionItem>
          <CollectionItem href="#" active>
            Alvin
          </CollectionItem>
          <CollectionItem href="#">Alvin</CollectionItem>
          <CollectionItem href="#">Alvin</CollectionItem>
        </Collection>
      </Col>
    </Row>
  );
};

export default HistoryItems