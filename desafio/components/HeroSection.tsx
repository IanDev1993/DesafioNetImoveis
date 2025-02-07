import SearchBar from "./SearchBar";

export function HeroSection() {
    return (
      <section className="bg-gray-100 py-20 flex flex-col items-center justify-center text-center min-h-screen">
          <div className="container mx-auto px-6 mt-16 flex flex-col items-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Vende. Aluga. Conecta.</h1>
            <SearchBar />
          </div>
      </section>
    );
}
