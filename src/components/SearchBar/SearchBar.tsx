import React from 'react'
import { usePostContext } from '../../components/PostContext/PostContext'

const SearchBar = () => {
  const { query, setQuery } = usePostContext()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  return (
    <div className="search-bar-wrapper">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search posts..."
        className="search-bar"
      />
    </div>
  )
}

export default SearchBar

