export default function Nav({ user, onLoginClick }) {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <i className="fas fa-brain text-indigo-600 text-2xl mr-2"></i>
            <span className="text-xl font-bold text-indigo-600">Study Better</span>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a href="#" className="text-sm text-gray-700 hover:text-indigo-600">Início</a>
              <a href="#" className="text-sm text-gray-700 hover:text-indigo-600">Matérias</a>
              <a href="#" className="text-sm text-gray-700 hover:text-indigo-600">Simulados</a>
              <a href="#" className="text-sm text-gray-700 hover:text-indigo-600">Plano de Estudos</a>
            </div>
          </div>
          <div className="flex items-center">
            {user ? (
              <span className="text-sm font-medium text-indigo-600">
                Olá, {user.username}
              </span>
            ) : (
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                onClick={onLoginClick}
              >
                Entrar
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
