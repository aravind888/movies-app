import { Link } from "react-router-dom";

const Movie = (props) => {
    return (
        <Link className="fl-movie" to={`/movie/${props.link+1}`}>
            <div className="col fl-movie__inwrap" >
                <div className="fl-movie__inwrap">
                <div className="fl-movie__poster"><img src="./images/home/star-wars-poster.jpg" /></div>
                <div className="fl-movie__name">{props.title}</div>
                </div>
            </div>
        </Link>
    )
}

export default Movie