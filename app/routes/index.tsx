import type { LinksFunction } from "@remix-run/cloudflare";
import { SocialIcon } from "react-social-icons";
import imageSunnee from "~/assets/sunnee.jpg"
import { Language, useLang } from "~/utils/lang-provider";

export const links: LinksFunction = () => {
  return [
    { rel: "preload", href: imageSunnee, as: "image" },

  ];
};

export default function Index() {
  const [lang] = useLang();
  return (
      <div className="h-full overflow-y-auto">
          <h1 className="pt-8 text-center text-5xl font-extrabold uppercase tracking-tight dark:text-purple-500 text-purple-700 drop-shadow-md">
            Sunnee Chevalier's Website
          </h1>
          <section className="mt-4 flex flex-col justify-center items-center">
            <img src={imageSunnee} alt="My face" className="w-64 h-auto rounded-md"></img>
            <ul className="mt-4 mb-8 space-y-4 text-left text-gray-500 dark:text-black px-2 py-2 items-center bg-white border border-gray-200 dark:bg-gray-100 rounded-lg">
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span>
                  {lang === Language.EN?"4th year Student at Polytechnique Montreal, in Software Engineering":"Étudiant de 4e année à Polytechnique Montréal, en Génie Logiciel"}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span>
                  {lang === Language.EN?"Teaching Assistant for the course INF1900 - Introduction to embedded systems":"Chargé des travaux pratiques pour le cours INF1900 - Introduction aux systèmes embarqués"}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span>
                {lang === Language.EN?"Vice president of the treasury for the student committee of Software Engineering at PolyMtl":"Vice-président aux finances du comité étudiant de Génie Logiciel à PolyMtl"}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span>
                {lang === Language.EN?"Vice president of technology for the CSGames 2024 for Polytechnique Montreal's team(s)":"Vice-président aux technologies pour les CSGames 2024 pour l'équipe de Polytechnique Montréal"}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span>
                {lang === Language.EN?"Delegate of Polytechnique Montreal's team for the Quebec Engineering Games":"Délegué de l'équipe de Polytechnique Montréal pour les Jeux de Génie du Québec"}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span>
                {lang === Language.EN?"Delegate of Polytechnique Montreal's team for the Quebec Engineering Competition (QEC)":"Délegué de l'équipe de Polytechnique Montréal pour la Compétition Québécoise d'Ingénierie (CQI)"}
                </span>
              </li>
            </ul>
          </section>

          <section className="mt-4 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold uppercase tracking-tight dark:text-purple-500 text-purple-700 drop-shadow-md">
              Contact / Socials
            </h2>
            <div className="flex align-center mt-4 gap-x-2 text-left text-gray-500 dark:text-black px-2 py-2 items-center bg-white border border-gray-200 dark:bg-gray-100 rounded-lg">
                <SocialIcon url="mailto:sunnee17@me.com"/>
                <SocialIcon url="https://www.linkedin.com/in/sunnee-c/"/>
                <SocialIcon url="https://github.com/TheSunSide"/>
            </div>
          </section>
      </div>
  );
}