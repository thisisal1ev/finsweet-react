import React from "react";
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//material ui
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

// data
import { works, features } from "../data"

// images
import whiteArrow from '../assets/img/white-arrow.svg'
import arrow from '../assets/img/Arrow.svg'
import blackArrow from '../assets/img/black-arrow.svg'
import yellowArrow from '../assets/img/yellowArrow.svg'
import heroImg from '../assets/img/Illustration.png'
import blogImg1 from '../assets/img/arabic-businessman-standing-on-street-and-using-laptop-9623794.png'
import blogImg2 from '../assets/img/woman-in-white-sleeveless-shirt-using-macbook-air-on-brown-wooden-table-3766189.png'
import blogImg3 from '../assets/img/apple-monitors-326518.png'
import projectN1 from '../assets/img/workhub.png'
import projectN2 from '../assets/img/Unisaas.png'
import projectN3 from '../assets/img/church.png'
import jennyWilson from '../assets/img/jennyWilson.svg'
import faqImg from '../assets/img/woman-writing-on-paper-3228878.png'

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const Home = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="py-32 bg-tint-blue text-white">
        <div className="w-full max-w-7xl mx-auto px-5 relative">
          <h1 className="font-semibold text-[54px] leading-[74px] mb-6">Building stellar<br /> websites for early<br /> startups</h1>
          <p className="text-base leading-7 opacity-70 mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt.</p>
          <div className="space-x-10">
            <Link to='/work' className="inline-block text-black px-[56px] py-4 bg-yellow rounded-[41px] text-lg font-semibold leading-8">View our work</Link>
            <Link to='/pricing' className="inline-flex space-x-4">
              <p>View Pricing</p>
              <img src={whiteArrow} alt="arrow" />
            </Link>
          </div>
          <img className="absolute top-[20px] right-[40px]" src={heroImg} alt="hero-img" />
        </div>
      </div>

      <div className="py-32 bg-grey">
        <div className="w-full max-w-7xl mx-auto px-5 flex justify-between">
          <div className="space-y-4">
            <h2 className="font-semibold text-[48px] leading-[64px]">How we work</h2>
            <p className="text-base leading-7 opacity-70">Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod tempor.</p>
            <Link to='/work' className="inline-flex space-x-4">
              <p className="text-royalBlue text-base leading-8 font-medium">Get in touch with us</p>
              <img src={arrow} alt="arrow-img" />
            </Link>
          </div>

          <ul className="grid grid-cols-2 gap-y-12">
            {
              works.map((work) => {
                return (
                  <li className="flex flex-col w-[328px]" key={work.id}>
                    <img className="w-[50] h-[50] mb-4" width={50} height={50} src={work.img} alt={work.title} />
                    <h3 className="mb-2 text-[32px] leading-[48px] font-medium">{work.title}</h3>
                    <p className="opacity-70 text-base leading-7">{work.text}</p>
                  </li>
                )
              })
            }
          </ul>

        </div>
      </div>

      <div className="py-32 text-white">
        <div className="w-full max-w-7xl mx-auto px-5">
          <div className="flex items-start justify-between">
            <h2 className="font-medium leading-[64px] text-5xl text-black mb-[64px]">View our projects</h2>
            <Link to='/work' className="inline-flex items-center space-x-4 pt-5">
              <p className="text-black font-medium text-base leading-7">View More</p>
              <img src={blackArrow} alt="blackArrow" />
            </Link>
          </div>

          <div className="flex items-center justify-between space-x-8">
            <div className="relative z-10">
              <div className="absolute bg-[#1C1E53] w-[396px] h-[575px]">
                <div className="w-[313px] absolute bottom-[76px] right-12">
                  <h3 className="font-semibold text-2xl leading-9 mb-4">
                    Workhub office Webflow Webflow Design
                  </h3>
                  <p className="font-medium text-base leading-7 mb-10 opacity-80">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                  <Link to='/work' className="inline-flex items-center space-x-4">
                    <p className="text-yellow font-medium text-base leading-7">View project</p>
                    <img src={yellowArrow} alt="arrow" />
                  </Link>
                </div>
              </div>
              <img src={projectN1} alt="projectN1" />
            </div>
            <div className="flex flex-col space-y-8">
              <div className="relative z-10">
                <div className="absolute bg-[#1C1E53] w-[398px] h-[273px]">
                  <div className="absolute space-y-3 bottom-[40px] left-14">
                    <h3 className="font-semibold text-2xl leading-9">Unisaas Website<br /> Design</h3>
                    <Link to='/work' className="inline-flex items-center space-x-4">
                      <p className="text-yellow font-medium text-base leading-7">View project</p>
                      <img src={yellowArrow} alt="arrow" />
                    </Link>
                  </div>
                </div>
                <img src={projectN2} alt="projectN2" />
              </div>
              <img src={projectN3} alt="projectN3" />
            </div>
          </div>
        </div>
      </div>

      <div className="py-32 bg-grey">
        <div className="w-full max-w-7xl mx-auto px-5">
          <p className="font-medium text-base leading-7 text-center mb-5">Features</p>
          <h2 className="text-5xl font-semibold leading-[64px] text-center mb-10">Design that solves<br /> problems, one product at<br /> a time</h2>
          <ul className="grid grid-cols-3 gap-5">
            {
              features.map((feature) => {
                return (
                  <li className="p-5 bg-white space-y-5" key={feature.id}>
                    <img src={feature.img} alt={feature.title} />
                    <h3 className="text-2xl leading-9 font-medium">{feature.title}</h3>
                    <p className="opacity-70 text-base leading-7">{feature.text}</p>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>

      <div className="py-32 bg-grey">
        <div className="w-full max-w-7xl mx-auto px-5 flex items-start justify-between">
          <div className="space-y-4">
            <h2 className="font-semibold text-[38px] leading-[56px]">What our clients<br /> say about us</h2>
            <p className="opacity-70 text-base leading-7">Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit sed.</p>
          </div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper w-[845px]"
          >
            <SwiperSlide>
              <h3 className="font-medium text-[32px] leading-[48px] mb-12">
                <q>The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus.</q>
              </h3>
              <div className="flex space-x-4">
                <img src={jennyWilson} alt="Jenny Wilson" />
                <div>
                  <p className="font-medium text-lg leading-8">Jenny Wilson</p>
                  <p className="font-medium leading-8 text-xs">Vice President</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <h3 className="font-medium text-[32px] leading-[48px] mb-12">
                <q>The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus.</q>
              </h3>
              <div className="flex space-x-4">
                <img src={jennyWilson} alt="Jenny Wilson" />
                <div>
                  <p className="font-medium text-lg leading-8">Jenny Wilson</p>
                  <p className="font-medium leading-8 text-xs">Vice President</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <h3 className="font-medium text-[32px] leading-[48px] mb-12">
                <q>The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus.</q>
              </h3>
              <div className="flex space-x-4">
                <img src={jennyWilson} alt="Jenny Wilson" />
                <div>
                  <p className="font-medium text-lg leading-8">Jenny Wilson</p>
                  <p className="font-medium leading-8 text-xs">Vice President</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <h3 className="font-medium text-[32px] leading-[48px] mb-12">
                <q>The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus.</q>
              </h3>
              <div className="flex space-x-4">
                <img src={jennyWilson} alt="Jenny Wilson" />
                <div>
                  <p className="font-medium text-lg leading-8">Jenny Wilson</p>
                  <p className="font-medium leading-8 text-xs">Vice President</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div >

      <div className="py-32 bg-grey">
        <div className="w-full max-w-7xl mx-auto px-5 flex items-start justify-between">
          <div className="space-y-4">
            <h2 className="font-semibold text-4xl leading-[56px]">Frequently asked questions</h2>
            <Link to='/contact' className="inline-block text-royalBlue font-medium text-base leading-8">Contact us for more info</Link>
          </div>
          <div className="flex flex-col">
            <Accordion  open={open === 1} icon={<Icon id={1} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(1)}>What is Material Tailwind?</AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at. We&apos;re constantly
                growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(2)}>
                How to use Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at. We&apos;re constantly
                growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
              <AccordionHeader onClick={() => handleOpen(3)}>
                What can I do with Material Tailwind?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at. We&apos;re constantly
                growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>
          </div>
        </div>
      </div>

      <div className="py-32 bg-grey text-white">
        <div className="w-full max-w-7xl mx-auto px-5 flex items-center justify-between relative">
          <div className="absolute top-0">
            <div className="w-[464px] absolute top-16 left-24">
              <h2 className="font-semibold text-[54px] leading-[74px]">Building stellar websites for early startups</h2>
              <p className="font-medium text-base lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
            </div>
          </div>
          <img className="h-full" src={faqImg} alt="Photo" />
          <form className="w-full flex flex-col px-24 pt-[74px] pb-12 bg-[#1C1E53]" onSubmit={(e) => e.preventDefault()}>
            <h3 className="mb-4 font-medium text-[32px] leading-[48px] ">Send inquiry</h3>
            <p className="mb-10 text-base font-medium leading-7 text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            <div className="space-y-4 flex flex-col mb-10">
              <input className="bg-transparent border opacity-70 rounded-lg border-grey py-[18px] pl-8" placeholder="Your Name" type="text" required />
              <input className="bg-transparent border opacity-70 rounded-lg border-grey py-[18px] pl-8" placeholder="Email" type="email" required />
              <input className="bg-transparent border opacity-70 rounded-lg border-grey py-[18px] pl-8" placeholder="Paste your Figma design URL" type="url" required />
            </div>
            <button className="mb-7 bg-yellow px-[51px] py-4 font-semibold text-lg leading-8 text-black rounded-[41px]">Send an Inquiry</button>
            <Link to='/contact' className="flex items-center space-x-4 mx-auto">
              <p className="font-medium text-lg leading-8">Get in touch with us</p>
              <img src={whiteArrow} alt="arrow" />
            </Link>
          </form>
        </div>
      </div>

      <div className="py-32">
        <div className="w-full max-w-7xl mx-auto px-5">
          <h2 className="font-semibold text-5xl leading-[64px] mb-5">Our blog</h2>

          <Swiper
            slidesPerView={3}
            spaceBetween={32}
            centeredSlides={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img className="max-w-full h-[285px] mb-10" height={285} src={blogImg1} alt="Img" />
              <div className="space-y-4 mb-8">
                <span className="inline-block text-base font-medium leading-7 opacity-70">19 Jan 2022</span>
                <h3 className="font-medium text-2xl leading-9">How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                <p className="leading-7 opacity-70 text-base">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
              </div>
              <Link to='/blogs' className="space-x-3 flex items-center">
                <p className="font-medium text-base leading-7">Read More</p>
                <img src={blackArrow} alt="black-arrow" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <img className="max-w-full h-[285px] mb-10" height={285} src={blogImg2} alt="Img" />
              <div className="space-y-4 mb-8">
                <span className="inline-block text-base font-medium leading-7 opacity-70">19 Jan 2022</span>
                <h3 className="font-medium text-2xl leading-9">How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                <p className="leading-7 opacity-70 text-base">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
              </div>
              <Link to='/blogs' className="space-x-3 flex items-center">
                <p className="font-medium text-base leading-7">Read More</p>
                <img src={blackArrow} alt="black-arrow" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <img className="max-w-full h-[285px] mb-10" height={285} src={blogImg3} alt="Img" />
              <div className="space-y-4 mb-8">
                <span className="inline-block text-base font-medium leading-7 opacity-70">19 Jan 2022</span>
                <h3 className="font-medium text-2xl leading-9">How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                <p className="leading-7 opacity-70 text-base">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
              </div>
              <Link to='/blogs' className="space-x-3 flex items-center">
                <p className="font-medium text-base leading-7">Read More</p>
                <img src={blackArrow} alt="black-arrow" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <img className="max-w-full h-[285px] mb-10" height={285} src={blogImg1} alt="Img" />
              <div className="space-y-4 mb-8">
                <span className="inline-block text-base font-medium leading-7 opacity-70">19 Jan 2022</span>
                <h3 className="font-medium text-2xl leading-9">How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                <p className="leading-7 opacity-70 text-base">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
              </div>
              <Link to='/blogs' className="space-x-3 flex items-center">
                <p className="font-medium text-base leading-7">Read More</p>
                <img src={blackArrow} alt="black-arrow" />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Home