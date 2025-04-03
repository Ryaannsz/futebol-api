import '../App.css'
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useNavigate } from 'react-router-dom';

function PlayerFinder() {
 
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  
 


  const handleSearch = () => {
    if (searchTerm.trim()) {
        navigate(`/results/${encodeURIComponent(searchTerm.trim())}`);
    }
    
  };

  return (
    <>
     <div className="min-h-screen flex flex-col">
 
      <Header />


      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
        
          <div className="mb-8 space-y-4">
            <h2 className="text-4xl font-bold animate-bounce">
              Explore o Mundo do Futebol!
            </h2>
            <p className="text-lg text-gray-600 animate-pulse">
              Dados em tempo real de ligas de todo o mundo
            </p>
            <div className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent animate-gradient">
              <p className="text-xl font-semibold">
                Powered by Football API
              </p>
            </div>
          </div>

        
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Pesquise times, jogadores ou ligas..."
              className="flex-1 p-4 border-2 border-blue-500 rounded-lg focus:outline-none focus:border-blue-700 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold hover:scale-105 transform"
            >
              Pesquisar
            </button>
          </div>
        </div>
      </main>

   
      <Footer />
    </div>
    </>
  )
}

export default PlayerFinder