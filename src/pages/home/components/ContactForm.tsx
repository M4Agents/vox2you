
import { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  startTime: string;
  tatuapeAccess: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    interest: '',
    startTime: '',
    tatuapeAccess: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Preparar dados como JSON
      const dataToSend = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        interest: formData.interest,
        startTime: formData.startTime,
        tatuapeAccess: formData.tatuapeAccess,
        message: formData.message,
        timestamp: new Date().toISOString(),
        source: 'site-vox-tatuape'
      };

      // Verificar se está em ambiente local
      const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      
      if (isLocalhost) {
        // Em ambiente local, simular sucesso para teste
        console.log('Ambiente local detectado. Dados que seriam enviados:', dataToSend);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simular delay da requisição
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          interest: '',
          startTime: '',
          tatuapeAccess: '',
          message: ''
        });
        return;
      }

      // Tentar múltiplos formatos para garantir compatibilidade
      let response;
      let success = false;

      // Tentativa 1: FormData (formato mais comum para webhooks)
      try {
        const formDataToSend = new FormData();
        Object.entries(dataToSend).forEach(([key, value]) => {
          formDataToSend.append(key, value);
        });

        response = await fetch('https://webhooks.manager01.m4track.com.br/webhook/site-vox-tatuape', {
          method: 'POST',
          body: formDataToSend
        });

        if (response.ok || response.status === 200 || response.status === 201) {
          success = true;
        }
      } catch (error) {
        console.log('Tentativa 1 (FormData) falhou:', error);
      }

      // Tentativa 2: JSON (se FormData falhar)
      if (!success) {
        try {
          response = await fetch('https://webhooks.manager01.m4track.com.br/webhook/site-vox-tatuape', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(dataToSend)
          });

          if (response.ok || response.status === 200 || response.status === 201) {
            success = true;
          }
        } catch (error) {
          console.log('Tentativa 2 (JSON) falhou:', error);
        }
      }

      // Tentativa 3: URL encoded (último recurso)
      if (!success) {
        try {
          const urlEncodedData = new URLSearchParams();
          Object.entries(dataToSend).forEach(([key, value]) => {
            urlEncodedData.append(key, value);
          });

          response = await fetch('https://webhooks.manager01.m4track.com.br/webhook/site-vox-tatuape', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: urlEncodedData
          });

          if (response.ok || response.status === 200 || response.status === 201) {
            success = true;
          }
        } catch (error) {
          console.log('Tentativa 3 (URL encoded) falhou:', error);
        }
      }

      if (success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          interest: '',
          startTime: '',
          tatuapeAccess: '',
          message: ''
        });
      } else {
        console.error('Todas as tentativas falharam. Status da última resposta:', response?.status, response?.statusText);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Fale Conosco
          </h2>
          <p className="text-xl text-gray-600">
            Preencha o formulário e nossa equipe entrará em contato
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} data-readdy-form id="contact-form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F19E1A] focus:border-transparent text-sm"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F19E1A] focus:border-transparent text-sm"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F19E1A] focus:border-transparent text-sm"
                  placeholder="(11) 99999-9999"
                />
              </div>
              
              <div>
                <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2">
                  Interesse Principal
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F19E1A] focus:border-transparent text-sm pr-8"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="oratoria-basica">Oratória Básica</option>
                  <option value="comunicacao-corporativa">Comunicação Corporativa</option>
                  <option value="lideranca">Liderança e Influência</option>
                  <option value="apresentacoes">Apresentações de Impacto</option>
                  <option value="timidez">Combater Timidez</option>
                  <option value="vendas">Comunicação para Vendas</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="startTime" className="block text-sm font-semibold text-gray-700 mb-2">
                Quando você pensa em iniciar o Curso
              </label>
              <select
                id="startTime"
                name="startTime"
                value={formData.startTime}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F19E1A] focus:border-transparent text-sm pr-8"
              >
                <option value="">Selecione uma opção</option>
                <option value="ate-1-mes">Em até 1 Mês</option>
                <option value="ate-3-meses">Em até 3 Meses</option>
                <option value="pesquisando">Estou pesquisando, não é uma prioridade para os próximos 3 meses</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="tatuapeAccess" className="block text-sm font-semibold text-gray-700 mb-2">
                A região do Tatuapé é de fácil acesso para você *
              </label>
              <select
                id="tatuapeAccess"
                name="tatuapeAccess"
                value={formData.tatuapeAccess}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F19E1A] focus:border-transparent text-sm pr-8"
              >
                <option value="">Selecione uma opção</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                maxLength={500}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F19E1A] focus:border-transparent text-sm resize-none"
                placeholder="Conte-nos mais sobre seus objetivos e expectativas..."
              ></textarea>
              <div className="text-right text-xs text-gray-500 mt-1">
                {formData.message.length}/500 caracteres
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#F19E1A] hover:bg-[#E08A00] text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <i className="ri-loader-4-line animate-spin mr-2"></i>
                  Enviando...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <i className="ri-send-plane-line mr-2"></i>
                  Enviar Mensagem
                </span>
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center">
                  <i className="ri-check-line text-green-600 mr-2"></i>
                  <span className="text-green-800">Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <i className="ri-error-warning-line text-red-600 mr-2"></i>
                  <span className="text-red-800">Erro ao enviar mensagem. Tente novamente.</span>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
