export default function Card({image, name, birth_year, nationality, biography, awards}) {


    return (
        <>
        <div className="col">
            <div className="card p-0 h-100 shadow">
                <img src={image} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <span className="d-block"><strong>Birth year:</strong> "{birth_year}";</span>
                    <span className="d-block"><strong>Nationality:</strong> "{nationality}";</span>
                    <p className="card-text"><strong>Biography:</strong> {biography}</p>
                    <h6 className="fw-bold">Awards:</h6>
                    <ul className="list-unstyled mb-0">
                        {
                            Array.isArray(awards) ? 
                            (awards.map((thisAward, i) => (
                                <li key={i}>{thisAward}</li>
                            ))
                            ) : (<span>{awards}</span>)
                        }
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}