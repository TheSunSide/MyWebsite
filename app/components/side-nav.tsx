import { Link } from '@remix-run/react';
import clsx from 'clsx';
import type { SidebarProps} from 'flowbite-react';
import { Sidebar } from 'flowbite-react'
import React from 'react';
import { Routes } from '~/constants/routes'
import { Language, useLang } from '~/utils/lang-provider';
import { Theme, useTheme } from '~/utils/theme-provider';
//import { Theme, useTheme } from '~/utils/theme-provider';
export default function SideNavPage({children}: {children: JSX.Element}) {
  const [theme, setTheme] = useTheme();
  const [lang, setLang] = useLang();
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
    console.log("toggleTheme");
  };

  const toggleLang = () => {
    setLang((prevLang) => (prevLang === Language.EN ? Language.FR : Language.EN));
  };

 const sidebarTheme: SidebarProps["theme"] = {
    "root": {
      "base": "h-full",
      "collapsed": {
        "on": "w-16",
        "off": "w-64"
      },
      "inner": "h-full overflow-y-auto overflow-x-hidden rounded bg-gray-100 py-4 px-3 dark:bg-gray-800"
    },
    "collapse": {
      "button": "group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
      "icon": {
        "base": "h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
        "open": {
          "off": "",
          "on": "text-gray-900"
        }
      },
      "label": {
        "base": "ml-3 flex-1 whitespace-nowrap text-left",
        "icon": "h-6 w-6"
      },
      "list": "space-y-2 py-2"
    },
    "cta": {
      "base": "mt-6 rounded-lg p-4 bg-gray-100 dark:bg-gray-700",
      "color": {
        "blue": "bg-cyan-50 dark:bg-cyan-900",
        "dark": "bg-dark-50 dark:bg-dark-900",
        "failure": "bg-red-50 dark:bg-red-900",
        "gray": "bg-alternative-50 dark:bg-alternative-900",
        "green": "bg-green-50 dark:bg-green-900",
        "light": "bg-light-50 dark:bg-light-900",
        "red": "bg-red-50 dark:bg-red-900",
        "purple": "bg-purple-50 dark:bg-purple-900",
        "success": "bg-green-50 dark:bg-green-900",
        "yellow": "bg-yellow-50 dark:bg-yellow-900",
        "warning": "bg-yellow-50 dark:bg-yellow-900"
      }
    },
    "item": {
      "base": "flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
      "active": "bg-gray-100 dark:bg-gray-700",
      "collapsed": {
        "insideCollapse": "group w-full pl-8 transition duration-75",
        "noIcon": "font-bold"
      },
      "content": {
        "base": "px-3 flex-1 whitespace-nowrap"
      },
      "icon": {
        "base": "h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
        "active": "text-gray-700 dark:text-gray-100"
      },
      "label": "",
    },
    "items": "",
    "itemGroup": "mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700",
  } 

  return (
    <main className='flex h-full '>
      <Sidebar theme={sidebarTheme} className={clsx(isCollapsed ? 'hidden' : 'h-full dark:bg-gray-800')} >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-100 dark:bg-gray-800">
          <ul className="h-full space-y-2 font-medium">
            <li>
                <Link to="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                  <span className="ml-3">{lang===Language.EN?"Entrance":"Entrée"}</span>
                </Link>
            </li>
            <li>
                <Link to={Routes.project} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">{lang===Language.EN?"Projects":"Projets"}</span>
                </Link>
            </li>
            <li>
                <Link to={Routes.techStack} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                  <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="800px" width="800px" version="1.1" id="Layer_1" viewBox="0 0 512 512" xmlSpace="preserve">
                    <g transform="translate(1 1)"><g><g>
                        <path d="M472.6,7.533H37.4C16.067,7.533-1,24.6-1,45.933v277.333v38.4c0,21.333,17.067,38.4,38.4,38.4h152.157     c1.209,14.852-5.492,29.407-17.331,37.547l-15.36,11.093c-1.583,0.95-2.811,2.253-3.646,3.733     c-10.439,3.21-17.687,12.702-17.687,24.427c0,14.507,11.093,25.6,25.6,25.6h187.733c14.507,0,25.6-11.093,25.6-25.6     c0-12.351-8.044-22.223-19.388-24.885c-0.726-1.289-1.666-2.425-2.799-3.275l-15.36-11.093     c-12.057-8.289-18.113-22.568-17.016-37.547H472.6c21.333,0,38.4-17.067,38.4-38.4v-38.4V45.933     C511,24.6,493.933,7.533,472.6,7.533z M16.067,45.933c0-11.947,9.387-21.333,21.333-21.333h435.2     c11.947,0,21.333,9.387,21.333,21.333V306.2H16.067V45.933z M348.867,485.4H161.133c-5.12,0-8.533-3.413-8.533-8.533     s3.413-8.533,8.533-8.533h1.707h184.32h1.707c5.12,0,8.533,3.413,8.533,8.533S353.987,485.4,348.867,485.4z M325.827,451.267     H183.32c16.213-11.947,24.747-31.573,23.893-51.2h95.573C301.08,419.693,310.467,439.32,325.827,451.267z M493.933,361.667     c0,11.947-9.387,21.333-21.333,21.333H326.68h-140.8H37.4c-11.947,0-21.333-9.387-21.333-21.333v-38.4h477.867V361.667z"/>
                        <path d="M147.48,169.667l62.293-62.293c3.413-3.413,3.413-8.533,0-11.947s-8.533-3.413-11.947,0l-68.267,68.267     c-2.56,2.56-3.413,5.973-1.707,9.387c0.853,1.707,1.707,2.56,2.56,3.413l67.413,67.413c1.707,1.707,3.413,2.56,5.973,2.56     s4.267-0.853,5.973-2.56c3.413-3.413,3.413-8.533,0-11.947L147.48,169.667z"/>
                        <path d="M379.587,162.84l-67.413-67.413c-3.413-3.413-8.533-3.413-11.947,0s-3.413,8.533,0,11.947l62.293,62.293l-62.293,62.293     c-3.413,3.413-3.413,8.533,0,11.947c1.707,1.707,3.413,2.56,5.973,2.56s4.267-0.853,5.973-2.56l68.267-68.267     c2.56-2.56,3.413-5.973,1.707-9.387C381.293,164.547,380.44,163.693,379.587,162.84z"/>
                        <path d="M274.627,93.72c-4.267-1.707-9.387,1.707-10.24,5.973l-34.133,136.533c-1.707,4.267,1.707,9.387,5.973,10.24     c0,0,0.853,0,1.707,0c4.267,0,7.68-2.56,8.533-5.973L280.6,103.96C282.307,99.693,278.893,94.573,274.627,93.72z"/>
                    </g></g></g>
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">{lang===Language.EN?"Tech stack":"Pile technologique"}</span>
                </Link>
            </li>
            <li>
                <Link to="/about" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                  <span className="ml-3">{lang===Language.EN?"About":"À propos"}</span>
                </Link>
            </li>
            <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 justify between">
              <svg className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 0 24 24" version="1.1">
                {/*Moon*/}
                  <g id="🔍-Product-Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="ic_fluent_dark_theme_24_regular" fill="currentColor" fillRule="nonzero">
                          <path d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20.5 L12,3.5 C16.6944204,3.5 20.5,7.30557963 20.5,12 C20.5,16.6944204 16.6944204,20.5 12,20.5 Z" id="🎨-Color">
                          </path>
                      </g></g>
              </svg>
              <label className="relative inline-flex items-center cursor-pointer ml-3">
                <input type="checkbox" checked={theme === Theme.DARK} onChange={toggleTheme} className="sr-only peer"/>
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </li>
            <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 justify between">
              <span className='w-6'>
                FR
              </span>
              <span>
                <label className="relative inline-flex items-center cursor-pointer ml-3">
                  <input type="checkbox" checked={lang === Language.EN} onChange={toggleLang} className="sr-only peer"/>
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </span>
              <span className='ml-3'>
                EN
              </span>
            </li>
          </ul>
        </div>

      </Sidebar>
      <div className='grow w-max h-full'>
        <button className= {clsx(isCollapsed?"rotate-180 ":"") + "z-10 fixed flex m-2 py-2 px-3 text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}  onClick={() => setIsCollapsed(!isCollapsed)}>
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor" height="20px" width="20px" version="1.1" id="Layer_1" viewBox="0 0 476.213 476.213" xmlSpace="preserve">
            <polygon points="476.213,223.107 57.427,223.107 151.82,128.713 130.607,107.5 0,238.106 130.607,368.714 151.82,347.5   57.427,253.107 476.213,253.107 "/>
          </svg>
        </button>
        {children}
      </div>
    </main>
  )
}