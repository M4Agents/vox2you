

import Button from '../../../components/base/Button';

export default function TestimonialsSection() {
  const handleSpecialistClick = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const testimonials = [
    {
      name: 'Ana Carolina Silva',
      role: 'Gerente de Marketing',
      company: 'Tech Solutions',
      image: 'https://readdy.ai/api/search-image?query=Professional%20confident%20businesswoman%20smiling%20in%20modern%20office%20environment%2C%20corporate%20headshot%20style%2C%20warm%20lighting%2C%20elegant%20and%20approachable%20appearance%2C%20clean%20background&width=150&height=150&seq=testimonial-ana&orientation=squarish',
      text: 'Antes da Vox2You, eu evitava apresentações. Hoje lidero reuniões com 50+ pessoas e recebi uma promoção! A metodologia realmente funciona.',
      rating: 5
    },
    {
      name: 'Roberto Mendes',
      role: 'Diretor Comercial',
      company: 'Inovação Corp',
      image: 'https://readdy.ai/api/search-image?query=Professional%20confident%20businessman%20in%20suit%20smiling%20in%20modern%20corporate%20office%2C%20executive%20headshot%20style%2C%20natural%20lighting%2C%20trustworthy%20and%20successful%20appearance%2C%20clean%20background&width=150&height=150&seq=testimonial-roberto&orientation=squarish',
      text: 'Minha timidez me limitava profissionalmente. Após o curso, minha comunicação melhorou 200%. Consegui fechar negócios que antes eram impossíveis.',
      rating: 5
    },
    {
      name: 'Mariana Costa',
      role: 'Empreendedora',
      company: 'Startup Digital',
      image: 'https://readdy.ai/api/search-image?query=Professional%20confident%20young%20businesswoman%20entrepreneur%20smiling%20in%20modern%20startup%20office%2C%20creative%20headshot%20style%2C%20bright%20lighting%2C%20innovative%20and%20dynamic%20appearance%2C%20clean%20background&width=150&height=150&seq=testimonial-mariana&orientation=squarish',
      text: 'Como empreendedora, precisava convencer investidores. A Vox2You me deu as ferramentas para apresentar minha startup com segurança total.',
      rating: 5
    },
    {
      name: 'Carlos Eduardo',
      role: 'Engenheiro Sênior',
      company: 'Construtech',
      image: 'https://readdy.ai/api/search-image?query=Professional%20confident%20middle-aged%20engineer%20in%20business%20casual%20attire%20smiling%20in%20modern%20office%2C%20technical%20professional%20headshot%20style%2C%20natural%20lighting%2C%20competent%20and%20reliable%20appearance%2C%20clean%20background&width=150&height=150&seq=testimonial-carlos&orientation=squarish',
      text: 'Sempre fui técnico, mas comunicar era meu ponto fraco. Hoje conduzo treinamentos para toda a equipe. Transformação completa!',
      rating: 5
    },
    {
      name: 'Juliana Santos',
      role: 'Consultora RH',
      company: 'People First',
      image: 'https://readdy.ai/api/search-image?query=Professional%20confident%20HR%20consultant%20woman%20smiling%20in%20modern%20corporate%20office%2C%20business%20professional%20headshot%20style%2C%20warm%20lighting%2C%20approachable%20and%20professional%20appearance%2C%20clean%20background&width=150&height=150&seq=testimonial-juliana&orientation=squarish',
      text: 'Trabalho com pessoas, mas tinha dificuldade em palestras. O curso me deu técnicas práticas que uso diariamente. Recomendo 100%!',
      rating: 5
    },
    {
      name: 'Fernando Lima',
      role: 'Advogado',
      company: 'Lima & Associados',
      image: 'https://readdy.ai/api/search-image?query=Professional%20confident%20lawyer%20in%20suit%20smiling%20in%20modern%20law%20office%2C%20legal%20professional%20headshot%20style%2C%20formal%20lighting%2C%20authoritative%20and%20trustworthy%20appearance%2C%20clean%20background&width=150&height=150&seq=testimonial-fernando&orientation=squarish',
      text: 'No tribunal, a oratória é fundamental. A Vox2You aprimorou minha argumentação e presença. Meus resultados melhoraram significativamente.',
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Histórias Reais de 
            <span className="text-[#F19E1A]">Transformação</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja como nossos alunos superaram o medo de falar em público e transformaram suas carreiras com a Vox2You.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-[#F19E1A]"></i>
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-[#F19E1A]">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            onClick={handleSpecialistClick}
            icon="ri-heart-line"
            className="text-lg px-8 py-4"
          >
            💬 Quero viver essa transformação
          </Button>
        </div>
      </div>
    </section>
  );
}

