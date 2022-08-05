import Header from './components/Header'
import Search from './components/Search'

import { useState, useEffect } from 'react'
import FilteredAnimes from './components/FilteredAnimes'
import FeaturedAnime from './components/FeaturedAnime'
import AnimeTable from './components/AnimeTable'
import TopAnime from './components/TopAnime'

function App() {

  const [searchText, setSearchText] = useState('')
  
  const [searchData, setSearchData] = useState([])
  

  useEffect(() => {
    
    if(searchText) {
      fetch(`https://api.jikan.moe/v4/anime?letter=${searchText}`)
      .then(resp => resp.json())
      .then(resp => setSearchData(resp.data))
    }

  }, [searchText])


  return (
    <>
    <Header />
    <Search value={searchText} onChange={(search) => setSearchText(search)} />
    {
      searchText ?
        (<FilteredAnimes data={searchData}/>) : (
        <>
        <TopAnime />
        <FeaturedAnime />
        <AnimeTable />
        </>
        )
    }
    </>
  );
}

export default App
