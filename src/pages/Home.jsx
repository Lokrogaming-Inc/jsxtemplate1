import Hero from "../components/Hero";
import Ticker from "../components/Ticker";
import Divider from "../components/Divider";
import trusted from "../data/json/trusted.json";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
<p className="text-center mb-7 p-4 text-2xl text-white font-bold border-b border-black">People Who Trust Us</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trusted.map((person) => {
          
          return (
            <div 
            key={person.id}
            className="relative"
            >
  <div className="absolute inset-x-0 h-6 -right-6 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 blur-xl opacity-60"></div>
            <div className="bg-slate-800 p-6 rounded-2xl">
              <h3 className="text-white font-bold text-xl">
                {person.name}
              </h3>

              <p className="text-slate-400 mt-3">
              {person.description}
              </p>
            </div>
          </div>
          
        )}

      )};
            

          </div>
        </div>
      </section>
       <Divider />
      <section className="my-10 mx-3 flex flex-col items-center">
       <p className="mb-7 text-2xl font-bold text-white">Our Services</p>
<div className="grid gris-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
      {/* list-none [COPY THIS DESIGN AND PASTE IT FOR ALL YOUR CARDS]*/}
      <div className="w-90 lg:w-280 border border-black rounded-xl p-5 bg-black transition-transform duration-300 ease-in-out hover:scale-103 hover:-translate-y-1 "> 

        <div className="p-3 my-2">
<p className="text-indigo-700 border-b border-grey-300 text-2xl font-bold hover:border-white transition-transform duration-300 ease-in-out p-5">Service Title</p>
          </div>

       <ul className="list-none flex flex-col mx-5 my-7 text-white gap-5 items-center">

<li><p className="text—xl font-bold text-white">Add your service here</p></li>
<li><p className="text-lg font-bold">Example Item</p></li>
         </ul>
       </div>
        {/* list-disc [COPY THIS DESIGN AND PASTE IT FOR ALL YOUR CARDS]*/}
       <div className="w-90 lg:w-280 border border-black rounded-xl p-5 bg-black transition-transform duration-300 ease-in-out hover:scale-103 hover:-translate-y-1 "> 

        <div className="p-3 my-2">
<p className="text-indigo-700 border-b border-grey-300 text-2xl font-bold hover:border-white transition-transform duration-300 ease-in-out p-5">Service Title</p>
          </div>

       <ul className="list-disc flex flex-col mx-5 my-7 text-white gap-5 items-center">

<li><p className="text—xl font-bold text-white">Add your service here</p></li>
<li><p className="text-lg font-bold">Example Item</p></li>
         </ul>
       </div>

       {/* list-decimal [COPY THIS DESIGN AND PASTE IT FOR ALL YOUR CARDS]*/}
       <div className="w-90 lg:w-280 border border-black rounded-xl p-5 bg-black transition-transform duration-300 ease-in-out hover:scale-103 hover:-translate-y-1 "> 

        <div className="p-3 my-2">
<p className="text-indigo-700 border-b border-grey-300 text-2xl font-bold hover:border-white transition-transform duration-300 ease-in-out p-5">Service Title</p>
          </div>

       <ul className="list-decimal flex flex-col mx-5 my-7 text-white gap-5 items-center">

<li><p className="text—xl font-bold text-white">Add your service here</p></li>
<li><p className="text-lg font-bold">Example Item</p></li>
         </ul>
       </div>

       
</div>
      </section>
    </>
  );
}
