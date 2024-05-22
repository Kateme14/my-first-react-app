import { useState } from "react"
import '../App.scss'

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
  
    const toggleMenu = () => {
      setIsOpen(!isOpen)
    }
  
    return (
      <div>
        <div className="burger-wrapper">
          <button className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </button>
        </div>
      </div>
    )
  }
  
  export default BurgerMenu


// Варинат через Props
// import React from "react"
// import '../App.scss'

// interface BurgerMenuProps {
//   isOpen: boolean
//   toggleMenu: () => void
// }

// const BurgerMenu = ({ isOpen, toggleMenu }: BurgerMenuProps) => {
//   return (
//     <div className="burger-wrapper">
//       <button className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
//         <div className="bar1"></div>
//         <div className="bar2"></div>
//         <div className="bar3"></div>
//       </button>
//     </div>
//   )
// }

// export default BurgerMenu