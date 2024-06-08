import React, { createContext, useContext, useState, ReactNode } from 'react'
import { CardProps } from '../../components/types/Types'
import { posts as initialPosts } from '../../data/postData'

interface PostContextProps {
  query: string;
  setQuery: (query: string) => void
  filteredPosts: CardProps[]
}

const PostContext = createContext<PostContextProps | undefined>(undefined)

export const usePostContext = () => {
  const context = useContext(PostContext)
  if (!context) {
    throw new Error('usePostContext must be used within a PostProvider')
  }
  return context
}

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState('');
  const filteredPosts = initialPosts.filter(post =>
    post.title.toLowerCase().includes(query.toLowerCase()) ||
    post.text.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <PostContext.Provider value={{ query, setQuery, filteredPosts }}>
      {children}
    </PostContext.Provider>
  )
}
