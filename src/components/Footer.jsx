import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Coluna 1 - Logo e Descrição */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Casa do Micro-ondas</h3>
          <p className="text-sm">
            Assistência técnica especializada em micro-ondas com conserto rápido, entrega e retirada.
          </p>
        </div>

        {/* Coluna 2 - Links de Navegação */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Navegação</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#inicio" className="hover:underline">Início</a></li>
            <li><a href="#marcas" className="hover:underline">Marcas</a></li>
            <li><a href="#servicos" className="hover:underline">Serviços</a></li>
            <li><a href="#localizacao" className="hover:underline">Localização</a></li>
            <li><a href="#buscaentrega" className="hover:underline">Busca e Entrega</a></li>
            <li><a href="#contato" className="hover:underline">Contato</a></li>
          </ul>
        </div>

        {/* Coluna 3 - Contato e Endereços */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Contato</h4>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <Phone size={16} /> (41) 3332-8000
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5" />
              <div>
                Av. Pres. Kennedy, 410 - Rebouças, Curitiba - PR<br />
                R. Saturnino Miranda, 84 - Santa Felicidade, Curitiba - PR
              </div>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> atendimento@casadomicroondas.com.br
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} Casa do Micro-ondas. Desenvolvido por Gabriel Antunes e Wayron Jhonny.
      </div>
    </footer>
  );
};

export default Footer;
