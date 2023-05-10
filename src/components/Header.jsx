import React, { useEffect, useState } from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'


function Header() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [fixed, setFixed] = useState(false);
  const toggleMenu = () => { setClick(!click) }
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth < 992) {
      setButton(false)
    } else {
      setButton(true)
    }
  }
  useEffect(() => {
    showButton();
  }, [])
  window.addEventListener('resize', showButton)

  window.addEventListener('scroll',function(){
    if(window.scrollY > 200){
      setFixed(true)
    }else{
      setFixed(false)
    }
  })

  return (
    <header className={fixed ? 'fixed-top' : ''}>
      <div className="container">
        <nav>
          <Link to='/' className='logo'>TRVL <span><i className='fab fa-typo3' /></span></Link>
          <button onClick={() => { toggleMenu() }} className='menu-button d-lg-none'>
            <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
          </button>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li><Link to='/' className='nav-links' onClick={() => { closeMobileMenu() }}>Home</Link></li>
            <li><Link to='/services' className='nav-links' onClick={() => { closeMobileMenu() }}>Services</Link></li>
            <li><Link to='/products' className='nav-links' onClick={() => { closeMobileMenu() }}>Products</Link></li>
            <li className='d-lg-none'><Link to='/sign-up' className='nav-links' onClick={() => { closeMobileMenu() }}>Sign up</Link></li>
          </ul>
          {button && <Link to='/sign-up'><Button buttonStyle='btn--outline'>SIGN UP</Button></Link>}
        </nav>
      </div>
    </header>
  )
}

export default Header
