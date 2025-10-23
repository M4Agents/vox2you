
export default function AuthoritySection() {
  const stats = [
    {
      icon: 'ri-map-pin-line',
      number: '250+',
      text: 'Unidades no Brasil',
      description: 'Presença em todo território nacional',
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100/50',
      iconBg: 'bg-blue-500/10',
      iconColor: 'text-blue-600'
    },
    {
      icon: 'ri-brain-line',
      number: '100%',
      text: 'Metodologia própria',
      description: 'Base científica e exclusiva',
      bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100/50',
      iconBg: 'bg-purple-500/10',
      iconColor: 'text-purple-600'
    },
    {
      icon: 'ri-group-line',
      number: '100k+',
      text: 'Alunos transformados',
      description: 'Vidas mudadas pela comunicação',
      bgColor: 'bg-gradient-to-br from-green-50 to-green-100/50',
      iconBg: 'bg-green-500/10',
      iconColor: 'text-green-600'
    },
    {
      icon: 'ri-time-line',
      number: '10+',
      text: 'Anos de experiência',
      description: 'Tradição em ensino de oratória',
      bgColor: 'bg-gradient-to-br from-amber-50 to-amber-100/50',
      iconBg: 'bg-amber-500/10',
      iconColor: 'text-amber-600'
    },
    {
      icon: 'ri-book-line',
      number: '15',
      text: 'Treinamentos especializados',
      description: 'Comunicação, Oratória e Influência',
      bgColor: 'bg-gradient-to-br from-rose-50 to-rose-100/50',
      iconBg: 'bg-rose-500/10',
      iconColor: 'text-rose-600'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            A Maior Rede de Academias de 
            <span className="text-[#F19E1A] block">Oratória da América Latina</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de uma década transformando vidas através da comunicação eficaz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className={`${stat.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50`}>
              <div className={`w-16 h-16 ${stat.iconBg} rounded-full flex items-center justify-center mb-6 mx-auto`}>
                <i className={`${stat.icon} text-2xl ${stat.iconColor}`}></i>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F19E1A] mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.text}</div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Otaviano Costa<br />
              <span className="text-[#F19E1A]">Sócio e Embaixador da Vox2You</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Com 35 anos de experiência na comunicação, Otaviano Costa é uma referência nacional. 
              De sua trajetória no rádio à TV, como apresentador e ator, ele inspirou milhões com sua 
              habilidade de se expressar. Agora, como sócio e embaixador da Vox2you, Otaviano une sua 
              paixão e expertise para transformar vidas, ajudando a formar comunicadores confiantes e impactantes.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://vox2you.com.br/wp-content/uploads/2025/02/Banners-Lps_redes-sociais-1024x398.webp" 
              alt="Otaviano Costa - Embaixador Vox2You" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
