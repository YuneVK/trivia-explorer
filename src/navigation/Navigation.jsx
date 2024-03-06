import { useState } from 'react'

import ChatsCircleIcon from '../icons/ChatsCircle'
import GearIcon from '../icons/Gear'
import ListIcon from '../icons/List'
import PlusIcon from '../icons/Plus'
import SignInIcon from '../icons/SignIn'

import './navigation.css'

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="navigation">
      <button
        className="navigation__toggle"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
      >
        <ListIcon className="navigation__toggle-icon" />
      </button>

      <ul
        className={`navigation__list ${isOpen ? 'is-open' : ''}`}
        aria-hidden={!isOpen}
        role="menu"
      >
        <li>
          <a href="#" className="navigation__link">
            <ChatsCircleIcon className="navigation__icon" aria-hidden="true" />{' '}
            Browse
          </a>
        </li>
        <li>
          <a href="#" className="navigation__link">
            <GearIcon className="navigation__icon" aria-hidden="true" /> Add new
            questions
          </a>
        </li>
        <li>
          <a href="#" className="navigation__link">
            <ListIcon className="navigation__icon" aria-hidden="true" /> API
          </a>
        </li>
        <li>
          <a href="#" className="navigation__link">
            <PlusIcon className="navigation__icon" aria-hidden="true" /> Discuss
          </a>
        </li>
        <li>
          <a href="#" className="navigation__link">
            <SignInIcon className="navigation__icon" aria-hidden="true" /> About
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
