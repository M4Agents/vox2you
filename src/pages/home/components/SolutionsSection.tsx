
export default function SolutionsSection() {
  const solutions = [
    {
      icon: 'ri-line-chart-line',
      title: 'Aumentar resultados profissionais',
      description: 'Destaque-se no ambiente corporativo'
    },
    {
      icon: 'ri-team-line',
      title: 'Melhorar a comunicação interpessoal',
      description: 'Relacionamentos mais eficazes'
    },
    {
      icon: 'ri-user-star-line',
      title: 'Desenvolver liderança e engajar equipes',
      description: 'Inspire e motive sua equipe'
    },
    {
      icon: 'ri-presentation-line',
      title: 'Ministrar reuniões de impacto',
      description: 'Conduza reuniões memoráveis'
    },
    {
      icon: 'ri-emotion-line',
      title: 'Combater timidez e medo de falar em público',
      description: 'Supere suas limitações'
    },
    {
      icon: 'ri-video-line',
      title: 'Gravar vídeos com segurança e naturalidade',
      description: 'Presença digital marcante'
    },
    {
      icon: 'ri-chat-3-line',
      title: 'Desenvolver habilidades de persuasão',
      description: 'Argumentação convincente'
    },
    {
      icon: 'ri-award-line',
      title: 'Alcançar promoções e reconhecimento',
      description: 'Acelere sua carreira'
    }
  ];

  return (
    <section id="cursos" className="py-20 bg-gradient-to-br from-[#F19E1A]/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos Treinamentos 
            <span className="text-[#F19E1A]">Ajudam Você a:</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforme suas habilidades de comunicação e alcance seus objetivos pessoais e profissionais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="w-12 h-12 bg-[#F19E1A]/10 rounded-lg flex items-center justify-center mb-4">
                <i className={`${solution.icon} text-xl text-[#F19E1A]`}></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{solution.title}</h3>
              <p className="text-gray-600 text-sm">{solution.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Metodologia Personalizada
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              Cada aluno recebe um plano de desenvolvimento único, baseado em suas necessidades específicas e objetivos de comunicação.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F19E1A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-search-line text-2xl text-[#F19E1A]"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Diagnóstico</h4>
                <p className="text-gray-600 text-sm">Avaliamos seu perfil comunicativo</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F19E1A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-file-list-3-line text-2xl text-[#F19E1A]"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Plano Personalizado</h4>
                <p className="text-gray-600 text-sm">Criamos sua jornada de desenvolvimento</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F19E1A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-rocket-line text-2xl text-[#F19E1A]"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Resultados</h4>
                <p className="text-gray-600 text-sm">Acompanhamos sua evolução</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
