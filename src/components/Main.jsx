import { useEffect, useState } from "react"
import axios from "axios"

{/* Import the card */}
import Card from "./Card"

export default function Main() {

    {/* State for Axios for actors */}
    const [todosM, setTodosM] = useState([])

    {/* State for Axios for actresses */}
    const [todosF, setTodosF] = useState([])

    {/* Function call API for actors */}
    function fetchTodosM() {
        axios.get("https://lanciweb.github.io/demo/api/actors/")
            .then((res) => setTodosM(res.data))
            .catch((err) => console.error(err))
    }

    {/* Function call API for actresses */}
    function fetchTodosF() {
        axios.get("https://lanciweb.github.io/demo/api/actresses/")
            .then((res) => setTodosF(res.data))
            .catch((err) => console.error(err))
    }

    {/* useEffect for actors */}
    useEffect(fetchTodosM, [] )

    {/* useEffect for actresses */}
    useEffect(fetchTodosF, [] )



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
                        todosM.map((thisTodo) => (
                            <Card 
                              key={thisTodo.id}
                              image={thisTodo.image}
                              name={thisTodo.name}
                              birth_year={thisTodo.birth_year}
                              nationality={thisTodo.nationality}
                              biography={thisTodo.biography}
                              movies={thisTodo.known_for}
                              awards={thisTodo.awards}
                            />
                        ))
                    }
                </div>

                <div className="my-5">
                    <h2 className="text-uppercase">actresses:</h2>
                </div>

                {/* Grid Actresses */}
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {
                        todosF.map((thisTodo) => (
                            <Card 
                              key={thisTodo.id}
                              image={thisTodo.image}
                              name={thisTodo.name}
                              birth_year={thisTodo.birth_year}
                              nationality={thisTodo.nationality}
                              biography={thisTodo.biography}
                              movies={thisTodo.most_famous_movies}
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