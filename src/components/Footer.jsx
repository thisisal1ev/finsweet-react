import { Link } from "react-router-dom"

// images
import Logo from '../assets/img/log.svg'
import facebookLogo from '../assets/img/facebook-logo.svg'
import twitterLogo from '../assets/img/twitter-logo.svg'
import linkeninLogo from '../assets/img/linkedin-logo.svg'
import instagramLogo from '../assets/img/instagram-logo.svg'

const Footer = () => {
  return (
    <footer>

      <div className="bg-tint-blue pt-24">
        <div className="flex items-center justify-between max-w-7xl w-full mx-auto px-5">
          <div className="flex flex-col">
            <div className="mb-[86px]">
              <img src={Logo} alt="Logo" className="mb-6" />
              <p className="text-base font-medium leading-7 opacity-80 text-white">We are always open to discuss your project and<br /> improve your online presence.</p>
            </div>
            <div className="bg-yellow py-4 pl-8 pr-[137px] flex items-center space-x-[30px]">
              <ul>
                <li><p className="font-medium text-lg leading-8">Email me at</p></li>
                <li><p className="text-base leading-7 opacity-[80%]">contact@website.com</p></li>
              </ul>
              <ul>
                <li><p className="font-medium text-lg leading-8">Call us</p></li>
                <li><p className="text-base leading-7 opacity-[80%]">0927 6277 28525</p></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col space-y-4 text-white mb-20">
            <h2 className="text-[48px] font-semibold leading-[64px]">Lets Talk!</h2>
            <p className="text-base leading-7 opacity-[80%]">We are always open to discuss your project,<br /> improve your online presence and help with your<br /> UX/UI design challenges.</p>
            <div className="flex items-center space-x-5">
              <a href="#">
                <img className="w-4 h-4" width={16} height={16} src={facebookLogo} alt="logo " />
              </a>
              <a href="#">
                <img className="w-4 h-4" width={16} height={16} src={twitterLogo} alt="logo " />
              </a>
              <a href="#">
                <img className="w-4 h-4" width={16} height={16} src={instagramLogo} alt="logo " />
              </a>
              <a href="#">
                <img className="w-4 h-4" width={16} height={16} src={linkeninLogo} alt="logo " />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8">
        <div className="flex items-center justify-between max-w-7xl w-full mx-auto px-5">
          <p className="font-medium text-base leading-7">Copyright 2022, Finsweet.com</p>

          <nav className="flex items-center space-x-4">
            <Link to='/' className="font-medium text-base leading-7">Home</Link>
            <Link to='/about' className="font-medium text-base leading-7">About us</Link>
            <Link to='/features' className="font-medium text-base leading-7">Features</Link>
            <Link to='/pricing' className="font-medium text-base leading-7">Pricing</Link>
            <Link to='/faq' className="font-medium text-base leading-7">FAQ</Link>
            <Link to='/blogs' className="font-medium text-base leading-7">Blog</Link>
          </nav>
        </div>
      </div>

    </footer>
  )
}

export default Footer