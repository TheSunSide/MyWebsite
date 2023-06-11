import { useNavigate } from "@remix-run/react";
import SideNavPage from "~/components/side-nav";
import { Routes } from "~/constants/routes";

export default function Index() {
  return (
      <div className="h-full dark:border-gray-300 dark:bg-gray-300">
          <h1 className="pt-8 text-center text-5xl font-extrabold uppercase tracking-tight text-purple-500 text-purple-700 drop-shadow-md">
            Sunnee Chevalier's Website
          </h1>
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
