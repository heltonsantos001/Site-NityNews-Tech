import "./LetterStyle.css"
import "./OutputStyle.css"

export function Letter(){
    return(
        
        <div class="card">
          <div
            class="relative bg-[#024385] w-[300px] sm:w-[350px] group transition-all duration-700 aspect-video flex items-center justify-center"
          >
            <div
              class="folha transition-all flex flex-col items-center py-5 justify-start duration-300 group-hover:duration-1000 bg-white w-full h-full absolute group-hover:-translate-y-16"
            >
              <p class="text-xl sm:text-2xl font-semibold text-white font-serif">
                Obrigado
              </p>
              <p class="textLetter px-10 text-[15px] sm:text-[10px] text-white">
                  Por escolher a NityNews Tech!
              </p>
              <p class="textLetter px-10 text-[10px] sm:text-[9px] text-white">
              Seja bem-vindo
              </p>
              <p class="font-sans text-[10px] text-white pt-5">ass: Nity</p>
            </div>
            <button
              class="seal bg-rose-500 text-red-800 w-10 aspect-square rounded-full z-40 text-[10px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-rose-900"
            >
              NNT
            </button>
            <div
              class=" latterFolha tp transition-all duration-1000 group-hover:duration-100  absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]"
            ></div>
            <div
              class="latterFolha lft transition-all duration-700 absolute w-full h-full [clip-path:polygon(50%_50%,_0_0,_0_100%)]"
            ></div>
            <div
              class="latterFolha rgt transition-all duration-700 absolute w-full h-full  [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"
            ></div>
            <div
              class="latterFolha btm transition-all duration-700 absolute w-full h-full bg-[#024385] [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"
            ></div>
          </div>
        </div>
    )
}
