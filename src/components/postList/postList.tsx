import Card from '../card/Card'
import { usePostContext } from '../../components/PostContext/PostContext'
import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { PostType } from '../types/Types'

interface PostListProps {
  posts: PostType[]
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  // const { query, filteredPosts } = usePostContext()
  const { query } = usePostContext()
  const firstSection = posts.slice(0, 3)
  const secondSection = posts.slice(3, 7)
  const thirdSection = posts.slice(7, 11)
  // const firstSection = filteredPosts.slice(0, 3)
  // const secondSection = filteredPosts.slice(3, 7)
  // const thirdSection = filteredPosts.slice(7, 11)

  return (
    <div className="post-list-wrapper">
      <SearchBar />
      <div className={`post-list ${query ? 'single-column' : ''}`}>
        {query ? (
          posts.map((post, index) => (
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
