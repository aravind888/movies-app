import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { flims } from "../redux/FlimsList/flimsSlice";
import { Link } from "react-router-dom";


import Movie from "../Components/Home/Movie";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(flims())
  }, [])

  const moviesData = useSelector(state => state.allFlims && state.allFlims.flimsList && state.allFlims.flimsList.results)
  const movieLoading = useSelector(state => state.allFlims && state.allFlims && state.allFlims.loading )

  console.log(moviesData   , "flims")


  return (
    <>
      <section className="fl-section p-0">
        <div className="">
          <div className="fl-hero__row d-flex flex-column-reverse  flex-lg-row flex-wrap align-items-center justify-content-end">
            <div className="fl-hero__col fl-hero__col-left pe-lg-5 mt-4 mt-lg-0">
              <div className="fl-hero__content-wrap">
                <h2 className="fl-hero__title text-uppercase fw-bold mb-0">Star Wars</h2>
                <div className="fl-hero__movie-season">Season 1</div>
                <div className="fl-hero__rating mb-1">
                  <ul className="fl-rating__stars d-flex mt-3">
                    
                    <li className="fl-rating__star"><img src="/images/icons/star.svg" /></li>
                    <li className="fl-rating__star"><img src="/images/icons/star.svg" /></li>
                    <li className="fl-rating__star"><img src="/images/icons/star.svg" /></li>
                    <li className="fl-rating__star"><img src="/images/icons/star.svg" /></li>
                    
                  
                  </ul>
                  <ul className="fl-hero__movie-categories d-flex align-items-center mt-3">
                    <li className="fl-batch">Fantasy</li>
                    <li className="fl-batch">Action</li>
                    <li className="fl-batch">Drama</li>
                  </ul>
                </div>
                <p className="fl-hero__para fl-para fl-para--white mt-4 mb-5">Loram iposam loram iposam seria koiar loram iposam seria koiar loram iposam seria koiar loram iposam seria koiar
                  koiar loram iposam seria koiar loram iposam seria koiar loram iposam seria koiar
                </p>
                <div>
                  <a className="fl-button fl-button__primary" link="">Watch Now</a>
                </div>

              </div>
            </div>
            <div className="fl-hero__col fl-hero__col-right col-lg-6">
              <div className="fl-hero__movie-poster pe-lg-5">
                <img src="/images/home/banner.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='fl-section'>
        <div className="container">
          <div className="fl-title__section mb-4">Episodes</div>
          {movieLoading ? 
            <div className="row fl-movies">
              {
                Array.from(Array(4), (e, i) => {
                  return (
                    <div className="col-md-6 col-lg-4">
                      <div className="fl-movie">
                        <div className="col fl-movie__inwrap" key={i}>
                          <div className="fl-movie__inwrap">
                            <div className="fl-movie__poster"><span className="fl-movie__poster--placeholder"></span></div>
                            <div className="ps-3">
                                <div className="fl-movie__name--placeholder"></div>
                                <div className="fl-movie__episode-count fl-movie__episode-count--placeholder"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          :
            <div className="row fl-movies">
              {
              moviesData && moviesData.map((val, index) => {
                return (
                  <Movie key={index} link={index} title={val.title} />
                )
              })
              }
            </div>
          }

        </div>
      </section>
    </>
  );
}

export default Home;
