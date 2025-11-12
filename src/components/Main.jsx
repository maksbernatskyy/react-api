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
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {
                        todos.map((thisTodo) => (
                            <div key={thisTodo.id} className="col">
                                <div className="card p-0 h-100 shadow">
                                    <img src={thisTodo.image} className="card-img-top" alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">{thisTodo.name}</h5>
                                        <span className="d-block"><strong>Birth year:</strong> "{thisTodo.birth_year}";</span>
                                        <span className="d-block"><strong>Nationality:</strong> "{thisTodo.nationality}";</span>
                                        <p className="card-text"><strong>Biography:</strong> {thisTodo.biography}</p>
                                        <h6 className="fw-bold">Awards:</h6>
                                        <ul className="list-unstyled mb-0">
                                            {
                                                thisTodo.awards.map((thisAward, i) => (
                                                    <li key={i}>{thisAward}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
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