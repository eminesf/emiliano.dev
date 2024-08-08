import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const UsefulLinks = () => (
  <section id="useful-links" className="useful-links py-20">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold">Links úteis</h2>
      <div className="flex flex-wrap justify-center mt-10">
        <a
          href="https://github.com/eminesf"
          target="_blank"
          className="m-4 p-6 w-60 h-40 bg-white shadow-md rounded-lg border-t-4 border-blue-500 flex flex-col items-center justify-center hover:scale-105 ease-in-out transition delay-[105]"
        >
          <FaGithub className="text-4xl text-blue-500 mb-2" />
          <span className="text-xl font-bold text-gray-800">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/emiliano-da-silveira-fucks-64b8a1a5/"
          target="_blank"
          className="m-4 p-6 w-60 h-40 bg-white shadow-md rounded-lg border-t-4 border-blue-500 flex flex-col items-center justify-center hover:scale-105 ease-in-out transition delay-[105]"
        >
          <FaLinkedin className="text-4xl text-blue-500 mb-2" />
          <span className="text-xl font-bold text-gray-800">LinkedIn</span>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5551995582616"
          target="_blank"
          className="m-4 p-6 w-60 h-40 bg-white shadow-md rounded-lg border-t-4 border-blue-500 flex flex-col items-center justify-center hover:scale-105 ease-in-out transition delay-[105]"
        >
          <FaWhatsapp className="text-4xl text-blue-500 mb-2" />
          <span className="text-xl font-bold text-gray-800">WhatsApp</span>
        </a>
      </div>
    </div>
  </section>
);
