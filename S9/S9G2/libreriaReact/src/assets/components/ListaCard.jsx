import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import fantasy from "../../../fantasy.json"
import {useState} from "react"

function ListaCard () {
   const [list] = useState(fantasy) 
   return (
    <div className="d-flex justify-content-between flex-wrap">
    {list.map((book)=>
    <Card style={{ width: '18rem' }} key={book.asin}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>
        {book.asin + ' - ' + book.price}
        </Card.Text>
        <Button variant="primary">aggiungi al carrello</Button>
      </Card.Body>
    </Card>
    )}
    </div>
  )
}

export default ListaCard;
