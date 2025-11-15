import React from "react"
import {BriefcaseIcon, GraduationCapIcon, HeartHandshakeIcon, ShieldAlertIcon, StoreIcon, PhoneIcon, AlertCircleIcon, MapPinIcon} from 'lucide-react'

function App() {
  const modules = [
    {
      id: "empregos",
      title: "💼 Trampo do Jacaré",
      description: "Vagas de emprego formais e informais para moradores do Rio de Janeiro",
      color: "from-green-500 to-emerald-600",
      icon: BriefcaseIcon,
      links: [
        { name: "SINE Fácil", url: "https://empregabrasil.mte.gov.br" },
        { name: "Gupy", url: "https://www.gupy.io" },
        { name: "Infojobs", url: "https://www.infojobs.com.br" },
        { name: "LinkedIn Vagas", url: "https://www.linkedin.com/jobs" },
        { name: "Indeed", url: "https://br.indeed.com" },
      ],
      features: ["Primeiro emprego", "Jovem aprendiz", "Sem experiência", "Como fazer currículo"],
    },
    {
      id: "cursos",
      title: "📚 Aprende Jacaré",
      description: "Cursos gratuitos e certificados para capacitação profissional",
      color: "from-orange-500 to-amber-600",
      icon: GraduationCapIcon,
      links: [
        { name: "Coursera Gratuito", url: "https://www.coursera.org" },
        { name: "Fundação Bradesco", url: "https://www.ev.org.br" },
        { name: "SENAI EAD", url: "https://www.portaldaindustria.com.br/senai" },
        { name: "Sebrae", url: "https://www.sebrae.com.br" },
        { name: "Google Ateliê Digital", url: "https://learndigital.withgoogle.com/ateliedigital" },
        { name: "Escola Virtual Governo", url: "https://www.escolavirtual.gov.br" },
        { name: "Enap", url: "https://www.enap.gov.br" },
        { name: "FreeCodeCamp", url: "https://www.freecodecamp.org/portuguese" },
      ],
      features: ["Empreendedorismo", "Vendas online", "Excel", "Tecnologia", "Segurança privada"],
    },
    {
      id: "cidadania",
      title: "🏥 Cidadania no Jacaré",
      description: "Serviços essenciais de saúde, documentação e assistência social",
      color: "from-blue-500 to-cyan-600",
      icon: HeartHandshakeIcon,
      services: [
        {
          category: "Documentação",
          items: ["Agendamento RG", "Agendamento CPF", "Certidões online", "Segunda via de documentos"],
        },
        {
          category: "Saúde",
          items: ["Localização de postos", "Agendamento SUS", "Carteira de vacinação", "Saúde mental"],
        },
        {
          category: "Assistência Social",
          items: ["Cadastro Único (CadÚnico)", "Bolsa Família", "CRAS mais próximo"],
        },
      ],
    },
    {
      id: "denuncias",
      title: "🛡️ Denúncias Seguras",
      description: "Canal anônimo e seguro para denúncias e apoio psicológico",
      color: "from-red-500 to-rose-600",
      icon: ShieldAlertIcon,
      emergency: [
        { name: "Disque 100 (Direitos Humanos)", phone: "100" },
        { name: "Disque 180 (Violência contra Mulher)", phone: "180" },
        { name: "Ministério Público RJ", phone: "127" },
        { name: "CVV (Apoio Emocional)", phone: "188" },
      ],
    },
    {
      id: "economia",
      title: "🏪 Economia Local",
      description: "Fortaleça negócios e profissionais da comunidade",
      color: "from-teal-500 to-green-600",
      icon: StoreIcon,
      categories: [
        "Catadores de recicláveis",
        "Salgadeiras e alimentação",
        "Manicure e beleza",
        "Barbeiros",
        "Profissionais autônomos",
        "Pequenos comércios",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                AJ
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-slate-800">Auxilia Jacaré</h1>
                <p className="text-xs sm:text-sm text-slate-600 hidden sm:block">Plataforma Social do Jacarezinho</p>
              </div>
            </div>
            <a
              href="tel:100"
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Emergência</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-blue-600 to-teal-600 text-white py-16 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 leading-tight">
            Viver com dignidade, segurança e oportunidades
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto opacity-95">
            Uma plataforma gratuita e acessível criada para atender às necessidades da comunidade do Jacarezinho.
            Acesso a empregos, cursos, serviços sociais e apoio — tudo no seu celular.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#empregos"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors shadow-lg"
            >
              Ver Oportunidades de Emprego
            </a>
            <a
              href="#cursos"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Acessar Cursos Gratuitos
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">5</div>
            <div className="text-sm text-slate-600">Plataformas de Emprego</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">8</div>
            <div className="text-sm text-slate-600">Cursos Gratuitos</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-sm text-slate-600">Gratuito</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
            <div className="text-sm text-slate-600">Disponível</div>
          </div>
        </div>

        {/* Modules */}
        <div className="space-y-8">
          {/* Empregos */}
          <section id="empregos" className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-14 h-14 bg-gradient-to-br ${modules[0].color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                <BriefcaseIcon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800">{modules[0].title}</h3>
                <p className="text-slate-600">{modules[0].description}</p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              {modules[0].links?.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors group"
                >
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                    {link.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">{link.name}</div>
                    <div className="text-xs text-slate-500">Ver vagas →</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="border-t pt-4">
              <h4 className="font-semibold text-slate-700 mb-3">Funcionalidades:</h4>
              <div className="flex flex-wrap gap-2">
                {modules[0].features?.map((feature) => (
                  <span key={feature} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Cursos */}
          <section id="cursos" className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-14 h-14 bg-gradient-to-br ${modules[1].color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                <GraduationCapIcon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800">{modules[1].title}</h3>
                <p className="text-slate-600">{modules[1].description}</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              {modules[1].links?.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-2 p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors group text-center"
                >
                  <div className="w-12 h-12 mx-auto bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                    {link.name[0]}
                  </div>
                  <div className="font-semibold text-slate-800 text-sm">{link.name}</div>
                  <div className="text-xs text-slate-500">Acessar →</div>
                </a>
              ))}
            </div>

            <div className="border-t pt-4">
              <h4 className="font-semibold text-slate-700 mb-3">Cursos Recomendados:</h4>
              <div className="flex flex-wrap gap-2">
                {modules[1].features?.map((feature) => (
                  <span key={feature} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Cidadania */}
          <section id="cidadania" className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-14 h-14 bg-gradient-to-br ${modules[2].color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                <HeartHandshakeIcon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800">{modules[2].title}</h3>
                <p className="text-slate-600">{modules[2].description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {modules[2].services?.map((service) => (
                <div key={service.category} className="bg-blue-50 p-5 rounded-lg">
                  <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    {service.category}
                  </h4>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="text-slate-700 text-sm flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Denúncias */}
          <section id="denuncias" className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow border-2 border-red-200">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-14 h-14 bg-gradient-to-br ${modules[3].color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                <ShieldAlertIcon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800">{modules[3].title}</h3>
                <p className="text-slate-600">{modules[3].description}</p>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <AlertCircleIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-slate-700">
                  <strong>Sua segurança é prioridade.</strong> Todos os canais abaixo são anônimos e seguros. 
                  Você não precisa se identificar para fazer uma denúncia ou pedir ajuda.
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {modules[3].emergency?.map((contact) => (
                <a
                  key={contact.name}
                  href={`tel:${contact.phone}`}
                  className="flex items-center justify-between p-4 bg-red-50 hover:bg-red-100 rounded-lg transition-colors group border border-red-200"
                >
                  <div>
                    <div className="font-semibold text-slate-800">{contact.name}</div>
                    <div className="text-2xl font-bold text-red-600 mt-1">{contact.phone}</div>
                  </div>
                  <PhoneIcon className="w-6 h-6 text-red-600 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </section>

          {/* Economia Local */}
          <section id="economia" className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-14 h-14 bg-gradient-to-br ${modules[4].color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                <StoreIcon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800">{modules[4].title}</h3>
                <p className="text-slate-600">{modules[4].description}</p>
              </div>
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-slate-700">
                  <strong>Em breve:</strong> Mapa interativo com negócios e profissionais da comunidade. 
                  Você poderá divulgar seu trabalho e encontrar serviços próximos de você.
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {modules[4].categories?.map((category) => (
                <div key={category} className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                  <div className="font-semibold text-slate-800 text-center">{category}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Community Dream Section */}
        <section className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl shadow-2xl p-8 sm:p-12 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">O Sonho da Comunidade</h3>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-95">
            "Viver com dignidade, segurança, oportunidades e liberdade — sem medo."
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              "Jovens têm futuro",
              "Adultos encontram emprego",
              "Mães trabalham sem medo",
              "Idosos têm assistência",
              "Trabalhadores independentes",
              "Comunidade caminha segura",
            ].map((dream) => (
              <div key={dream} className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                <p className="font-semibold">{dream}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Auxilia Jacaré</h4>
              <p className="text-slate-400 text-sm">
                Plataforma social digital gratuita criada para atender às necessidades da comunidade do Jacarezinho.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Canais de Emergência</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="tel:100" className="text-slate-400 hover:text-white transition-colors">Disque 100 - Direitos Humanos</a></li>
                <li><a href="tel:180" className="text-slate-400 hover:text-white transition-colors">Disque 180 - Violência contra Mulher</a></li>
                <li><a href="tel:188" className="text-slate-400 hover:text-white transition-colors">CVV 188 - Apoio Emocional</a></li>
                <li><a href="tel:192" className="text-slate-400 hover:text-white transition-colors">SAMU 192 - Emergência Médica</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Acesso Rápido</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#empregos" className="text-slate-400 hover:text-white transition-colors">Trampo do Jacaré</a></li>
                <li><a href="#cursos" className="text-slate-400 hover:text-white transition-colors">Aprende Jacaré</a></li>
                <li><a href="#cidadania" className="text-slate-400 hover:text-white transition-colors">Cidadania no Jacaré</a></li>
                <li><a href="#denuncias" className="text-slate-400 hover:text-white transition-colors">Denúncias Seguras</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>© 2024 Auxilia Jacaré. Uma plataforma para a comunidade do Jacarezinho.</p>
            <p className="mt-2">Construindo um futuro com dignidade, segurança e oportunidades para todos.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App