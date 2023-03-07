import { Link } from "react-router-dom";

const Movie = (props) => {
    return (
        <div className="col-md-6 col-lg-4">
            <Link className="fl-movie" to={`/movie/${props.link+1}`}>
                <div className="col fl-movie__inwrap" >
                    <div className="fl-movie__inwrap">
                        <div className="fl-movie__poster position-relative">
                            <img src="./images/home/star-wars-poster.jpg" />
                            <div className="fl-button__play position-absolute start-0 end-0 top-0 bottom-0 m-auto" >
                            </div>
                        </div>
                        <div className="ps-3">
                            <div className="fl-movie__name">{props.title}</div>
                            <div className="fl-movie__episode-count">Episode {props.link+1}</div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Movie