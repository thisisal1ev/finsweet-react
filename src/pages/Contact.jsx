
const Contact = () => {
  return (
    <div className="py-32">
      <div className="w-full max-w-7xl mx-auto px-5">
        <h1 className="font-semibold text-center text-5xl leading-[64px] mb-4">Contact Us</h1>
        <p className="text-center text-base leading-7 opacity-70 mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt ut labore.</p>

        <form onSubmit={(e) => e.preventDefault()} className="bg-grey pt-[55px] px-[77px] pb-16 rounded-[41px]">

          <div className="flex items-center justify-between space-x-8 mb-6">
            <div className="w-full flex flex-col space-y-2">
              <label className="font-medium text-lg leading-8" htmlFor="name">Name</label>
              <input className="px-8 py-[18px] rounded-lg bg-transparent border-2 border-opacity-20 border-black" id="name" type="text" placeholder="Enter your name" />
            </div>
            <div className="w-full flex flex-col space-y-2">
              <label className="font-medium text-lg leading-8" htmlFor="email">Email</label>
              <input className="px-8 py-[18px] rounded-lg bg-transparent border-2 border-opacity-20 border-black" id="email" type="email" placeholder="Enter your Email" />
            </div>
          </div>

          <div className="flex items-center justify-between space-x-8 mb-4">
            <div className="w-full flex flex-col space-y-2">
              <label className="font-medium text-lg leading-8" htmlFor="provideSubject">Subject</label>
              <input className="px-8 py-[18px] rounded-lg bg-transparent border-2 border-opacity-20 border-black" id="provideSubject" type="text" placeholder="Provide context" />
            </div>
            <div className="w-full flex flex-col space-y-2">
              <label className="font-medium text-lg leading-8" htmlFor="selectSubject">Subject</label>
              <input className="px-8 py-[18px] rounded-lg bg-transparent border-2 border-opacity-20 border-black" id="selectSubject" type="text" placeholder="Select Subject" />
            </div>
          </div>

          <div className="w-full flex flex-col space-y-2 mb-8">
            <label className="font-medium text-lg leading-8" htmlFor="message">Message</label>
            <textarea className="py-[18px] px-8 text-base leading-7 bg-transparent rounded-lg border-2 border-opacity-20 border-black resize-none" placeholder="Write your  question here" id="message" cols="30" rows="4"></textarea>
          </div>

          <button className="inline-block font-medium text-lg leading-8 text-white bg-darkBlue px-[51px] py-4 rounded-[41px]">Send Message</button>

        </form>

      </div>
    </div>
  )
}

export default Contact