import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { flims } from "../redux/FlimsList/flimsSlice";
import { Link } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(flims())
  }, [])

  const moviesData = useSelector(state => state.allFlims && state.allFlims.flimsList && state.allFlims.flimsList.results)
  const movieLoading = useSelector(state => state.allFlims && state.allFlims && state.allFlims.loading )


  console.log(moviesData   , "flims")

  return (
    <section className='fl-section'>
      <div className="container">
        {movieLoading ? 
        <div className="row fl-movies">
          {
          Array.from(Array(4), (e, i) => {
            return (
              <div className="fl-movie">
                <div className="col fl-movie__inwrap" key={i}>
                  <div className="fl-movie__inwrap">
                    <div className="fl-movie__poster"><span className="fl-movie__poster--placeholder"></span></div>
                    <div className="fl-movie__name"><div className="fl-movie__name--placeholder"></div></div>
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
              <Link className="fl-movie" to={`/movie/${index+1}`}>
                <div className="col fl-movie__inwrap" key={index}>
                  <div className="fl-movie__inwrap">
                    <div className="fl-movie__poster"><img src="./images/home/star-wars-poster.jpg" /></div>
                    <div className="fl-movie__name">{val.title}</div>
                  </div>
                </div>
              </Link>
            )
           })
          }
        </div>
        }

      </div>
    </section>
  );
}

export default Home;
