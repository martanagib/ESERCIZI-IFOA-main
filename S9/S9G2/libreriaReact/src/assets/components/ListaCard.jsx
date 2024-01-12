import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState} from "react"
import BottoniCat from './BottoniCat';
import SingleCard from './SingleCard';

function ListaCard () {
   const [list, setCard] = useState([]) 
   const categories = ['fantasy', 'history', 'horror', 'romance', 'scifi']
   return (
    <>
    <BottoniCat categories= {categories} setCard = {setCard}/>
    {list.map((book)=>
    <SingleCard book={book} key={book.asin} /> 
    )}
   
    </>
  )
}

export default ListaCard;
