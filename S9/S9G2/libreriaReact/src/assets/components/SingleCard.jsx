import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import CommentSection from "./CommentSection";

const SingleCard = ({ book }) => {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <Card
        style={{ width: "18rem", border: selected && "4px solid red" }}
        key={book.asin}
      >
        <Card.Img
          variant="top"
          src={book.img}
          onClick={() => setSelected(!selected)}
        />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.asin + " - " + book.price}</Card.Text>
          <Button variant="primary">aggiungi al carrello</Button>
        </Card.Body>
      </Card>
      {selected && <CommentSection asin={book.asin} />}
    </>
  );
};

export default SingleCard;
