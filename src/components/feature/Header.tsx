
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`bg-white shadow-sm sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="https://vox2you.com.br/wp-content/uploads/2023/07/Export_Selo-10-anos__colorido-completo-copia-2.png" 
              alt="Vox2You" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#F19E1A] transition-colors">
              Home
            </Link>
            <Link to="/cursos" className="text-gray-700 hover:text-[#F19E1A] transition-colors">
              Cursos
            </Link>
            <Link to="/unidades" className="text-gray-700 hover:text-[#F19E1A] transition-colors">
              Unidades
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-[#F19E1A] transition-colors">
              Blog
            </Link>
            <Link to="/contato" className="text-gray-700 hover:text-[#F19E1A] transition-colors">
              Contato
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={handleContactClick}
              className="bg-[#F19E1A] text-white px-4 py-2 rounded-lg hover:bg-[#e08d0f] transition-colors whitespace-nowrap"
            >
              Faça sua matrícula
            </button>
            <button 
              onClick={handleContactClick}
              className="border border-[#F19E1A] text-[#F19E1A] px-4 py-2 rounded-lg hover:bg-[#F19E1A] hover:text-white transition-colors whitespace-nowrap"
            >
              Seja um franqueado
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-[#F19E1A] transition-colors">
                Home
              </Link>
              <Link to="/cursos" className="text-gray-700 hover:text-[#F19E1A] transition-colors">
                Cursos
              </Link>
              <Link to="/unidades" className="text-gray-700 hover:text-[#F19E1A] transition-colors">
                Unidades
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-[#F19E1A] transition-colors">
                Blog
              </Link>
              <Link to="/contato" className="text-gray-700 hover:text-[#F19E1A] transition-colors">
                Contato
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <button 
                  onClick={handleContactClick}
                  className="bg-[#F19E1A] text-white px-4 py-2 rounded-lg hover:bg-[#e08d0f] transition-colors text-center whitespace-nowrap"
                >
                  Faça sua matrícula
                </button>
                <button 
                  onClick={handleContactClick}
                  className="border border-[#F19E1A] text-[#F19E1A] px-4 py-2 rounded-lg hover:bg-[#F19E1A] hover:text-white transition-colors text-center whitespace-nowrap"
                >
                  Seja um franqueado
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}