import { LaptopMinimalCheck } from 'lucide-react';

export default function Success() {
  return(
      <div className="flex flex-col justify-center items-center">

              <div className="text-green-400">
                <LaptopMinimalCheck size={64} />
              </div>

               <p className="text-4xl font-bold text-green-400">Success!</p>

                  

</div>


);
}
