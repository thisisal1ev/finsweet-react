import { Link } from 'react-router-dom'

//data
import { blogs } from '../data'

//images
import arrow from '../assets/img/black-arrow.svg'
import heroImg from '../assets/img/peopleWorkin.png'

const Blog = () => {
  return (
    <>
      <div className="py-32">
        <div className="w-full max-w-7xl mx-auto px-5">
          <h1 className="text-center font-semibold text-5xl leading-[64px] mb-4">A UX Case Study on Creating a<br /> Studious Environment for Students</h1>
          <p className="text-base leading-7 font-medium text-center mb-8"><span className="text-darkBlue">Andrew Jonson </span>Posted on 27th January 2021</p>
          <img src={heroImg} alt="photo" className='mb-12' />
          <div className='text-center'>
            <p className='mb-4 text-base leading-7 opacity-70'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the<br /> stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the<br /> spectator on a hillside.</p>
            <Link to={`blogs`} className='text-royalBlue text-base leading-7 opacity-70'>Read more</Link>
          </div>
        </div>
      </div>

      <div className="py-32">
        <div className="w-full max-w-7xl mx-auto px-5">
          <h2 className='text-center font-semibold text-5xl leading-[64px] mb-12'>Our Blog</h2>
          <ul className='grid grid-cols-3 gap-x-8 gap-y-16'>
            {
              blogs.map((blog) => {
                return (
                  <li key={blog.id}>
                    <img className='mb-8' src={blog.img} alt={blog.title} />
                    <div className='space-y-4 mb-6'>
                      <p className='font-medium text-base leading-7 opacity-70'>{blog.date}</p>
                      <h3 className='font-medium text-2xl leading-9'>{blog.title}</h3>
                      <p className='font-medium text-base leading-7 opacity-70'>{blog.text}</p>
                    </div>
                    <Link to={`blog/${blog.title}`} className='inline-flex items-center space-x-4'>
                      <p className='text-tint-blue text-base leading-7'>Read more</p>
                      <img src={arrow} alt="arrow" />
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default Blog