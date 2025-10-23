
import { useState, useEffect } from 'react';
import Button from '../../../components/base/Button';

export default function TransformationSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: "https://vox2you.com.br/wp-content/uploads/2023/08/IMG_1323-scaled-e1692127322162-768x499.jpeg",
      alt: "Alunos Vox2You em aula prática"
    },
    {
      src: "https://vox2you.com.br/wp-content/uploads/2023/08/IMG_7590-2-scaled-e1692127827198-768x648.jpeg",
      alt: "Apresentação de aluno Vox2You"
    },
    {
      src: "https://vox2you.com.br/wp-content/uploads/2023/08/IMG_7584-scaled-e1692189959932-768x500.jpeg",
      alt: "Dinâmica em grupo Vox2You"
    },
    {
      src: "https://vox2you.com.br/wp-content/uploads/2023/08/Snapinsta.app_348856503_283319120703371_5094326466497560623_n_1080-e1692190216406-768x598.jpg",
      alt: "Turma Vox2You celebrando"
    },
    {
      src: "https://vox2you.com.br/wp-content/uploads/2023/08/IMG_7601-3-scaled-e1692190298488-768x554.jpeg",
      alt: "Exercício de oratória Vox2You"
    },
    {
      src: "https://vox2you.com.br/wp-content/uploads/2023/08/Snapinsta.app_353422053_275404594986915_5565578790819091741_n_1080-e1692378836490-768x608.jpg",
      alt: "Formatura Vox2You"
    }
  ];

  const handleSpecialistClick = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000); // Troca a cada 4 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-1 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Falar bem 
              <span className="text-[#F19E1A]"> muda tudo.</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Você já se imaginou apresentando projetos com segurança e carisma, conquistando a admiração de todos ao seu redor?
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Na Vox2You Tatuapé, isso é possível. Aprenda técnicas eficazes para eliminar o nervosismo, desenvolver presença marcante e transmitir ideias com clareza — seja em reuniões, palestras ou no dia a dia.
            </p>

            <Button 
              size="lg" 
              onClick={handleSpecialistClick}
              icon="ri-message-3-line"
              className="text-lg"
            >
              💬 Falar com um Especialista
            </Button>
          </div>

          {/* Modern Image Slider */}
          <div className="order-2 lg:order-2">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-100">
              {/* Slider Container */}
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {images.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 group"
              >
                <i className="ri-arrow-left-line text-xl group-hover:text-[#F19E1A]"></i>
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 group"
              >
                <i className="ri-arrow-right-line text-xl group-hover:text-[#F19E1A]"></i>
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-[#F19E1A] scale-125' 
                        : 'bg-white/70 hover:bg-white/90'
                    }`}
                  />
                ))}
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-black/10">
                <div 
                  className="h-full bg-[#F19E1A] transition-all duration-300"
                  style={{ width: `${((currentSlide + 1) / images.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Image Counter */}
            <div className="flex justify-center mt-4">
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {currentSlide + 1} de {images.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}