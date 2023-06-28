import { Routes } from "~/constants/routes";
import type { TechnologiesUsed } from "~/types/libraries";

function renderStars(num: number, key: string) {
  const container = []
  for(let i = 0; i < num; ++i) {
    container.push((<svg key={key+i} aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    ))
  }
  for(let i = num; i < 5; ++i) {
    container.push((
    <svg key={key+i} aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    ))
  }
  return <div className="flex items-center mb-5"> {container} </div>
}


export const techComponent = (tech: TechnologiesUsed) => (
  <li key={tech.alt} className="py-2 h-full">
    <a href={Routes.specificTech(tech.alt)} className="px-2 py-2 h-full flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
      <img className="object-cover w-full h-auto md:w-24 sm:w-12" src={tech.src} alt=""/>
      <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{tech.alt}</h5>
          {/* <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              </div> */}
          {renderStars(tech.knownLevel, tech.alt)}
      </div>
    </a>
  </li>
);
