import React from "react";
import Button from 'react-bootstrap/Button';

    const Categories = async (myCategory) => {
        const dataList = [];
        const categoryName = myCategory.toLowerCase()
        const percorso = `../../fileJson/${categoryName}.json`

    
        const module = await import(percorso)
        dataList.push(module.default)
    
    return dataList
    }

const BottoniCat = ({categories, setCard}) => {
    return (
        <div className= "text-center py-4">
            {categories.map((category, index) => 
                <Button variant= "outline-success"
                className= "mx-3"
                onClick= {async () => {
                    try {
                        const data = await Categories(category)
                        setCard(data[0])
                    } catch (error) {
                        console.error ("errore nella ricerca del file", error)
                    }
                }}
                key={index}
                >
                    {category}
                </Button>
            )}
        </div>
    )
}

export default BottoniCat