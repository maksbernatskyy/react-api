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
                <div className="card">
                    <ul>
                        {
                            todos.map((thisTodo, i) => (
                                <li key={i}>{thisTodo.name}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </main>
        </>
    )
}