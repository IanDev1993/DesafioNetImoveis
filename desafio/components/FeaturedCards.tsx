export function FeaturedCards() {
    return (
      <section className="py-10">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center">Destaques</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white shadow-md rounded-lg p-4">
              <img src="/placeholder.jpg" alt="Lugar 1" className="rounded-md" />
              <h3 className="mt-2 font-semibold">Lugar 1</h3>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <img src="/placeholder.jpg" alt="Lugar 2" className="rounded-md" />
              <h3 className="mt-2 font-semibold">Lugar 2</h3>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <img src="/placeholder.jpg" alt="Lugar 3" className="rounded-md" />
              <h3 className="mt-2 font-semibold">Lugar 3</h3>
            </div>
          </div>
        </div>
      </section>
    );
  }