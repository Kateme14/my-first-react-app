import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import PostList from '../postList/PostList'
import '../../styles/TabbedPostList.scss'

const TabbedPostList: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'bookmarks'>('all')
  const posts = useSelector((state: RootState) => state.posts)
  const bookmarks = useSelector((state: RootState) => state.bookmarks.bookmarks)

  const filteredPosts = activeTab === 'all' ? posts : posts.filter(post => bookmarks.includes(post.id))

  return (
    <div className="tabbed-post-list">
      <div className="tabbed-post-list-buttons">
        <button onClick={() => setActiveTab('all')} className={`tabbed-post-list-button ${activeTab === 'all' ? 'tabbed-post-list-active' : 'tabbed-post-list-inactive'}`}>All posts</button>
        <button onClick={() => setActiveTab('bookmarks')} className={`tabbed-post-list-button ${activeTab === 'bookmarks' ? 'tabbed-post-list-active' : 'tabbed-post-list-inactive'}`}>Bookmarks</button>
      </div>
      <PostList posts={filteredPosts} />
    </div>
  )
}

export default TabbedPostList


