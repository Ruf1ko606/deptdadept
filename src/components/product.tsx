export function Product() {
  return (
    <section className="py-20 px-4 border-b border-white/10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
           {[1, 2, 3].map((i) => (
             <div key={i} className="p-8 border border-white/10 rounded-xl hover:bg-zinc-900 transition-colors text-left">
               <h3 className="text-2xl font-bold mb-4">Plan {i}</h3>
               <p className="text-gray-400 mb-8">Access to analytics...</p>
               <button className="w-full py-3 bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors">
                 Select
               </button>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}

