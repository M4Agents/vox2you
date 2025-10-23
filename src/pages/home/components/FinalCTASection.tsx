
import Button from '../../../components/base/Button';

export default function FinalCTASection() {
  const handleSpecialistClick = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#F19E1A] to-[#E08A00] text-white relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://vox2you.com.br/wp-content/uploads/2023/08/IMG_7584-scaled-e1692189959932-768x500.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 border border-white rounded-full"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 border border-white rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <i className="ri-rocket-line text-6xl text-white mb-6 block"></i>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Chegou a Hora de Transformar 
          <span className="block">Sua Comunicação</span>
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto opacity-95">
          Descubra como conquistar a confiança e o interesse de quem importa.
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
          <p className="text-lg md:text-xl font-semibold mb-4">
            ⚠️ As vagas são limitadas — e as inscrições estão encerrando!
          </p>
          <p className="text-base opacity-90">
            Não perca a oportunidade de transformar sua carreira e vida pessoal através da comunicação eficaz.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
          <Button 
            size="lg" 
            onClick={handleSpecialistClick}
            className="!bg-white !text-[#F19E1A] hover:!bg-gray-50 text-xl px-12 py-6 shadow-2xl whitespace-nowrap font-bold border-4 border-white/30 hover:scale-105 transform transition-all duration-300"
          >
            🚀 Desbloqueie Sua Melhor Versão em Comunicação
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 opacity-90">
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">250+</div>
            <div className="text-sm">Unidades</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">100k+</div>
            <div className="text-sm">Alunos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">10+</div>
            <div className="text-sm">Anos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">15</div>
            <div className="text-sm">Cursos</div>
          </div>
        </div>
      </div>
    </section>
  );
}
