
import Button from '../../../components/base/Button';

export default function HeroSection() {
  const handleSpecialistClick = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://static.readdy.ai/image/60d079db6e314477a5615b4d3efd8435/9fdb43adc8ec0b0607e262dd1b8b39b9.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Transforme sua 
              <span className="text-[#F19E1A] block">Comunicação</span>
              e Alavanque sua Carreira
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Descubra o treinamento ideal para destravar seu potencial e se destacar na vida pessoal e profissional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                onClick={handleSpecialistClick}
                className="text-lg px-8 py-4 whitespace-nowrap"
              >
                🔹 Falar com um Especialista
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-gray-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#F19E1A]">250+</div>
                <div className="text-sm text-gray-200">Unidades</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#F19E1A]">100k+</div>
                <div className="text-sm text-gray-200">Alunos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#F19E1A]">10+</div>
                <div className="text-sm text-gray-200">Anos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#F19E1A]">15</div>
                <div className="text-sm text-gray-200">Cursos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
