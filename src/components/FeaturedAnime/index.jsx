import { useState, useEffect } from 'react';
import api from '../../services/api'

import './styles.css'

import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner';


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


  return (
    <div className="featured-anime-container">
        {
            <Carousel variant="dark" interval="3000" >
                {
                    topAnimeData ? 
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
                                    }) : []
                }

          </Carousel>
        }

    </div>

  );
}

