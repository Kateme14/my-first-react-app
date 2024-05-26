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

import Typo from "./components/typo"
import BurgerMenu from "./components/burger"
import './App.scss'
import { useState } from "react"
import Card from './components/card'
import PostList from "./components/postList"
import { CardVariant } from './components/types'

import image1 from "./assets/image1.jpg"
import image2 from "./assets/image2.webp"
import image3 from "./assets/image3.jpg"

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const posts = [
    {
      date: '2023-03-27',
      title: 'James Webb Telescope Uncovers Potentially Habitable Exoplanet 40 Light-Years Away',
      imgSrc: image1,
      text: 'The James Webb Space Telescope, highly anticipated observatory, has made a groundbreaking discovery: the identification of a potentially habitable exoplanet located approximately 40 light-years away from Earth. This revelation marks a significant leap in quest to find Earth-like planets beyond our solar system. ',
      variant: CardVariant.Large,
    },
    {
      date: '2024-04-28',
      title: 'Astronomers have made a groundbreaking discovery by detecting mysterious radio signals, known as fast radio bursts (FRBs), from a distant galaxy.',
      imgSrc: image2,
      text: '',
      variant: CardVariant.Small,
    },
    {
      date: '2024-04-28',
      title: 'The International Space Station celebrated its 25th anniversary with a special broadcast featuring astronauts from around the world.',
      imgSrc: image3,
      text: '',
      variant: CardVariant.Small,
    },
    {
      date: '2023-03-27',
      title: 'James Webb Telescope Uncovers Potentially Habitable Exoplane',
      imgSrc: image1,
      text: 'The James Webb Space Telescope, highly anticipated observatory, has made a groundbreaking discovery',
      variant: CardVariant.Medium,
    },
    {
      date: '2024-04-28',
      title: 'Astronomers Detect Mysterious Radio Signals from Distant Galaxy',
      imgSrc: image2,
      text: 'Astronomers have detected mysterious radio signals from a distant galaxy, sparking interest in the search for extraterrestrial life.',
      variant: CardVariant.Medium,
    },
    {
      date: '2024-04-28',
      title: 'The International Space Station celebrated its 25th anniversary with a special broadcast featuring astronauts from around the world.',
      imgSrc: image3,
      text: 'The International Space Station celebrated its 25th anniversary with a special broadcast featuring astronauts from around the world.',
      variant: CardVariant.Small,
    },
    {
      date: '2023-03-27',
      title: 'Astronomers have made a groundbreaking discovery by detecting mysterious radio signals, known as fast radio bursts (FRBs), from a distant galaxy.',
      imgSrc: image1,
      text: 'The James Webb Space Telescope, highly anticipated observatory, has made a groundbreaking discovery: the identification of a potentially habitable exoplanet located approximately 40 light-years away from Earth. This revelation marks a significant leap in quest to find Earth-like planets beyond our solar system.',
      variant: CardVariant.Small,
    },
    {
      date: '2023-03-27',
      title: 'James Webb Telescope Uncovers Potentially Habitable Exoplane',
      imgSrc: image1,
      text: 'The James Webb Space Telescope, highly anticipated observatory, has made a groundbreaking discovery',
      variant: CardVariant.Medium,
    },
    {
      date: '2024-04-28',
      title: 'Astronomers Detect Mysterious Radio Signals from Distant Galaxy',
      imgSrc: image2,
      text: 'Astronomers have detected mysterious radio signals from a distant galaxy, sparking interest in the search for extraterrestrial life.',
      variant: CardVariant.Medium,
    },
    {
      date: '2024-04-28',
      title: 'The International Space Station celebrated its 25th anniversary with a special broadcast featuring astronauts from around the world.',
      imgSrc: image3,
      text: 'The International Space Station celebrated its 25th anniversary with a special broadcast featuring astronauts from around the world.',
      variant: CardVariant.Small,
    },
    {
      date: '2023-03-27',
      title: 'Astronomers have made a groundbreaking discovery by detecting mysterious radio signals, known as fast radio bursts (FRBs), from a distant galaxy.',
      imgSrc: image1,
      text: 'The James Webb Space Telescope, highly anticipated observatory, has made a groundbreaking discovery: the identification of a potentially habitable exoplanet located approximately 40 light-years away from Earth. This revelation marks a significant leap in quest to find Earth-like planets beyond our solar system.',
      variant: CardVariant.Small,
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </header>
       <Typo value="Sign In" level={1} />
      <Typo value="Posts" level={1} />
      <main>
        {/* {posts.map((post, index) => (
          <Card key={index} {...post} />
        ))} */}
        <PostList posts={posts} />
      </main>
    </div>
  )
}

export default App


