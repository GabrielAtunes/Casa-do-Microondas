import React from "react";
import { Truck, Clock, Phone } from "lucide-react";

const DeliverySection = () => {
  return (
    <section id="entrega" className="bg-white py-16 px-6 border-t border-orange-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-orange-600 mb-6">
          Serviço de Busca e Entrega
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Pensando na sua comodidade, oferecemos um serviço ágil de busca e entrega de micro-ondas em toda Curitiba e região. Basta entrar em contato e cuidamos do restante!
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="flex items-center gap-4 bg-gray-50 shadow-md px-6 py-4 rounded-lg border border-orange-200">
            <Truck className="text-orange-600 w-8 h-8" />
            <div className="text-left">
              <h4 className="text-lg font-semibold text-gray-800">Retirada no Local</h4>
              <p className="text-sm text-gray-600">Buscamos seu micro-ondas com agendamento rápido.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gray-50 shadow-md px-6 py-4 rounded-lg border border-orange-200">
            <Clock className="text-orange-600 w-8 h-8" />
            <div className="text-left">
              <h4 className="text-lg font-semibold text-gray-800">Entrega Garantida</h4>
              <p className="text-sm text-gray-600">Após o reparo, entregamos no endereço desejado.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center items-center gap-3 text-lg font-medium text-orange-600">
          <Phone className="w-5 h-5" />
          <span>(41) 3332-8000</span>
        </div>

        <a
          href="#contato"
          className="inline-block mt-6 bg-orange-500 text-white font-bold py-3 px-6 rounded-md hover:bg-orange-600 transition"
        >
          Solicitar Retirada
        </a>
      </div>
    </section>
  );
};

export default DeliverySection;
