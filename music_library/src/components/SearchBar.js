import { useState } from 'react'

function SearchBar(props){
    let [searchTerm, setSearchTerm] = useState('')

    return (
        <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>

            <input ref={term} type="text" placeholder="Enter a search term here" />

            <button onClick={(e) => handleSearch(e, term.current.value)}>Submit</button>

        </form>
    )
}

export default SearchBar
