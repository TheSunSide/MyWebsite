import { useNavigate } from "@remix-run/react";
import SideNavPage from "~/components/side-nav";
import { Routes } from "~/constants/routes";
import imageSunnee from "~/assets/sunnee.jpg" 
export default function Index() {
  return (
      <div className="h-full dark:border-gray-300 dark:bg-gray-300">
          <h1 className="pt-8 text-center text-5xl font-extrabold uppercase tracking-tight text-purple-500 text-purple-700 drop-shadow-md">
            Sunnee Chevalier's Website
          </h1>
          <section className="mt-4 flex flex-col justify-center items-center">
            <img src={imageSunnee} alt="My face" className="w-64 h-auto"></img>
            <ul className="mt-4 mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400 px-2 py-2 items-center bg-white border border-gray-200 rounded-lg">
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span>
                  4th year Student at Polytechnique Montreal, in Software Engineering
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span>
                  Teaching Assistant for the course INF1900 - Introduction to embedded systems
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span>
                  Vice president of the treasury for the student committee of Software Engineering at PolyMtl
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span>
                  Vice president of logistics for the CSGames 2024 for the Polytechnique Montreal's team(s)
                </span>
              </li>
            </ul>
          </section>
      </div>
  );
}

    // <main className="min-h-screen">
    //   {/* Hero section */}
    //   {/*<section className="grid grid-cols-[1fr] grid-rows-[70vh] sm:m-4 sm:grid-rows-[500px] md:m-8">*/}
    //   <section>
    //     <div className="z-20 col-start-1 col-end-2 row-start-1 row-end-2 mt-8 justify-self-center md:mt-24">
    //       <h1 className="text-center text-5xl font-extrabold uppercase tracking-tight text-purple-500 text-purple-700 drop-shadow-md">
    //         Sunnee Chevalier's Website
    //       </h1>
    //       <section className="mx-auto mt-16 text-center ">
    //         <div className="mx-auto max-w-sm rounded overflow-hidden shadow-lg">
    //           <div className="grid grid-cols-3 gap-2 px-4 py-4">
    //             <a href={Routes.project} className="flex justify-center items-center content-center row-span-2 col-span-1 text-center bg-blue-500 rounded hover:bg-blue-700 text-white font-bold px-8 py-8 whitespace-nowrap">
    //               <span>
    //                 My projects
    //               </span>
    //             </a>
    //             <a href={Routes.techstack} className="flex justify-center items-center content-center col-span-2 text-center bg-blue-500 rounded  hover:bg-blue-700 text-white font-bold px-8 py-8 whitespace-nowrap">
    //               <span>
    //                 Tech stack 
    //               </span>
    //             </a>
    //             <a href={Routes.about} className="flex justify-center items-center content-center col-span-2 bg-transparent hover:bg-blue-500 text-blue-700 font-bold hover:text-white py-8 border border-blue-500 hover:border-transparent rounded whitespace-nowrap">
    //               <span>
    //                 About Me
    //               </span>
    //             </a>
    //           </div>
    //         </div>
    //       </section>
    //     </div>
    //   </section>
    // </main>
