import React from "react";

const brands = [
  { name: "Electrolux", logo: "/brands/electrolux.png" },
  { name: "Brastemp", logo: "/brands/brastemp.png" },
  { name: "LG", logo: "/brands/lg.png" },
  { name: "Samsung", logo: "/brands/samsung.png" },
  { name: "Panasonic", logo: "/brands/panasonic.png" },
  { name: "Consul", logo: "/brands/consul.png" },
];

const BrandsSection = () => {
  return (
    <section className="bg-white py-16" id="marcas">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Especialistas nas principais marcas
        </h2>
        <p className="text-gray-600 mb-8">
          Atuamos com manutenção e reparo das marcas mais reconhecidas do mercado.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {brands.map((brand) => (
            <div key={brand.name} className="flex justify-center items-center">
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 grayscale hover:grayscale-0 transition duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
