import { NavLink, Link } from 'react-router-dom'
import Logo from '../assets/img/log.svg'

const Header = () => {
  return (
    <header className='py-5 bg-tint-blue'>
      <div className='max-w-7xl w-full mx-auto px-5 flex items-center justify-between'>
        <Link to='/'>
          <img src={Logo} alt="Logo" />
        </Link>

        <nav className='flex items-center space-x-8'>
          <NavLink to='/' className='text-base text-opacity-70 font-medium leading-7 text-grey'>Home</NavLink>
          <NavLink to='/about' className='text-base text-opacity-70 font-medium leading-7 text-grey'>About us</NavLink>
          <NavLink to='/features' className='text-base text-opacity-70 font-medium leading-7 text-grey'>Features</NavLink>
          <NavLink to='/pricing' className='text-base text-opacity-70 font-medium leading-7 text-grey'>Pricing</NavLink>
          <NavLink to='/faq' className='text-base text-opacity-70 font-medium leading-7 text-grey'>FAQ</NavLink>
          <NavLink to='/blogs' className='text-base text-opacity-70 font-medium leading-7 text-grey'>Blog</NavLink>
          <NavLink to='/contact' className='text-base text-opacity-70 font-medium leading-7 text-white border-2 py-3 px-12 rounded-[41px]'>Contact us</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header