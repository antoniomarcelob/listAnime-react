import './styles.css'
import Spinner from 'react-bootstrap/Spinner';


export default function FilteredAnimes(props) {
     const filteredData = props.data

    console.log(filteredData)
    return (
    <>
      {
        filteredData.length > 0 ? (

          <div className="filtered-animes">
          <ul>
                  {
                    filteredData.map(item => {
                      return (
                        
                        <li key={item.mal_id}>
                          <a target="_blank" href={item.url}>
                            <img src={item.images.jpg.large_image_url} alt="" />
                          </a>
                          <h3>{item.title}</h3>
                          
                          </li>
                        
                        
                          );
                        })
                    }
            </ul>
            </div>
        ) : <div className="spinner"> <Spinner animation="border" /> </div>
      }
    </>
);
}

