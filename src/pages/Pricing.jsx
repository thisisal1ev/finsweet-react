//images
import pointer from '../assets/img/fetures-pointer.svg'
import pointer_2 from '../assets/img/fetures-pointer-2.svg'

const Pricing = () => {
  return (
    <div className="py-32">
      <div className="w-full max-w-7xl px-5 mx-auto">
        <h1 className="text-center mb-4 font-semibold text-5xl leading-[64px]">Our Pricing Plans</h1>
        <p className="text-center font-medium text-base leading-7 opacity-70 mb-[64px]">When you’re ready to go beyond prototyping in Figma, Webflow is<br /> ready to help you bring your designs to life — without coding them.</p>

        <div className="flex items-center justify-between space-x-8">

          <div className="rounded-xl px-[76px] pb-[62px] pt-16 bg-grey w-[400px] h-[745px]">
            <div className="flex items-center space-x-2 mb-5">
              <h3 className="font-semibold text-[38px] leading-[56px]">$ 299</h3>
              <p className="text-royalBlue text-base leading-7">Per Design</p>
            </div>
            <div className="space-y-2 mb-[78px]">
              <h2 className="font-medium text-2xl leading-9">Landing</h2>
              <p className="opacity-70 text-base leading-7 font-medium">When you’re ready to go beyond prototyping in Figma,</p>
            </div>
            <ul className='space-y-5 mb-20'>
              <li className='space-x-3 flex items-center'>
                <img src={pointer} alt="pointer" />
                <p className='text-base leading-7'>All limited links</p>
              </li>
              <li className='space-x-3 flex items-center'>
                <img src={pointer} alt="pointer" />
                <p className='text-base leading-7'>Own analytics platform</p>
              </li>
              <li className='space-x-3 flex items-center'>
                <img src={pointer} alt="pointer" />
                <p className='text-base leading-7'>Chat support</p>
              </li>
              <li className='space-x-3 flex items-center opacity-70'>
                <img src={pointer_2} alt="pointer" />
                <p className='text-base leading-7'>Optimize hashtags</p>
              </li>
              <li className='space-x-3 flex items-center opacity-70'>
                <img src={pointer_2} alt="pointer" />
                <p className='text-base leading-7'>Unlimited users</p>
              </li>
            </ul>
            <div className='flex items-center justify-center'>
              <button className='inline-block text-white font-semibold text-base leading-8 px-[51px] py-4 rounded-[41px] bg-darkBlue'>Get started</button>
            </div>
          </div>

          <div className="rounded-xl px-[76px] pb-[62px] pt-16 bg-tint-blue text-white w-[400px] h-[745px]">
            <div className="flex items-center space-x-2 mb-5">
              <h3 className="font-semibold text-[38px] leading-[56px]">$ 399</h3>
              <p className="text-yellow text-base leading-7">Multi Design</p>
            </div>
            <div className="space-y-2 mb-12">
              <h2 className="font-medium text-2xl leading-9">Website Page</h2>
              <p className="opacity-70 text-base leading-7 font-medium">When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.</p>
            </div>
            <ul className='space-y-5 mb-20'>
              <li className='space-x-3 flex items-center'>
                <img src={pointer} alt="pointer" />
                <p className='text-base leading-7'>All limited links</p>
              </li>
              <li className='space-x-3 flex items-center'>
                <img src={pointer} alt="pointer" />
                <p className='text-base leading-7'>Own analytics platform</p>
              </li>
              <li className='space-x-3 flex items-center'>
                <img src={pointer} alt="pointer" />
                <p className='text-base leading-7'>Chat support</p>
              </li>
              <li className='space-x-3 flex items-center'>
                <img src={pointer} alt="pointer" />
                <p className='text-base leading-7'>Optimize hashtags</p>
              </li>
              <li className='space-x-3 flex items-center'>
                <img src={pointer} alt="pointer" />
                <p className='text-base leading-7'>Unlimited users</p>
              </li>
            </ul>
            <div className='flex items-center justify-center'>
              <button className='inline-block text-black font-semibold text-base leading-8 px-[51px] py-4 rounded-[41px] bg-yellow'>Get started</button>
            </div>
          </div>

          <div className="rounded-xl px-[76px] pb-[62px] pt-16 bg-grey w-[400px] h-[745px]">
            <div className="flex items-center space-x-2 mb-5">
              <h3 className="font-semibold text-[38px] leading-[56px]">$ 499 +</h3>
              <p className="text-royalBlue text-base leading-7">Per Design</p>
            </div>
            <div className="space-y-2 mb-8">
              <h2 className="font-medium text-2xl leading-9">Complex Project</h2>
              <p className="opacity-70 text-base leading-7 font-medium">When you’re ready to go beyond prototyping in Figma,</p>
            </div>
            <ul className='space-y-5 mb-20'>
              <li className='space-x-3 flex items-center'>
                <img src={pointer} alt="pointer" />
                <p className='text-base leading-7'>All limited links</p>
              </li>
              <li className='space-x-3 flex items-center'>
                <img src={pointer} alt="pointer" />
                <p className='text-base leading-7'>Own analytics platform</p>
              </li>
              <li className='space-x-3 flex items-center'>
                <img src={pointer} alt="pointer" />
                <p className='text-base leading-7'>Chat support</p>
              </li>
              <li className='space-x-3 flex items-center'>
                <img src={pointer} alt="pointer" />
                <p className='text-base leading-7'>Optimize hashtags</p>
              </li>
              <li className='space-x-3 flex items-center'>
                <img src={pointer} alt="pointer" />
                <p className='text-base leading-7'>Unlimited users</p>
              </li>
              <li className='space-x-3 flex items-center'>
                <img src={pointer} alt="pointer" />
                <p className='text-base leading-7'>Assist and Help</p>
              </li>
            </ul>
            <div className='flex items-center justify-center'>
              <button className='inline-block text-white font-semibold text-base leading-8 px-[51px] py-4 rounded-[41px] bg-darkBlue'>Contact us</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Pricing