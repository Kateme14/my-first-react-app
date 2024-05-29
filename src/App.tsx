// import Typo from "./components/typo"
// import BurgerMenu from "./components/burger"
// import './App.scss'


// const App = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <BurgerMenu />
//       </header>
//        <Typo value="Sign In" level={1} />
//        <Typo value="Sign In" level={2} />
//        <Typo value="Sign In" level={3} />
//        <Typo value="Sign In" level={4} />
//        <Typo value="Sign In" level={5} />
//        <Typo value="Sign In" level={6} />
//     </div>
//   )
// }

// export default App


// Вариант через Props

import BurgerMenu from './components/burger'
import './App.scss'
import { useState } from 'react'
import PostList from './components/postList'
import SignIn from './components/SignIn'
import SignInConfirmed from './components/SignInConfirmed'
import { posts } from './components/postData'
import SelectedPost from './components/SelectedPost'
import Pagination from './components/Pagination'
import Footer from './components/Footer'

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="App">
      <header className="App-header">
        <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </header>
      <main>
        {/* {posts.map((post, index) => (
          <Card key={index} {...post} />
        ))} */}
        <PostList posts={posts} />
        <SignIn />
        <SignInConfirmed />
        <SelectedPost />
        <Pagination />
        <Footer />
      </main>
    </div>
  )
}

export default App


