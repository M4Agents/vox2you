
import { useState } from 'react';
import Button from '../../../components/base/Button';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleSpecialistClick = () => {
    // Rolar para o formulário de contato
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      question: 'Nunca fiz curso de oratória. É adequado para iniciantes?',
      answer: 'Absolutamente! Nossa metodologia é desenvolvida especialmente para atender desde iniciantes até profissionais experientes. Começamos com uma avaliação individual para identificar seu nível e necessidades específicas, garantindo que você se sinta confortável e evolua no seu ritmo.'
    },
    {
      question: 'Quanto tempo leva para completar o curso?',
      answer: 'O tempo varia conforme o curso escolhido e seus objetivos. Temos opções de 8 a 24 semanas, com aulas semanais. Nossos consultores ajudam a escolher o formato ideal para sua rotina e metas. Muitos alunos já percebem melhorias significativas nas primeiras semanas.'
    },
    {
      question: 'O curso oferece prática e feedback?',
      answer: 'Sim! Nossa metodologia é 100% prática. Cada aula inclui exercícios de oratória, simulações reais e feedback personalizado dos instrutores. Você pratica em um ambiente seguro e acolhedor, com turmas reduzidas para máxima atenção individual.'
    },
    {
      question: 'Qual o investimento?',
      answer: 'O investimento varia conforme o curso e modalidade escolhidos. Oferecemos diferentes opções de pagamento e condições especiais. Agende uma conversa com nosso especialista para conhecer os valores e encontrar a melhor condição para seu orçamento.'
    },
    {
      question: 'Como saber qual curso é ideal para mim?',
      answer: 'Nossos especialistas fazem uma análise gratuita do seu perfil comunicativo e objetivos. Com base nessa avaliação, recomendamos o curso mais adequado às suas necessidades. Cada pessoa tem um plano personalizado de desenvolvimento.'
    },
    {
      question: 'As aulas são presenciais ou online?',
      answer: 'Nossas aulas são 100% presenciais na unidade Tatuapé. Acreditamos que a imersão presencial proporciona melhor aprendizado, networking e resultados mais rápidos. Nossa estrutura moderna oferece todo conforto necessário.'
    },
    {
      question: 'Posso escolher os horários das aulas?',
      answer: 'Sim! Oferecemos flexibilidade de horários para se adaptar à sua rotina. Temos turmas nos períodos manhã, tarde e noite, incluindo fins de semana. Nosso time ajuda a encontrar o melhor encaixe na sua agenda.'
    },
    {
      question: 'Há garantia de resultados?',
      answer: 'Temos mais de 10 anos de experiência e 100 mil alunos transformados. Nossa metodologia comprovada garante evolução quando o aluno se dedica às práticas propostas. Oferecemos acompanhamento contínuo para assegurar seu progresso.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dúvidas 
            <span className="text-[#F19E1A]">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Esclarecemos as principais questões sobre nossos cursos
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
                <i className={`ri-${openIndex === index ? 'subtract' : 'add'}-line text-[#F19E1A] text-xl flex-shrink-0`}></i>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            onClick={handleSpecialistClick}
            className="text-lg px-8 py-4"
          >
            🎯 Fale com um Especialista Agora
          </Button>
        </div>
      </div>
    </section>
  );
}
