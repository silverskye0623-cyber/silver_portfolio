import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { send, sendHover } from '../assets';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // sign up on emailjs.com (select the gmail service and connect your account).
    //click on create a new template then click on save.
    emailjs
      .send(
        'serviceID', // paste your ServiceID here (you'll get one when your service is created).
        'templateID', // paste your TemplateID here (you'll find it under email templates).
        {
          from_name: form.name,
          to_name: 'YourName', // put your name here.
          from_email: form.email,
          to_email: 'silverskye0623@gmail.com', //put your email here.
          message: form.message,
        },
        'yourpublickey' //paste your Public Key here. You'll get it in your profile section.
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <div className="w-full min-w-0 space-y-8">
      <div className="grid min-w-0 gap-5 sm:grid-cols-2 font-poppins">
        <div className="min-w-0">
          <p className="text-sm text-taupe uppercase tracking-wider font-semibold">Email</p>
          <a
            href="mailto:silverskye0623@gmail.com"
            className="inline-block max-w-full py-2 text-base sm:text-lg text-timberWolf [overflow-wrap:anywhere] hover:text-white">
            silverskye0623@gmail.com
          </a>
        </div>
        <div className="min-w-0">
          <p className="text-sm text-taupe uppercase tracking-wider font-semibold">Telegram</p>
          <a
            href="https://t.me/Kylemichaeltx"
            className="inline-block max-w-full py-2 text-base sm:text-lg text-timberWolf [overflow-wrap:anywhere] hover:text-white">
            @Kylemichaeltx
          </a>
        </div>
      </div>
      <motion.div
        variants={slideIn('up', 'tween', 0.2, 1)}
        className="w-full min-w-0 lg:max-w-4xl bg-jet p-5 sm:p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-6 sm:mt-10 flex min-w-0 flex-col gap-6 font-poppins">
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="w-full min-w-0 text-base bg-eerieBlack py-4 px-4 sm:px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="w-full min-w-0 text-base bg-eerieBlack py-4 px-4 sm:px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">
              Your Message
            </span>
            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="w-full min-w-0 text-base bg-eerieBlack py-4 px-4 sm:px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium resize-y"
            />
          </label>

          <button
            type="submit"
            className="live-demo flex justify-center sm:gap-4 
            gap-3 sm:text-[20px] text-[16px] text-timberWolf 
            font-bold font-beckman items-center py-5
            whitespace-nowrap sm:w-[130px] sm:h-[50px] 
            w-[100px] h-[45px] rounded-[10px] bg-night 
            hover:bg-battleGray hover:text-eerieBlack 
            transition duration-[0.2s] ease-in-out"
            onMouseOver={() => {
              document
                .querySelector('.contact-btn')
                .setAttribute('src', sendHover);
            }}
            onMouseOut={() => {
              document.querySelector('.contact-btn').setAttribute('src', send);
            }}>
            {loading ? 'Sending' : 'Send'}
            <img
              src={send}
              alt="send"
              className="contact-btn sm:w-[26px] sm:h-[26px] 
              w-[23px] h-[23px] object-contain"
            />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
