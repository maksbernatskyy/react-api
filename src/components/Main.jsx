import { useEffect, useState } from "react"
import axios from "axios"

{/* Import the card */}
import Card from "./Card"

export default function Main() {

    {/* State for Axios */}
    const [todos, setTodos] = useState([])

    {/* Function call API */}
    function fetchTodos() {
        axios.get("https://lanciweb.github.io/demo/api/actors/")
            .then((res) => setTodos(res.data))
            .catch((err) => console.error(err))
    }

    useEffect(fetchTodos, [] )

    return (
        <>
        <main>
            <div className="container">
                <div className="my-3">
                    <h2 className="text-uppercase">actors:</h2>
                </div>

                {/* Grid Actors */}
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {
                        todos.map((thisTodo) => (
                            <Card 
                              key={thisTodo.id}
                              image={thisTodo.image}
                              name={thisTodo.name}
                              birth_year={thisTodo.birth_year}
                              nationality={thisTodo.nationality}
                              biography={thisTodo.biography}
                              awards={thisTodo.awards}
                            />
                        ))
                    }
                </div>
            </div>
        </main>
        </>
    )
}