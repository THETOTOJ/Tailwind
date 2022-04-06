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
                <li className='h-16 relative '>
                    <span className='text-2xl ml-3 text-blue-400 absolute bottom-0 top-1/4	'>SaaS&nbsp;Kit</span>
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
                    <a className='selected flex items-center p-2 text-sm font-bold'>
                        <span className='ml-3'>
                        {element}
                        </span>
                        <span className='ml-5'>
                        Dashboard
                        </span>
                    </a> 
                </li>
                <li>
                    <a className='flex items-center p-2 text-base text-sm font-bold'>
                        <span className='ml-3'>
                            {element}
                        </span>
                        <span className='ml-5'>
                        Tasks
                        </span>
                    </a> 
                </li>
                <li>
                    <a className='flex items-center p-2 text-base text-sm font-bold'>
                        <span className='ml-3'>
                            {element}
                        </span>
                        <span className='ml-5'>
                        Email
                        </span>
                    </a> 
                </li>
                <li>
                    <a className='flex items-center p-2 text-base text-sm font-bold'>
                        <span className='ml-3'>
                            {element}
                        </span>
                        <span className='ml-5'>
                        Contacts
                        </span>
                    </a> 
                </li>
                <li>
                    <a className='flex items-center p-2 text-base text-sm font-bold'>
                        <span className='ml-3'>
                            {element}
                        </span>
                        <span className='ml-5'>
                        Chat
                        </span>
                    </a> 
                </li>
                <li>
                    <a className='flex items-center p-2 text-base text-sm font-bold'>
                        <span className='ml-3'>
                            {element}
                        </span>
                        <span className='ml-5'>
                        Deals
                        </span>
                    </a> 
                </li>
                <hr></hr>
                <li>
                    <a className='flex items-center p-2 text-base text-sm font-bold'>
                        <span className='ml-3'>
                            {element}
                        </span>
                        <span className='ml-5'>
                        Settings
                        </span>
                    </a> 
                </li>
            </ul>
        </div>
    </aside>
    </> 
    </div>
  );
}
