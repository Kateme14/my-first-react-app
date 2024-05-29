import Card from './card'
import { CardProps, CardVariant } from './types'


type PostListProps = {
  posts: CardProps[]
}

const PostList = ({ posts }: PostListProps) => {
  const firstSection = posts.slice(0, 3)
  const secondSection = posts.slice(3, 7)
  const thirdSection = posts.slice(7, 11)

  return (
    <div className="post-list">
      <div className="post-section">
        <div className="post-cards-first">
          {firstSection.map((post, index) => (
            <div key={index} className="first-grid-item">
            <Card {...post} />
          </div>
          ))}
        </div>
      </div>
      <div className="post-section">
        <div className="post-cards-second">
          {secondSection.map((post, index) => (
           <div key={index} className="second-grid-item">
           <Card {...post} />
         </div>
          ))}
        </div>
      </div>
      <div className="post-section">
        <div className="post-cards-second">
          {thirdSection.map((post, index) => (
            <div key={index} className="second-grid-item">
            <Card {...post} />
         </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostList
