import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle
  } from 'reactstrap';

const People = (props) => {
     return (
    <div>
      <Card className="Card">
        <CardBody className="cardBody">
            <CardTitle className="title">Name: {props.name}</CardTitle>
            <CardText>Gender: {props.gender} </CardText>
            <CardText> Hair Color: {props.hair_color} </CardText>
            <CardText> Eye Color: {props.eye_color} </CardText>


        </CardBody>
      </Card>
    </div>
  );
};

export default People;