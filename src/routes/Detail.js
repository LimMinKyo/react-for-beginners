import {useParams} from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import Movie from "../components/Movie";
function Detail(){
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMoive] = useState([]);
  const getMoive = async() => {
    const json = await (await (fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))).json();
    setMoive(json.data.movie);
    setLoading(false);
  }
  useEffect(() => {
    getMoive();
  }, []);
  return (
    <div>
      {loading ? <h2>loading...</h2> : (
        <Movie
          id={movie.id}
          coverImg={movie.medium_cover_image} 
          title={movie.title} 
          summary={movie.description_full} 
          genres={movie.genres}
        />
      )}
    </div>
  )
}

export default Detail;