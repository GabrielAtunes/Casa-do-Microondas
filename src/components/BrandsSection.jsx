import React from "react";
import eletrolux from "../assets/eletrolux.png";
import brastemp from "../assets/brastemp.png";
import lg from "../assets/lg.svg";
import samsung from "../assets/samsung.png";
import panasonic from "../assets/panasonic.png";
import consul from "../assets/consul.png";

const brands = [
  { name: "Electrolux", logo: eletrolux },
  { name: "Brastemp", logo: brastemp },
  { name: "LG", logo: lg },
  { name: "Samsung", logo: samsung },
  { name: "Panasonic", logo: panasonic },
  { name: "Consul", logo: consul },
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
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
