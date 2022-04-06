import React from 'react';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default function List() {
    return (
      <div className='flex'>
        <ul>
          <li>
            <input type="checkbox"></input>
          </li>
          <li>
            <img className='h-12 rounded-full ml-3' src='https://randomuser.me/api/portraits/women/18.jpg' alt=''></img>
          </li>
          <li>
            <h2 className="text-3xl">
              Lindsey Stroud
            </h2>
          </li>
          <li>
            <h2 className="text-3xl">
            lindsey.stroud@gmail.com
            </h2>
        </li>
          <li>
            <h2 className="text-3xl">
            Hatchbuck
            </h2>
          </li>
          <li>
            <h2 className="text-3xl">
            Manager
            </h2>
          </li>
          <li>
            <h2 className="text-3xl">
            50%
            </h2>
          </li>
          <li>
            <h2 className="text-3xl">
            5 Minutes ago
            </h2>
          </li>
        </ul>
      </div>
    )
  }