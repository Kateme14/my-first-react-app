import React, { createContext, useContext, useState, ReactNode } from 'react'
import { CardProps } from '../../components/types/Types'
import { posts as initialPosts } from '../../data/postData'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { PostType } from '../types/Types'
import { setQuery } from '../../redux/postsReducer'


interface PostContextProps {
  query: string
  setQuery: (query: string) => void
  filteredPosts: PostType[]
}

const PostContext = createContext<PostContextProps | undefined>(undefined)

export const usePostContext = () => {
  const context = useContext(PostContext)
  if (!context) {
    throw new Error('usePostContext must be used within a PostProvider')
  }
  return context
}

// export const PostProvider = ({ children }: { children: ReactNode }) => {
//   const [query, setQuery] = useState('');
//   const filteredPosts = initialPosts.map(post => ({
//     ...post,
//     body: post.text, 
//   })).filter(post =>
//     post.title.toLowerCase().includes(query.toLowerCase()) ||
//     post.text.toLowerCase().includes(query.toLowerCase())
//   )
export const PostProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch()
  const { posts, query } = useSelector((state: RootState) => state.posts)
  
  const updateQuery = (query: string) => {
    dispatch(setQuery(query))
  }

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(query.toLowerCase()) ||
    post.body.toLowerCase().includes(query.toLowerCase())
  )


  return (
    <PostContext.Provider value={{ query, setQuery: updateQuery, filteredPosts }}>
      {children}
    </PostContext.Provider>
  )
}


