export default function Contact() {
  return (
    <section
      className="flex justify-center items-center flex-col pt-10 pb-20 md:pb-35 text-center"
      id="contact"
    >
      <div className="relative flex justify-center items-center">
        <h1
          className="text-[30px] md:text-5xl text-white font-medium pb-5 md:pb-10"
          data-aos="fade-up"
        >
          Contact Me
        </h1>
        <div className="w-10 md:w-20 h-[2px] bg-green-custom absolute top-12 md:top-16"></div>
      </div>
      <p
        className="text-[18px] md:text-2xl max-w-200 font-light mb-6 text-gray-400"
        data-aos="fade-up"
      >
        Feel free to reach out if you want to chat, discuss something, or need
        help. I'm here to answer any questions or just have a conversation!
      </p>
      <a
        data-aos="fade-up"
        href="mailto:hendraaditya1913@gmail.com"
        className="px-7 py-2 md:px-10 md:py-4 md:mt-5 text-[20px] md:text-3xl bg-green-custom text-white hover:bg-green-900 transition duration-300 ease-in-out"
      >
        Say Hello
      </a>
    </section>
  );
}
