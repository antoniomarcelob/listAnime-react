import { useEffect, useState } from 'react';
import api from '../../services/api'

import Table from 'react-bootstrap/Table';
import './styles.css'


export default function AnimeTable() {

    const [allDataTable, setAllDataTable] = useState(null)
    const [reload, setReload] = useState(false)
    const [orderedByName, setOrderedByName] = useState(false)
    const [orderedByScore, setOrderedByScore] = useState(false)
    const [orderedByYear, setOrderedByYear] = useState(false)

    useEffect(() => {
        const getAllDataTable = async () => {
        try {
            const response = await api.getAllAnimeData()
            setAllDataTable(response[0].data)
        }catch(err) {
            alert("Erro: ", err)
        }
    }

    getAllDataTable()
    }, [])

    function OrderByName() {
        if(orderedByName) {
            setOrderedByName(false)
            allDataTable.sort(function (prev, next) {
                return prev.title > next.title ? -1 : prev.title < next.title ? 1 : 0
            })
    
        }else{
            setOrderedByName(true)
            allDataTable.sort(function (prev, next) {
                return prev.title < next.title ? -1 : prev.title > next.title ? 1 : 0
    
            })
        }
        
    setReload(!reload)
    }

    
    function OrderByScore() {
        if(orderedByScore) {
            setOrderedByScore(false)
            allDataTable.sort(function (prev, next) {
                return prev.score > next.score ? -1 : prev.score < next.score ? 1 : 0
            })
    
        }else{
            setOrderedByScore(true)
            allDataTable.sort(function (prev, next) {
                return prev.score < next.score ? -1 : prev.score > next.score ? 1 : 0
    
            })
        }
        
    setReload(!reload)
    }

    
    function OrderByYear() {
        if(orderedByYear) {
            setOrderedByYear(false)
            allDataTable.sort(function (prev, next) {
                return prev.year > next.year ? -1 : prev.year < next.year ? 1 : 0
            })
    
        }else{
            setOrderedByYear(true)
            allDataTable.sort(function (prev, next) {
                return prev.year < next.year ? -1 : prev.year > next.year ? 1 : 0
    
            })
        }
        
    setReload(!reload)
    }

    

  return (
    <>
    {
        allDataTable &&                 
                            <div className="table">
                                                
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th><button onClick={OrderByName}> Name </button></th>
                                            <th><button onClick={OrderByScore}> Score </button></th>
                                            <th><button onClick={OrderByYear}> Year </button></th>
                                            <th><button>url</button></th>
                                        </tr>
                                    </thead> 
                                    <tbody>
                                        {
                                            allDataTable.map(anime => {
                                                return (
                                                    <tr key={anime.mal_id}>
                                                        <td>{anime.title}</td>
                                                        <td>{anime.score}</td>
                                                        <td>{anime.year}</td>
                                                        <td><a target="_blank" href={anime.url}>{anime.url}</a></td>
                                                    </tr>
                                                );
                                            })
                                        }
                                    </tbody>
                                </Table>

                            </div>                    
    }
    </>
  );
}

