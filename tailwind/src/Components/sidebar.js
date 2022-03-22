import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar() {
const element = <FontAwesomeIcon icon={faCoffee} />;

  return (
    <div className='flex'>
    <><aside className='sidebar'>
        <div>
            <ul className='space-y-2'>
                <li>
                    <span className='text-2xl ml-3 text-blue-400'>SaaS Kit</span>
                </li>
                <hr></hr>
                <li>
                    <div className='flex'>
                        <img className='h-12 rounded-full ml-3' src='https://randomuser.me/api/portraits/women/18.jpg'></img>
                        <div className='text-center space-y-2 sm:text-left'>
                            <div className='space-y-0.5'>
                                <p className='text-lg text-black font-semibold'>
                                    Sierra Ferguson
                                </p>
                                <p>
                                    s.ferguson@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <a className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                        <img src={faCoffee} >
                        
                        </img>
                        <span className='ml-3'>{element}
                        Dashboard
                        </span>
                    </a> 
                </li>
                <li>
                    <a className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                        <img src={faCoffee} >
                        
                        </img>
                        <span className='ml-3'>{element}
                        Tasks
                        </span>
                    </a> 
                </li>
                <li>
                    <a className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                        <img src={faCoffee} >
                        
                        </img>
                        <span className='ml-3'>{element}
                        Email
                        </span>
                    </a> 
                </li>
                <li>
                    <a className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                        <img src={faCoffee} >
                        
                        </img>
                        <span className='ml-3'>{element}
                        Contacts
                        </span>
                    </a> 
                </li>
                <li>
                    <a className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                        <img src={faCoffee} >
                        
                        </img>
                        <span className='ml-3'>{element}
                        Chat
                        </span>
                    </a> 
                </li>
                <li>
                    <a className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                        <img src={faCoffee} >
                        
                        </img>
                        <span className='ml-3'>{element}
                        Deals
                        </span>
                    </a> 
                </li>
                <hr></hr>
                <li>
                    <a className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                        <img src={faCoffee} >
                        
                        </img>
                        <span className='ml-3'>{element}
                        Settings
                        </span>
                    </a> 
                </li>
            </ul>
        </div>
    </aside>
    <header className='search'>
        <div className="mt-1 relative rounded-md shadow-sm h-16 flex flex-row justify-between items-center px-8">
            <input type="text" name="search" className="focus:ring-indigo-500 focus:border-indigo-500 block w-11/12 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="Global Search" />
        </div>
    </header></> 
    </div>
  );
}
