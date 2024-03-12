import { Link } from "react-router-dom"

//data
import { benefits } from "../data"

// images
import heroImg from '../assets/img/Feature-Hero.svg'
import users from '../assets/img/finsweetUsers.svg'
import logoN1 from '../assets/img/logo-ipsum.svg'
import logoN2 from '../assets/img/logo-ipsum-2.svg'
import logoN3 from '../assets/img/logo-ipsum-3.svg'
import logoN4 from '../assets/img/logo-ipsum-4.svg'
import logoN5 from '../assets/img/logo-ipsum-5.svg'
import agencies from '../assets/img/man-explaining-problems-to-faceless-psychologist-7176030.png'
import freelancer from '../assets/img/getFree.png'
import working24 from '../assets/img/working24.png'
import personUsingMackbook from '../assets/img/personUsingMackbookPro.png'

const Features = () => {
  return (
    <>
      <div className="py-32 bg-tint-blue text-white">
        <div className="w-full max-w-7xl mx-auto px-5 relative">
          <div className="space-y-8">
            <h1 className="text-[54px] font-semibold leading-[74px]">All the features<br /> you need</h1>
            <p className="opacity-70 font-medium text-base leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Link to='/pricing' className="inline-block text-black px-12 py-4 bg-yellow rounded-[41px] text-lg font-semibold leading-8">View pricing</Link>
          </div>
          <img className="absolute top-[-35px] right-0" src={heroImg} alt="img" />
        </div>
      </div>

      <div className="py-24">
        <div className='w-full max-w-7xl px-5 mx-auto flex items-center justify-between'>
          <img src={users} alt="svg" />
          <img src={logoN1} alt="svg" />
          <img src={logoN2} alt="svg" />
          <img src={logoN3} alt="svg" />
          <img src={logoN4} alt="svg" />
          <img src={logoN5} alt="svg" />
        </div>
      </div>

      <div className="py-32">
        <div className="w-full max-w-7xl mx-auto px-5">
          <h2 className="text-5xl font-semibold leading-[64px] text-center mb-12">The benefits of working<br /> with our team</h2>
          <ul className='flex items-center space-x-8 mb-12'>
            {
              benefits.map((benefit) => {
                return (
                  <li className='pl-12 pr-8 py-12 bg-grey space-y-5' key={benefit.id}>
                    <img src={benefit.img} alt={benefit.title} />
                    <h3 className="text-2xl leading-9 font-medium">{benefit.title}</h3>
                    <p className="opacity-70 text-base leading-7">{benefit.text}</p>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>

      <div className="py-32">
        <div className="w-full max-w-7xl mx-auto px-5 flex items-center justify-between">
          <div className="space-y-4 mr-20">
            <p className="text-lg font-medium leading-8">Use Client-first</p>
            <h2 className="font-semibold text-[38px] leading-[56px]">Top agencies and freelancers around the world use<br />
              Client-first </h2>
            <p className="text-base leading-7 opacity-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          </div>
          <img src={agencies} alt="photo" />
        </div>
      </div>

      <div className="py-32 bg-grey">
        <div className="w-full max-w-7xl mx-auto px-5 flex items-center justify-between">
          <img src={freelancer} alt="photo" className="mr-20" />
          <div className="space-y-4">
            <p className="text-lg font-medium leading-8">Free Revision Rounds</p>
            <h3 className="font-semibold text-[38px] leading-[56px]">Get free Revisions and one week of free maintenance</h3>
            <p className="text-base leading-7 opacity-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
        </div>
      </div>

      <div className="py-32">
        <div className="w-full max-w-7xl mx-auto px-5 flex items-center justify-between">
          <div className="space-y-4 mr-20">
            <p className="font-medium text-lg leading-8">24/7 Support</p>
            <h2 className="font-semibold text-[38px] leading-[56px]">Working with us, you will be getting 24/7 priority support</h2>
            <p className="text-base leading-7 opacity-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
          <img src={working24} alt="photo" />
        </div>
      </div>


      <div className="py-32">
        <div className="w-full max-w-7xl mx-auto px-5 flex items-center justify-between">
          <img src={personUsingMackbook} className="mr-20" alt="photo" />
          <div className="space-y-4">
            <p className="font-medium text-lg leading-8">Quick Delivery</p>
            <h2 className="font-semibold text-[38px] leading-[56px]">Guranteed 1 week delivery for standard five pager website</h2>
            <p className="text-base leading-7 opacity-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features