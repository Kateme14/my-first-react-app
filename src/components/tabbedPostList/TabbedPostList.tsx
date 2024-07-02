import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import PostList from '../postList/postList'
import '../../styles/TabbedPostList.scss'
import { PostType } from '../types/Types'
import { fetchPosts } from '../../postsActions/PostsActions'
import { useAppDispatch } from '../../data/hooks'

const TabbedPostList: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'bookmarks'>('all')
  const dispatch = useAppDispatch()
  const posts = useSelector((state: RootState) => state.posts.posts)
  const bookmarks = useSelector((state: RootState) => state.bookmarks.bookmarks)

  useEffect(() => {
    dispatch(fetchPosts())
}, [dispatch])

  console.log('Posts from state:', posts)

  const filteredPosts = activeTab === 'all' ? posts : posts.filter(post => bookmarks.includes(post.id))

  return (
      <div className="tabbed-post-list">
          <div className="tabbed-post-list-buttons">
              <button onClick={() => setActiveTab('all')} className={`tabbed-post-list-button ${activeTab === 'all' ? 'tabbed-post-list-active' : 'tabbed-post-list-inactive'}`}>
                  All posts
              </button>
              <button onClick={() => setActiveTab('bookmarks')} className={`tabbed-post-list-button ${activeTab === 'bookmarks' ? 'tabbed-post-list-active' : 'tabbed-post-list-inactive'}`}>
                  Bookmarks
              </button>
          </div>
          {/* <PostList posts={filteredPosts as PostType[]} /> */}
          <PostList posts={filteredPosts} />
      </div>
  )
}

export default TabbedPostList
