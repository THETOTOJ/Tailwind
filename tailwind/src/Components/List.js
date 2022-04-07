import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBell} from '@fortawesome/free-solid-svg-icons'

export default function List() {
  const element = <FontAwesomeIcon icon={faTrash} />;
  const glass = <FontAwesomeIcon icon={faMagnifyingGlass} />;
  const bell = <FontAwesomeIcon icon={faBell} />;
    return (
<div class= 'content background'>
    <div class=' bg-gray-50 mb-10'>
            <div class="mt-1 relative rounded-md shadow-sm h-16 flex flex-row justify-between items-center px-8">
            <span className="text-gray-300 text-base">{glass}</span>
            <input type="text" name="search" class="mr-10 focus:ring-indigo-500 focus:border-indigo-500 block w-11/12 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="Global Search" />
            <span className="text-gray-300 text-base">{bell}</span>
            </div>
    </div>
    <div class="flex flex-row justify-between mb-3">
                <p class="ml-3">Company:  <a class="text-blue-400" href='#'>All</a>˅</p>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-3 rounded">
                Add a contact
                </button>
            </div>
<div className="flex items-center ml-10 ">
      <div className="bg-white content del">
      <div class="mb-3">
  <input class="ml-6 form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked"checked />
    <p> <b class="text-slate-600">1 selected</b> <i class="ml-4 text-slate-400	text-xs	">{element}</i>   </p>
  </div>
        <div className="h-30 shadow-2xl">
          <div class="flex list p-3 ">
    <div class="form-check ml-3 mt-1">
      <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
      <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
      </label>
    </div>
          <img class="object-cover ml-4 w-7 h-7 mr-2  rounded-full" src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg" alt="username" />
          <p>
            Lindsey Stroud
          </p>
          <p>
          lindsey.stroud@gmail.com
          </p>
          <p>
          Hatchbuck
          </p>
          <p>
          Manager
          </p>
          <p>
          50 %
          </p>
          <p>
            5 Minutes ago
          </p>
          </div>
          <div class="flex list green p-3">
          <div class="form-check ml-3 mt-1">
      <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200  align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" checked/>
      <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
      </label>
    </div>
          <img class="object-cover ml-4 w-7 h-7 mr-2 rounded-full" src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg" alt="username" />
          <p>
            Lindsey Stroud
          </p>
          <p>
          lindsey.stroud@gmail.com
          </p>
          <p>
          Hatchbuck
          </p>
          <p>
          Manager
          </p>
          <p>
          50 %
          </p>
          <p>
            5 Minutes ago
          </p>
          </div>
          <div class="flex list p-3 ">
    <div class="form-check ml-3">
      <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
      <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
      </label>
    </div>
          <img class="object-cover ml-4 w-7 h-7 mr-2 rounded-full" src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg" alt="username" />
          <p>
            Lindsey Stroud
          </p>
          <p>
          lindsey.stroud@gmail.com
          </p>
          <p>
          Hatchbuck
          </p>
          <p>
          Manager
          </p>
          <p>
          50 %
          </p>
          <p>
            5 Minutes ago
          </p>
          </div>
<div class="flex list p-3 ">
    <div class="form-check ml-3">
      <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
      <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
      </label>
    </div>
          <img class="object-cover ml-4 w-7 h-7 mr-2 rounded-full" src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg" alt="username" />
          <p>
            Lindsey Stroud
          </p>
          <p>
          lindsey.stroud@gmail.com
          </p>
          <p>
          Hatchbuck
          </p>
          <p>
          Manager
          </p>
          <p>
          50 %
          </p>
          <p>
            5 Minutes ago
          </p>
          </div>
<div class="flex list p-3 ">
    <div class="form-check ml-3">
      <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
      <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
      </label>
    </div>
          <img class="object-cover ml-4 w-7 h-7 mr-2 rounded-full" src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg" alt="username" />
          <p>
            Lindsey Stroud
          </p>
          <p>
          lindsey.stroud@gmail.com
          </p>
          <p>
          Hatchbuck
          </p>
          <p>
          Manager
          </p>
          <p>
          50 %
          </p>
          <p>
            5 Minutes ago
          </p>
          </div>
<div class="flex list p-3">
    <div class="form-check ml-3">
      <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
      <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
      </label>
    </div>
          <img class="object-cover ml-4 w-7 h-7 mr-2 rounded-full" src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg" alt="username" />
          <p>
            Lindsey Stroud
          </p>
          <p>
          lindsey.stroud@gmail.com
          </p>
          <p>
          Hatchbuck
          </p>
          <p>
          Manager
          </p>
          <p>
          50 %
          </p>
          <p>
            5 Minutes ago
          </p>
          </div>
          <div class="flex list p-3">
    <div class="form-check ml-3">
      <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
      <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
      </label>
    </div>
          <img class="object-cover ml-4 w-7 h-7 mr-2 rounded-full" src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg" alt="username" />
          <p>
            Lindsey Stroud
          </p>
          <p>
          lindsey.stroud@gmail.com
          </p>
          <p>
          Hatchbuck
          </p>
          <p>
          Manager
          </p>
          <p>
          50 %
          </p>
          <p>
            5 Minutes ago
          </p>
          </div><div class="flex list p-3">
    <div class="form-check ml-3">
      <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
      <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
      </label>
    </div>
          <img class="object-cover ml-4 w-7 h-7 mr-2 rounded-full" src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg" alt="username" />
          <p>
            Lindsey Stroud
          </p>
          <p>
          lindsey.stroud@gmail.com
          </p>
          <p>
          Hatchbuck
          </p>
          <p>
          Manager
          </p>
          <p>
          50 %
          </p>
          <p>
            5 Minutes ago
          </p>
          </div><div class="flex list p-3">
    <div class="form-check ml-3">
      <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
      <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
      </label>
    </div>
          <img class="object-cover ml-4 w-7 h-7 mr-2 rounded-full" src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg" alt="username" />
          <p>
            Lindsey Stroud
          </p>
          <p>
          lindsey.stroud@gmail.com
          </p>
          <p>
          Hatchbuck
          </p>
          <p>
          Manager
          </p>
          <p>
          50 %
          </p>
          <p>
            5 Minutes ago
          </p>
          </div>
          <div class="flex list p-3">
    <div class="form-check ml-3">
      <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
      <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
      </label>
    </div>
          <img class="object-cover ml-4 w-7 h-7 mr-2 rounded-full" src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg" alt="username" />
          <p>
            Lindsey Stroud
          </p>
          <p>
          lindsey.stroud@gmail.com
          </p>
          <p>
          Hatchbuck
          </p>
          <p>
          Manager
          </p>
          <p>
          50 %
          </p>
          <p>
            5 Minutes ago
          </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
  }