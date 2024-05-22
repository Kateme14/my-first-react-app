import Typo from "./components/typo"
import BurgerMenu from "./components/burger"
import './App.scss'


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <BurgerMenu />
      </header>
       <Typo value="Sign In" level={1} />
       <Typo value="Sign In" level={2} />
       <Typo value="Sign In" level={3} />
       <Typo value="Sign In" level={4} />
       <Typo value="Sign In" level={5} />
       <Typo value="Sign In" level={6} />
    </div>
  )
}

export default App


//Вариант через Props

// import Typo from "./components/typo"
// import BurgerMenu from "./components/burger"
// import './App.scss'
// import { useState } from "react"

// const App = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//         <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
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


