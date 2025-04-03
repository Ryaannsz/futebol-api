// components/PlayerResults.tsx
import { useParams, useNavigate } from 'react-router-dom';
import { usePlayerFinderData } from '../hooks/usePlayerFinderData';
import Header from '../components/Header';
import Footer from '../components/Footer';

function PlayerResults() {
  const { searchTerm } = useParams<{ searchTerm: string }>();
  const navigate = useNavigate();
  const { data: result, isLoading, error } = usePlayerFinderData(searchTerm || '');

  const calculateAge = (dateString: string) => {
    const birthDate = new Date(dateString);
    const diff = Date.now() - birthDate.getTime();
    return Math.abs(new Date(diff).getUTCFullYear() - 1970);
  };

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro ao carregar</div>;


  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Resultados para: <span className="text-blue-600">{decodeURIComponent(searchTerm || '')}</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {result.map((player: any) => (
              <div 
                key={player.id}
                onClick={() => navigate(`/player/${player.id}`)}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-center">
                    <img 
                      src={player.image_path} 
                      alt={player.common_name} 
                      className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/default-player.png';
                      }}
                    />
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-800">{player.common_name}</h3>
                    <p className="text-gray-600">{player.name}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-gray-50 p-2 rounded-lg text-center">
                      <p className="text-gray-600 font-medium">Idade</p>
                      <p className="text-gray-800">{calculateAge(player.date_of_birth)} anos</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded-lg text-center">
                      <p className="text-gray-600 font-medium">Altura</p>
                      <p className="text-gray-800">{player.height ? `${player.height} cm` : '--'}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default PlayerResults;