import React from "react";
import { Wrench, ShieldCheck, Clock, RefreshCcw } from "lucide-react";

const services = [
  {
    title: "Conserto de Micro-ondas",
    description: "Diagnóstico e reparo especializado em aparelhos de diversas marcas.",
    icon: <Wrench size={36} className="text-orange-500" />,
  },
  {
    title: "Atendimento Rápido",
    description: "Serviço com prazo reduzido para quem tem urgência (até 30 minutos).",
    icon: <Clock size={36} className="text-orange-500" />,
  },
  {
    title: "Garantia Estendida",
    description: "Serviços com garantia de qualidade e cobertura técnica.",
    icon: <ShieldCheck size={36} className="text-orange-500" />,
  },
  {
    title: "Troca de Peças",
    description: "Substituição de componentes danificados por peças originais.",
    icon: <RefreshCcw size={36} className="text-orange-500" />,
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-gray-50 py-16" id="servicos">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossos Serviços</h2>
        <p className="text-gray-600 mb-10">
          Soluções completas para o seu micro-ondas, com atendimento técnico e especializado.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
