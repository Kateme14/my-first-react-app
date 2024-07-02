import React from 'react'
import Card from '../card/Card'
import SearchBar from '../SearchBar/SearchBar'
import { CardVariant, PostType } from '../types/Types'

interface PostListProps {
    posts: PostType[]
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
    const limitedPosts = posts.slice(0, 11) 

    const firstSection = limitedPosts.slice(0, 3)
    const secondSection = limitedPosts.slice(3, 7)
    const thirdSection = limitedPosts.slice(7, 11)

    console.log('PostList props:', posts)

    return (
        <div className="post-list-wrapper">
            <SearchBar />
            <div className="post-list">
                <div className="post-section">
                    <div className="post-cards-first">
                        {/* {firstSection.map((post, index) => (
                            <div key={index} className={`post-cards-first ${index === 0 ? 'card-large' : 'card-small'}`}>
                                <Card isFiltered={false} {...post} />
                            </div>
                        ))} */}
                        {firstSection.map((post, index) => (
                            <div key={index} className={`first-grid-item ${index === 0 ? 'card-large' : 'card-small'}`}>
                                <Card isFiltered={false} {...post} variant={index === 0 ? CardVariant.Large : CardVariant.Small} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="post-section">
                    <div className="post-cards-second">
                        {secondSection.map((post, index) => (
                            <div key={index} className={`second-grid-item ${index < 2 ? 'card-medium' : 'card-small'}`}>
                                <Card isFiltered={false} {...post} variant={index < 2 ? CardVariant.Medium : CardVariant.Small} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="post-section">
                    <div className="post-cards-third">
                        {thirdSection.map((post, index) => (
                            <div key={index} className={`third-grid-item ${index < 2 ? 'card-medium' : 'card-small'}`}>
                                <Card isFiltered={false} {...post} variant={index < 2 ? CardVariant.Medium : CardVariant.Small} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostList
