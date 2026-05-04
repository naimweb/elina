import emailjs from "@emailjs/browser";
import { useRef } from "react";


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1qybpre",
        "template_ruyz566",
        form.current,
        "_qMDgt4kRA9ES51pF"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("Failed to send message");
        }
      );
  };

  return (
    <>
    <div className="max-w-2xl mx-auto mt-12 p-6 bg-white shadow-lg rounded-xl">

      <p className="text-center">Connect with me</p>

      <h2 className="text-4xl font-semibold text-center mb-6 text-gray-700">
        Get in touch
      </h2>

      <p className="text-center">
        I'd love to hear from you! Please use the form below.
      </p>

      {/* FORM START */}
      <form ref={form} onSubmit={sendEmail} className="mt-9">

        <div className="flex flex-col md:flex-row gap-4">
          <input
            name="user_name"
            className="border w-full px-4 py-2 rounded-lg outline-none focus:border-blue-500"
            type="text"
            placeholder="Enter your name"
            required
            />

          <input
            name="user_email"
            className="border w-full px-4 py-2 rounded-lg focus:border-blue-500 outline-none"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <textarea
          name="message"
          className="border w-full mt-4 px-4 py-2 rounded-lg h-40 outline-none focus:border-blue-700"
          placeholder={"Write your message...\n (max 250 characters)"}
          maxLength={250}
          required
          />

        <button
          type="submit"
          className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          >
          Send Message
        </button>

      </form>
      {/* FORM END */}

    </div>
    {/* footer  */}

</>
  );
}

export default Contact;