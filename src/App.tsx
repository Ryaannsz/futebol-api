import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useLeguesData } from "./hooks/useLeaguesData";

function App() {
  const { data: leagues, isLoading, error } = useLeguesData();

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar os dados.</p>;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      <Header />


      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
       


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leagues.map((league: any) => (
              <div
                key={league.id}
                className="group relative bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-2 overflow-hidden border border-white/30"
              >
                {/* Efeito de brilho ajustado */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-300 bg-gradient-to-r from-blue-400/30 to-purple-400/30" />

                <div className="relative z-10">
                  {/* Container do logo ajustado */}
                  <div className="w-24 h-24 mx-auto mb-4 p-2 bg-gray-100/80 rounded-full shadow-sm border border-gray-200/50">
                    <img
                      src={league.image_path}
                      alt={`Logo da ${league.name}`}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 filter drop-shadow-sm"
                    />
                  </div>

     
                  <h3 className="text-xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                    {league.name}
                  </h3>
                  <div className="space-y-1 mt-3 text-gray-700"> {/* Texto mais escuro */}
                    <p className="text-sm">
                      <span className="font-medium text-gray-900">Código:</span> {league.short_code}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium text-gray-900">Esporte:</span> {league.sport.name}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium text-gray-900">Último Jogo:</span>{" "}
                      {new Date(league.last_played_at).toLocaleDateString()}
                    </p>
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

export default App;
