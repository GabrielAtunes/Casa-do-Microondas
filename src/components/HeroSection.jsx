import React from "react";
import image from "../assets/hero-image.jpeg";

const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-16" id="hero">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Texto principal */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Conserto rápido e profissional de micro-ondas
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Especialistas em consertos das principais marcas. Atendimento ágil, transparente e com garantia. Agende agora mesmo!
          </p>
          <a
            href="#contato"
            className="bg-orange-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-orange-600 transition"
          >
            Fale conosco
          </a>
        </div>

        {/* Imagem ilustrativa */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={image}
            alt="Micro-ondas em manutenção"
            className="max-w-sm w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
