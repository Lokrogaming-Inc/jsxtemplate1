import Hero from "../components/Hero";
import Ticker from "../components/Ticker";
import Divider from "../components/Divider";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
<p className="text-center mb-4 text-2xl text-black font-bold border-b border-black">People Who Trust Us</p>
          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-slate-800 p-6 rounded-2xl">
              <h3 className="text-white font-bold text-xl">
                Lorem Ipsum
              </h3>

              <p className="text-slate-400 mt-3">
              Lorem Ipsum si dolori amet.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl">
              <h3 className="text-white font-bold text-xl">
                Max Mustermann
              </h3>

              <p className="text-slate-400 mt-3">
                Mir gehen die Ideen für Platzhalter aus...
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl">
              <h3 className="text-white font-bold text-xl">
                Etwas Text
              </h3>

              <p className="text-slate-400 mt-3">
                Hier könnte ihre Webung stehen...
              </p>
            </div>

          </div>
        </div>
      </section>
       <Divider />
      <section className="my-10 mx-3 flex flex-col items-center">
       <p className="my-7 text-2xl font-bold text-black">Our Services</p>
<div className="grid gris-cols-1 gap-6">
      <div className="w-[85%] border border-black rounded-xl p-5 bg-black transition-transform duration-300 ease-in-out hover:scale-103 hover:-translate-y-1 "> 

        <div className="p-3 my-2">
<p className="text-yellow-300 border-b border-grey-300 text-2xl font-bold hover:border-white transition-transform duration-300 ease-in-out p-5">Service Title</p>
          </div>
       <ul className="list-disc flex flex-col mx-5 my-7 text-white gap-5">

<li><p className="text—xl font-bold text-black">Add your service here</p></li>
         </ul>
       </div>
</div>
      </section>
    </>
  );
}
