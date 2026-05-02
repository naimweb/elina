

function Contact() {
  return (
     <>
     <div className="max-w-2xl mx-auto mt-12 p-6 bg-white shadow-lg rounded-xl">

        <p className="text-center">Connect with me</p>

        <h2 className="text-4xl font-semibold text-center mb-6 text-gray-700 ">
          Get in touch</h2>

    <p className="w-full  mx-auto text-center">I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.</p>

    {/* contact box */}
  <div className="flex flex-col md:flex-row gap-4 mt-9">
    <input
      className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none w-full px-4 py-2 rounded-lg transition"
      type="text"
      placeholder="Enter your name"
    />
    <input
      className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none w-full px-4 py-2 rounded-lg transition"
      type="email"
      placeholder="Enter your email"
    />
  </div>

  <textarea
    className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none w-full mt-4 px-4 py-2 rounded-lg h-45  transition"
    placeholder={"Write your message........ \n height Max 250 characters only"} maxLength={250}
    
  > </textarea>

  <button className="mt-6 w-full mx-auto bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition">
    Send Message
  </button>
</div>
     </>
  )
}

export default Contact