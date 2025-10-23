
import Button from '../../../components/base/Button';

export default function MethodSection() {
  const handleSpecialistClick = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const differentials = [
    {
      icon: 'ri-time-line',
      title: 'Flexibilidade de horários',
      description: 'Escolha o melhor horário para sua rotina'
    },
    {
      icon: 'ri-group-line',
      title: 'Turmas reduzidas',
      description: 'Atenção individualizada e prática constante'
    },
    {
      icon: 'ri-building-line',
      title: '100% presencial',
      description: 'Imersão total com mentoria especializada'
    },
    {
      icon: 'ri-trophy-line',
      title: 'Resultados reais',
      description: 'Evolução rápida e acompanhada'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comunicação é Poder — 
            <span className="text-[#F19E1A]">E Nós Te Ensinamos a Usar</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Nossa metodologia é 100% presencial e personalizada. Identificamos suas necessidades de comunicação e te conectamos à solução certa para alcançar o sucesso que você merece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {differentials.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#F19E1A] rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className={`${item.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            onClick={handleSpecialistClick}
            icon="ri-phone-line"
            className="text-lg px-8 py-4"
          >
            📲 Falar com um Especialista
          </Button>
        </div>
      </div>
    </section>
  );
}