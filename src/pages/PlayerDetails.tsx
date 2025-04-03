// components/PlayerDetails.tsx
import { useParams, useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { usePlayerDetailsData } from '../hooks/usePlayerDetails';
import DetailItem from '../components/DetailItem';



function PlayerDetails() {

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data, isLoading, error } = usePlayerDetailsData(id)

  const calculateAge = (dateString: string) => {
    const birthDate = new Date(dateString);
    const diff = Date.now() - birthDate.getTime();
    return Math.abs(new Date(diff).getUTCFullYear() - 1970);
  };

  if (isLoading) return <div>Carregando...</div>;

  if (error) return <div>Erro ao carregar</div>;

  const player = data?.data;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="mb-8 text-blue-600 hover:text-blue-700 flex items-center"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar
          </button>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         
              <div className="md:col-span-1 flex flex-col items-center">
                <img
                  src={player.image_path}
                  alt={player.common_name}
                  className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/default-player.png';
                  }}
                />
                <h1 className="text-2xl font-bold mt-4 text-gray-800">{player.common_name}</h1>
                <p className="text-gray-600">{player.name}</p>
              </div>

           
              <div className="md:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <DetailItem label="Data de Nascimento" value={new Date(player.date_of_birth).toLocaleDateString()} />
                  <DetailItem label="Idade" value={`${calculateAge(player.date_of_birth)} anos`} />
                  <DetailItem label="Altura" value={player.height ? `${player.height} cm` : '--'} />
                  <DetailItem label="Gênero" value={player.gender === 'male' ? 'Masculino' : 'Feminino'} />
                  <DetailItem label="Nacionalidade" value={player.nationality_id} />
                  <DetailItem label="Posição" value={player.position_id} />
                </div>

    
                <div className="mt-8 space-y-2">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Detalhes Adicionais</h3>
                  <DetailItem label="ID do Esporte" value={player.sport_id} />
                  <DetailItem label="ID do País" value={player.country_id} />
                  <DetailItem label="Tipo de Jogador" value={player.type_id} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}




export default PlayerDetails;