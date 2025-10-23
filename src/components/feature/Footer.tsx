
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center">
          {/* Logo and Links */}
          <div className="text-center">
            <img 
              src="https://vox2you.com.br/wp-content/uploads/2023/07/Export_Selo-10-anos__colorido-completo-copia-2.png" 
              alt="Vox2You" 
              className="h-16 w-auto mb-6 mx-auto"
            />
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#sobre" className="text-gray-300 hover:text-white transition-colors">
                Sobre
              </a>
              <a href="#cursos" className="text-gray-300 hover:text-white transition-colors">
                Cursos
              </a>
              <a href="#depoimentos" className="text-gray-300 hover:text-white transition-colors">
                Depoimentos
              </a>
              <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
                FAQ
              </a>
              <a href="#contato" className="text-gray-300 hover:text-white transition-colors">
                Contato
              </a>
              <Link to="/politica-privacidade" className="text-gray-300 hover:text-white transition-colors">
                Política de privacidade
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            CNPJ: 18.467.437/0001-03 - Vox2you LTDA - Copyright 2025 © Todos os direitos reservados.
          </p>
          <p className="text-gray-400 mt-2 text-sm">
            <a href="https://m4.digital" target="_blank" rel="noopener noreferrer" className="text-[#F19E1A] hover:text-[#e08d0f] transition-colors">
              Powered by M4 Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
