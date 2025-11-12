import { useEffect, useState } from "react"
import axios from "axios"

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
                <div className="row row-cols-4">
                    {
                        todos.map((thisTodo) => (
                            <div key={thisTodo.id} className="card">
                                <img src={thisTodo.image} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{thisTodo.name}</h5>
                                    <p className="">{thisTodo.birth_year}</p>
                                    <p className="">{thisTodo.nationality}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </main>
        </>
    )
}