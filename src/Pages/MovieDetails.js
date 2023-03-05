import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { movie } from '../redux/Movie/movieSlice';
// import { movieCharacters } from "../redux/Movie/movieCharactersSlice"
import axios from 'axios';

const Movie = () => {

    const dispatch = useDispatch();

    let id = useParams();

    const [allCharacters, setAllCharacters] = useState([]);

    const movieData = useSelector(state => state.movie && state.movie.movie)
    const movieLoading = useSelector(state => state.movie && state.movie.loading)

    console.log(movieData)

    useEffect(() => {
        dispatch(movie(id.movie_id))
    }, [])


    useEffect(() => {
        const movieCharactersData = movieData && movieData.characters && movieData.characters.map((val, i) => {
            return (
                axios.get(val, {}).then(res => {
                    setAllCharacters(prevState => [...prevState, res.data])
                })
            )
        })

    }, [movieData && movieData.characters && movieData.characters])
    

    console.log(allCharacters, "AllCharacters")


    return (
        <section className="">
            <div className='container'>
            {movieLoading ? 
                <div>Loading</div>
                :
                <div>
                    <div>
                        <div className='fl-movie__banner'>
                            <img src='/images/home/star-wars-poster.jpg' />
                        </div>
                        <div className="fl-title__banner">{movieData.title}</div>
                    </div>
                    <div className='fl-movie__cast'>
                        <h2 className='fl-title__section'>Cast</h2>
                        <ul className='fl-movie__cast-inwrap'>
                            {allCharacters && allCharacters && allCharacters.slice(0, 6).map((character, ind) => {
                                return (
                                    <div className='fl-movie__character'>
                                        <div className='fl-movie__character-img'>

                                        </div>
                                        <div className='fl-title__para'>
                                            {character.name}
                                        </div>
                                    </div>
                                )
                            })}
                            
                        </ul>
                    </div>
                </div>
            }
            </div>
        </section>
    )
}

export default Movie