function Header (){
    return (
        <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-4 shadow-xl">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <span className="animate-pulse text-3xl">⚽</span>
          <h1 className="text-3xl font-bold">Esports Estatísticas</h1>
        </a>
        <nav className="mt-4 md:mt-0">
          <ul className="flex gap-6">
            <li>
              <a href="/" className="hover:underline">
                Início
              </a>
            </li>
            <li>
              <a href="/playerfinder" className="hover:underline">
                Pesquisar
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    )
}

export default Header