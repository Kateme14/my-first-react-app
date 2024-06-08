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

import BurgerMenu from './components/burger/Burger'
import './styles/App.scss'
import { useState } from 'react'
import PostList from './components/postList/postList'
import SignIn from './components/logIn/SignIn'
import SignInConfirmed from './components/logIn/SignInConfirmed'
import { posts } from './data/postData'
import SelectedPost from './components/postList/SelectedPost'
import Pagination from './components/pagination/Pagination'
import Footer from './components/footer/Footer'
import SignUp from './components/logIn/SignUp'
import SearchBar from './components/SearchBar/SearchBar'
import { PostProvider } from './components/PostContext/PostContext'


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleForm = () => {
    setIsSignUp(!isSignUp)
  }


  return (
    <PostProvider>
      <div className="App">
        <header className="App-header">
          <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </header>
        <main>
        <SearchBar />
          {/* {posts.map((post, index) => (
            <Card key={index} {...post} />
          ))} */}
          <PostList />
          {isSignUp ? <SignUp toggleForm={toggleForm} /> : <SignIn toggleForm={toggleForm} />}
          <SignInConfirmed />
          <SelectedPost />
          <Pagination />
          <Footer />
        </main>
      </div>
    </PostProvider>
  )
}

export default App


