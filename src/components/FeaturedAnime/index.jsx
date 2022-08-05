import { useState, useEffect } from 'react';
import api from '../../services/api'

import './styles.css'

import Carousel from 'react-bootstrap/Carousel';


export default function FeaturedAnime() {

    const [topAnimeData, setTopAnimeData] = useState([])

    useEffect(() => {
        const getFeaturedAnime = async () => {
            const response = await api.getTopAnimeList(25)
            .then(resp => setTopAnimeData(resp.data))
        }

        getFeaturedAnime()
    }, [])
    
    console.log(topAnimeData)
    
    // const randomNumber = Math.floor(Math.random() * topAnimeData.length)
    // const randomChosen = topAnimeData[randomNumber]
    
    const genres = []
    
    // randomChosen ? randomChosen.genres.map(genre => genres.push(genre.name)) : []
        



  return (
    <div className="featured-anime-container">
        {
            <Carousel variant="dark" interval="3000" >
                {
                    topAnimeData && 
                                    topAnimeData.map(anime => {
                                        return (
                                            
                                                <Carousel.Item className='carousel-item' key={anime.mal_id}>
                                                <a target="_blank" href={anime.url}>
                                                <img
                                                    src={anime.images.jpg.large_image_url}
                                                    alt="First slide"
                                                />
                                                </a>
                                                <Carousel.Caption className='carousel-caption'>
                                                    
                                                </Carousel.Caption>
                                                <a target="_blank" href={anime.url} style={{color: "black", textDecoration: "none"}}>
                                                    <h3 className='anime-title-h3'>{anime.title}</h3>
                                                </a>
                                                
                                                </Carousel.Item>
                                            
                                        );
                                    })
                }

          </Carousel>
        }

    </div>
    // <div className="featured-anime-container">
    //     {
    //         <Carousel>
    //             { topAnimeData && 
    //                 topAnimeData.map(anime => {
    //                     return(
    //                         <div key={anime.mal_id}>
    //                             <Carousel.Item>
    //                                         <img    src={anime.images.jpg.large_image_url} 
    //                                                 className="d-block w-100"
    //                                             />

    //                                     <Carousel.Caption>
    //                                     <div className="featured-anime-data">

    //                                         <a target="_blank" href={anime.url} style={{color: "black"}}>
    //                                             <h1>{anime.title}</h1>
    //                                         </a>

    //                                         <p className='genres'>{genres.join(', ')}</p>
    //                                         <h3>{anime.score}</h3>
    //                                         <p className='synopsis'>{anime.synopsis}</p>
    //                                     </div>
    //                                     </Carousel.Caption>
    //                             </Carousel.Item>
    //                         </div>
    //                     );
    //                 })
    //             }
    //         </Carousel>
    //     }

    // </div>
  );



//   return (
//     <div className="featured-anime-container">
//         {
//             randomChosen && 
//                             <div className="featured-anime-container-center">

//                                 <a  target="_blank" href={randomChosen.url}>
//                                         <img src={randomChosen.images.jpg.large_image_url} alt="" />
//                                 </a>

//                                 <div className="featured-anime-data">

//                                     <a target="_blank" href={randomChosen.url} style={{color: "black"}}>
//                                         <h1>{randomChosen.title}</h1>
//                                     </a>

//                                     <p className='genres'>{genres.join(', ')}</p>
//                                     <h3>{randomChosen.score}</h3>
//                                     <p className='synopsis'>{randomChosen.synopsis}</p>
                                    
//                                 </div>

//                             </div>
//         }

//     </div>
//   );
}

