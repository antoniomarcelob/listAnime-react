import { useEffect, useState } from "react";
import useDebounce from '../../services/useDebounce'

import './styles.css'

export default function Search({value, onChange}) {

  const [displayedValue, setDisplayedValue] = useState(value) 
    const debouncedChange = useDebounce(onChange, 400)

    function handleChange(e) {
        setDisplayedValue(e.target.value)
        debouncedChange(e.target.value)
    }

  return (
    <div className="search-container">
        <input type="search" 
        placeholder='Busca por anime'
        value={displayedValue}
        onChange={handleChange}
        />
    </div>
  );
}

