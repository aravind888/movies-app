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
        <>
            <section className='fl-section fl-movie__banner' style={{ backgroundImage: "url(/images/home-details/movie-poster.jpg)" }}></section>
            <section className="">
                <div className='container'>
                {movieLoading ? 
                    <div>Loading</div>
                    :
                    <div>
                        <div className='fl-movie__episode-content position-relative d-md-flex'>
                            <div className='fl-movie__episode-banner position-relative'>
                                <div className="fl-button__play fl-button__play-lg position-absolute start-0 end-0 top-0 bottom-0 m-auto" ></div>
                                <img src='/images/home/star-wars-poster.jpg' />
                            </div>
                            <div className='ps-md-5 fl-movie__banner-details'>
                                <div className="fl-title__banner fl-title__section">{movieData.title}</div>
                                <div className='fl-hero__movie-season'>Episode 1</div>
                                <ul className="fl-rating__stars d-flex mt-3">
                                    
                                    <li className="fl-rating__star"><img src="/images/icons/star.svg" /></li>
                                    <li className="fl-rating__star"><img src="/images/icons/star.svg" /></li>
                                    <li className="fl-rating__star"><img src="/images/icons/star.svg" /></li>
                                    <li className="fl-rating__star"><img src="/images/icons/star.svg" /></li>
                                
                                </ul>
                            </div>
                        </div>
                        <div className='fl-movie__cast'>
                            <h2 className='fl-title__section'>About </h2>
                            <p className='fl-para fl-para--white'>Loram iposam loram iposam seria koiar loram iposam seria koiar loram iposam seria koiar loram iposam seria koiar
                                koiar loram iposam seria koiar loram iposam seria koiar loram iposam seria koiar Loram iposam loram iposam seria koiar loram iposam seria koiar loram iposam seria koiar loram iposam seria koiar
                                koiar loram iposam seria koiar loram iposam seria koiar loram iposam seria koiar</p>
                        </div>
                        <div className='fl-movie__cast mb-5'>
                            <h2 className='fl-title__section'>Cast</h2>
                            <ul className='fl-movie__cast-inwrap'>
                                {allCharacters && allCharacters && allCharacters.slice(0, 6).map((character, ind) => {
                                    return (
                                        <div className='fl-movie__character'>
                                            <div className='fl-movie__character-img'>

                                            </div>
                                            <div className='fl-para fl-para--white'>
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
        </>
    )
}

export default Movie