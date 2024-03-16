//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// data
import { process, benefits } from '../data'

// images
import heroImg from '../assets/img/group-of-people-sitting-indoors-3184360.png'
import manInBlueJacked from '../assets/img/man-in-blue-jacket-looking-at-white-board-7413916.png'
import inspire from '../assets/img/a-man-standing-in-an-office-7792811.png'
import focus from '../assets/img/photo-of-women-at-the-meeting-3810789.png'
import users from '../assets/img/finsweetUsers.svg'
import logoN1 from '../assets/img/logo-ipsum.svg'
import logoN2 from '../assets/img/logo-ipsum-2.svg'
import logoN3 from '../assets/img/logo-ipsum-3.svg'
import logoN4 from '../assets/img/logo-ipsum-4.svg'
import logoN5 from '../assets/img/logo-ipsum-5.svg'
import johnSmith from '../assets/img/johnSmith.svg'
import simonAdams from '../assets/img/simonAdams.svg'
import paulJones from '../assets/img/paulJones.svg'
import saraHardin from '../assets/img/saraHardin.svg'

const About = () => {
  return (
    <>
      <div className="py-32">
        <div className="w-full max-w-7xl mx-auto px-5 flex items-center justify-between">
          <div className='text-black mr-[138px]'>
            <p className='font-medium text-lg leading-8 mb-2'>About us</p>
            <h1 className='font-semibold text-[54px] leading-[74px] mb-8'>Our designs solve problems</h1>
            <p className='text-base opacity-70 leading-7 pr-[100px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
          <img src={heroImg} alt="photo" />
        </div>
      </div>

      <div className='py-32'>
        <div className='w-full max-w-7xl mx-auto bg-grey'>
          <div className='flex items-center py-20 pl-[79px] pr-[109px] text-black space-x-16'>
            <div>
              <p className='mb-1 text-base font-medium leading-7'>Who we are</p>
              <h3 className='mb-4 font-semibold text-[38px] leading-[56px]'>Goal focussed</h3>
              <p className='text-base leading-7 opacity-70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div>
              <h3 className='mb-4 font-semibold text-[38px] leading-[56px] pt-6'>Continuous improvement</h3>
              <p className='text-base leading-7 opacity-70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
          <img className='w-full' src={manInBlueJacked} alt="manInBlueJacked" />
        </div>
      </div>

      <div className='py-32 text-black'>
        <div className='w-full max-w-7xl mx-auto px-5'>
          <h2 className='font-semibold text-5xl leading-[64px] text-center mb-12'>The process we follow</h2>
          <ul className='flex items-center justify-between space-x-8'>
            {
              process.map((process) => {
                return (
                  <li key={process.id}>
                    <img className='mb-8' src={process.img} alt={process.title} />
                    <h3 className='mb-2 font-medium text-2xl leading-9'>{process.title}</h3>
                    <p className='text-base leading-7 opacity-70 pr-6'>{process.text}</p>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>

      <div className='py-32 bg-accent text-black'>
        <div className='w-full max-w-7xl mx-auto px-5'>
          <div className='flex items-center justify-between mb-24'>
            <div className='py-[54px] mr-[140px] space-y-4'>
              <p className='font-medium text-base leading-7'>Our Mission </p>
              <h3 className='font-semibold text-[38px] leading-[56px]'>Inspire, Innovate, Share</h3>
              <p className='text-base leading-7 opacity-70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <img src={inspire} alt="photo" />
          </div>
          <div className='flex items-center justify-between'>
            <img className='mr-[140px]' src={focus} alt="photo" />
            <div className='py-[54px] space-y-4'>
              <p className='font-medium text-base leading-7'>Our Vision</p>
              <h3 className='font-semibold text-[38px] leading-[56px]'>Laser focus</h3>
              <p className='text-base leading-7 opacity-70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='py-32 text-black'>
        <div className='w-full max-w-7xl mx-auto px-5'>
          <h2 className='text-center font-semibold text-5xl leading-[64px] mb-12'>The benefits of working<br /> with us</h2>
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
          <div className='flex items-center justify-between'>
            <img src={users} alt="svg" />
            <img src={logoN1} alt="svg" />
            <img src={logoN2} alt="svg" />
            <img src={logoN3} alt="svg" />
            <img src={logoN4} alt="svg" />
            <img src={logoN5} alt="svg" />
          </div>
        </div>
      </div>

      <div className='py-32 bg-grey text-black'>
        <div className='w-full max-w-7xl mx-auto px-5'>
          <h2 className='font-semibold text-5xl leading-[64px] text-center mb-12'>Meet our team</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={32}
            centeredSlides={false}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide className='py-16 pt-12 pb-8 bg-white'>
              <img className='mx-auto mb-8' src={johnSmith} alt="Jenny Wilson" />
              <p className="font-medium text-2xl leading-9 text-center">John Smith</p>
              <p className="font-normal text-center opacity-70 leading-7 text-base">CEO</p>
            </SwiperSlide>
            <SwiperSlide className='py-16 pt-12 pb-8 bg-white'>
              <img className='mx-auto mb-8' src={simonAdams} alt="Jenny Wilson" />
              <p className="font-medium text-2xl leading-9 text-center">Simon Adams</p>
              <p className="font-normal text-center opacity-70 leading-7 text-base">CTO</p>
            </SwiperSlide>
            <SwiperSlide className='py-16 pt-12 pb-8 bg-white'>
              <img className='mx-auto mb-8' src={paulJones} alt="Jenny Wilson" />
              <p className="font-medium text-2xl leading-9 text-center">Paul Jones</p>
              <p className="font-normal text-center opacity-70 leading-7 text-base">Design Lead</p>
            </SwiperSlide>
            <SwiperSlide className='py-16 pt-12 pb-8 bg-white'>
              <img className='mx-auto mb-8' src={saraHardin} alt="Jenny Wilson" />
              <p className="font-medium text-2xl leading-9 text-center">Sara Hardin</p>
              <p className="font-normal text-center opacity-70 leading-7 text-base">Project Manager</p>
            </SwiperSlide>
            <SwiperSlide className='py-16 pt-12 pb-8 bg-white'>
              <img className='mx-auto mb-8' src={johnSmith} alt="Jenny Wilson" />
              <p className="font-medium text-2xl leading-9 text-center">John Smith</p>
              <p className="font-normal text-center opacity-70 leading-7 text-base">CEO</p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default About