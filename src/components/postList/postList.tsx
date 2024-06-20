import Card from '../card/Card'
import { usePostContext } from '../../components/PostContext/PostContext'
import React from 'react'
import SearchBar from '../SearchBar/SearchBar'

const PostList = () => {
  const { query, filteredPosts } = usePostContext()
  const firstSection = filteredPosts.slice(0, 3)
  const secondSection = filteredPosts.slice(3, 7)
  const thirdSection = filteredPosts.slice(7, 11)

  return (
    <div className="post-list-wrapper">
      <SearchBar />
      <div className={`post-list ${query ? 'single-column' : ''}`}>
        {query ? (
          filteredPosts.map((post, index) => (
            <div key={index} className="post-item">
              <Card {...post} isFiltered={!!query} />
              {/* <Card {...post} /> */}
            </div>
          ))
        ) : (
          <>
            <div className="post-section">
              <div className="post-cards-first">
                {firstSection.map((post, index) => (
                  <div key={index} className="first-grid-item">
                    {/* <Card {...post} /> */}
                    <Card {...post} isFiltered={!!query} />
                  </div>
                ))}
              </div>
            </div>
            <div className="post-section">
              <div className="post-cards-second">
                {secondSection.map((post, index) => (
                  <div key={index} className="second-grid-item">
                    {/* <Card {...post} /> */}
                    <Card {...post} isFiltered={!!query} />
                  </div>
                ))}
              </div>
            </div>
            <div className="post-section">
              <div className="post-cards-second">
                {thirdSection.map((post, index) => (
                  <div key={index} className="second-grid-item">
                    <Card {...post} isFiltered={!!query} />
                    {/* <Card {...post} /> */}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default PostList
