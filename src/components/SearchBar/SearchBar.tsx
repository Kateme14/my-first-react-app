import React from 'react'
import { usePostContext } from '../../components/PostContext/PostContext'

const SearchBar = () => {
  const { query, setQuery } = usePostContext()

  return (
    <div className="search-bar-wrapper">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search posts..."
        className="search-bar"
      />
    </div>
  )
}

export default SearchBar

