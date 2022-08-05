import { useEffect, useState } from 'react';
import api from '../../services/api'

import './styles.css'

export default function TopAnime() {

  const [topData, setTopData] = useState([])

  useEffect(() => {
    const getTopData = async () => {
      const resp = await api.getTopAnimeList(10)
      setTopData(resp.data)
    }

    getTopData()
  }, [])


  return (
    <div className="top-anime-container">
        <h3>Top anime</h3>
        <ul className='top-anime-list'>
            {
              topData.map(anime => {
                return (
                  <a target="_blank" key={anime.mal_id} href={anime.url}>
                    <li>{anime.title}</li>
                  </a>
                );
              })
            }
        </ul>
    </div>
  );
}

