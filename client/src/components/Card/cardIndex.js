import React from "react";
import Card from "react-bootstrap/Card";

export default function MyCard({ question, handleBlanks, index, hidden }) {
  return (
    <Card
      bg="primary"
      border="dark"
      style={{ width: "fluid", height: "10rem" }}
      key={question._id}
    >
      <Card.Img variant="top" src={question.img} />
      <Card.Body onClick={(e) => handleBlanks(index)}>
        <Card.Title className="card-header bg-primary text-light p-4 m-0 ta-c">
          ${question.value}
          {!hidden[index]}
        </Card.Title>
        <Card.Text className="text-light ">
          question.hint. for some reason i cannot get this to populate from seed
          file after running seed. i also can't get the image to load from seed.
          please review seed file. help us almighty tutor.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
