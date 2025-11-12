export default function Card({image, name, birth_year, nationality, biography, movies, awards}) {


    return (
        <>
        <div className="col">
            <div className="card p-0 h-100 shadow">
                {/* Image */}
                <img src={image} className="card-img-top" alt="" />
                <div className="card-body">
                    {/* Name */}
                    <h5 className="card-title">{name}</h5>
                    {/* Birth Year */}
                    <span className="d-block"><strong>Birth year:</strong> "{birth_year}";</span>
                    {/* Nationality */}
                    <span className="d-block"><strong>Nationality:</strong> "{nationality}";</span>
                    {/* Biography */}
                    <p className="card-text"><strong>Biography:</strong> {biography}</p>
                    {/* Most popular movies */}
                    <h6 className="fw-bold">Known for:</h6>
                    <ul className="mb-3">
                        {
                            movies.map((thisMovies, i) => (
                                <li key={i}>{thisMovies}</li>
                            ))
                        }
                    </ul>

                    {/* Awards */}
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