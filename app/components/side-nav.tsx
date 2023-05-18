import {Sidebar, SidebarProps} from 'flowbite-react'
import { useState } from 'react';
import { Routes } from '~/constants/routes'

export default function SideNavPage(content: JSX.Element) {
  const [input, setInput] = useState(content.props?.value ?? '');
  // const changeTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.currentTarget.value === 'dark') {
  //     console.log(input);
  //     document.documentElement.classList.add('dark')
  //   } else {
  //     console.log(input);
  //     document.documentElement.classList.remove('dark')
  //   }
  // }


  return (
    <main className='flex h-full'>
      <Sidebar className='h-full'>
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="h-full space-y-2 font-medium">
            <li>
                <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                  <span className="ml-3">Entrance</span>
                </a>
            </li>
            <li>
                <a href="/about" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                  <span className="ml-3">About</span>
                </a>
            </li>
            <li>
                <a href={Routes.project} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Projects</span>
                </a>
            </li>
            <li>
                <a href={Routes.techstack} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="800px" width="800px" version="1.1" id="Layer_1" viewBox="0 0 512 512" xmlSpace="preserve">
                  <g transform="translate(1 1)"><g><g>
                        <path d="M472.6,7.533H37.4C16.067,7.533-1,24.6-1,45.933v277.333v38.4c0,21.333,17.067,38.4,38.4,38.4h152.157     c1.209,14.852-5.492,29.407-17.331,37.547l-15.36,11.093c-1.583,0.95-2.811,2.253-3.646,3.733     c-10.439,3.21-17.687,12.702-17.687,24.427c0,14.507,11.093,25.6,25.6,25.6h187.733c14.507,0,25.6-11.093,25.6-25.6     c0-12.351-8.044-22.223-19.388-24.885c-0.726-1.289-1.666-2.425-2.799-3.275l-15.36-11.093     c-12.057-8.289-18.113-22.568-17.016-37.547H472.6c21.333,0,38.4-17.067,38.4-38.4v-38.4V45.933     C511,24.6,493.933,7.533,472.6,7.533z M16.067,45.933c0-11.947,9.387-21.333,21.333-21.333h435.2     c11.947,0,21.333,9.387,21.333,21.333V306.2H16.067V45.933z M348.867,485.4H161.133c-5.12,0-8.533-3.413-8.533-8.533     s3.413-8.533,8.533-8.533h1.707h184.32h1.707c5.12,0,8.533,3.413,8.533,8.533S353.987,485.4,348.867,485.4z M325.827,451.267     H183.32c16.213-11.947,24.747-31.573,23.893-51.2h95.573C301.08,419.693,310.467,439.32,325.827,451.267z M493.933,361.667     c0,11.947-9.387,21.333-21.333,21.333H326.68h-140.8H37.4c-11.947,0-21.333-9.387-21.333-21.333v-38.4h477.867V361.667z"/>
                        <path d="M147.48,169.667l62.293-62.293c3.413-3.413,3.413-8.533,0-11.947s-8.533-3.413-11.947,0l-68.267,68.267     c-2.56,2.56-3.413,5.973-1.707,9.387c0.853,1.707,1.707,2.56,2.56,3.413l67.413,67.413c1.707,1.707,3.413,2.56,5.973,2.56     s4.267-0.853,5.973-2.56c3.413-3.413,3.413-8.533,0-11.947L147.48,169.667z"/>
                        <path d="M379.587,162.84l-67.413-67.413c-3.413-3.413-8.533-3.413-11.947,0s-3.413,8.533,0,11.947l62.293,62.293l-62.293,62.293     c-3.413,3.413-3.413,8.533,0,11.947c1.707,1.707,3.413,2.56,5.973,2.56s4.267-0.853,5.973-2.56l68.267-68.267     c2.56-2.56,3.413-5.973,1.707-9.387C381.293,164.547,380.44,163.693,379.587,162.84z"/>
                        <path d="M274.627,93.72c-4.267-1.707-9.387,1.707-10.24,5.973l-34.133,136.533c-1.707,4.267,1.707,9.387,5.973,10.24     c0,0,0.853,0,1.707,0c4.267,0,7.68-2.56,8.533-5.973L280.6,103.96C282.307,99.693,278.893,94.573,274.627,93.72z"/>
                    </g></g></g>
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Tech stack</span>
                </a>
            </li>
            <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 justify between">
              <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 0 24 24" version="1.1">
                {/*Moon*/}
                  <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="ic_fluent_dark_theme_24_regular" fill="#212121" fill-rule="nonzero">
                          <path d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20.5 L12,3.5 C16.6944204,3.5 20.5,7.30557963 20.5,12 C20.5,16.6944204 16.6944204,20.5 12,20.5 Z" id="🎨-Color">
                          </path>
                      </g></g>
              </svg>
              <label className="relative inline-flex items-center cursor-pointer ml-3">
                <input type="checkbox" value={input}  className="sr-only peer"/>
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </li>
          </ul>
        </div>

      </Sidebar>
      <div className='grow w-max h-full'>
        {content}
      </div>
    </main>
  )
}