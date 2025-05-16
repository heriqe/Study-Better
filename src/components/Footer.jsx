export default function Footer() {
    const footerSections = [
      {
        title: "Study Better",
        links: [
          { name: "Sobre nós", href: "#" },
          { name: "Carreiras", href: "#" },
          { name: "Blog", href: "#" },
          { name: "Imprensa", href: "#" },
        ],
      },
      {
        title: "Recursos",
        links: [
          { name: "Matérias", href: "#" },
          { name: "Simulados", href: "#" },
          { name: "Plano de Estudos", href: "#" },
          { name: "Aplicativo", href: "#" },
        ],
      },
      {
        title: "Suporte",
        links: [
          { name: "Central de Ajuda", href: "#" },
          { name: "Termos de Uso", href: "#" },
          { name: "Política de Privacidade", href: "#" },
          { name: "Contato", href: "#" },
        ],
      },
    ]
  
    return (
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">{section.title}</h3>
                <ul className="mt-4 space-y-4">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href={link.href} className="text-base text-gray-300 hover:text-white">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Redes Sociais</h3>
              <div className="mt-4 flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Baixe nosso app</h4>
                <div className="mt-4 flex space-x-4">
                  <a href="#" className="flex items-center justify-center w-32 h-10 bg-black rounded-md">
                    <i className="fab fa-apple text-white mr-2"></i>
                    <span className="text-white text-xs">App Store</span>
                  </a>
                  <a href="#" className="flex items-center justify-center w-32 h-10 bg-black rounded-md">
                    <i className="fab fa-google-play text-white mr-2"></i>
                    <span className="text-white text-xs">Play Store</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 text-center">
              © 2023 Study Better. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    )
  }