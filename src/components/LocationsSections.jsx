import React from "react";

const branches = [
  {
    name: "Unidade Rebouças",
    address: "Av. Presidente Kennedy, 410 - Rebouças, Curitiba - PR",
    phone: "(41) 99999-1111",
    whatsapp: "(41) 98888-2222",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5124888287163!2d-49.27604878446911!3d-25.47433218377704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce43b5f08039d%3A0xe85e22a1741829df!2sAv.%20Pres.%20Kennedy%2C%20410%20-%20Rebou%C3%A7as%2C%20Curitiba%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1717433043893!5m2!1spt-BR!2sbr"
  },
  {
    name: "Unidade Santa Felicidade",
    address: "Rua Saturnino Miranda, 84 - Santa Felicidade, Curitiba - PR",
    phone: "(41) 97777-3333",
    whatsapp: "(41) 96666-4444",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.271205204869!2d-49.34115718447069!3d-25.445620183788287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce53e6833c5cd%3A0xe42b78126ed5cf84!2sR.%20Saturnino%20Miranda%2C%2084%20-%20Santa%20Felicidade%2C%20Curitiba%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1717433158251!5m2!1spt-BR!2sbr"
  }
];

const LocationsSection = () => {
  return (
    <section id="filiais" className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-12">
          Nossas Filiais
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 border border-orange-200"
            >
              <h3 className="text-xl font-semibold text-orange-700 mb-2">
                {branch.name}
              </h3>
              <p className="text-gray-700 mb-1">{branch.address}</p>
              <p className="text-gray-700 mb-1">Tel: {branch.phone}</p>
              <p className="text-gray-700 mb-4">WhatsApp: {branch.whatsapp}</p>
              <div className="rounded overflow-hidden shadow-sm">
                <iframe
                  src={branch.mapEmbed}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa - ${branch.name}`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
