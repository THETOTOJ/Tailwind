import React from 'react';
import ReactDOM from 'react-dom'

export default function Chat() {
    
    return (
    <>
    <div class= 'background'>
    <div class=' bg-gray-50 mb-10'>
            <div class="mt-1 relative rounded-md shadow-sm h-16 flex flex-row justify-between items-center px-8">
            <input type="text" name="search" class="focus:ring-indigo-500 focus:border-indigo-500 block w-11/12 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="Global Search" />
            </div>
    </div>
    <div class=" container  background  rounded lg:grid lg:grid-cols-4">
        <div class="ml-12 users bg-gray-50 border-r border-gray-300 lg:col-span-1">
            <ul class="overflow-auto h-[32rem]">
                <li>
                    <a class="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                        <img class="object-cover w-7 h-7 mb-2 rounded-full imaged"
                                    src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg" alt="username" />
                            <div class="w-full pb-2">
                                <div class="flex justify-between">
                                    <span class="block ml-2 font-semibold selected text-lg	">Lindsey stroud</span>
                                    <span class="block ml-2 date text-gray-600">30 DEC 2019 12:34</span>
                                </div>
                                <span class="block ml-2 text-sm text-gray-600">bye</span>
                            </div>
                    </a>
                    <a
                                class="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out bg-gray-100 border-b border-gray-300 cursor-pointer focus:outline-none">
                        <img class="object-cover w-7 h-7 mb-2 rounded-full"
                                    src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg" alt="username" />
                                <div class="w-full pb-2">
                                    <div class="flex justify-between">
                                        <span class="block ml-2 font-semibold text-gray-600">Same</span>
                                        <span class="block ml-2 date text-gray-600">30 DEC 2019 12:34</span>
                                    </div>
                                    <span class="block ml-2 text-sm text-gray-600">Good night</span>
                                </div>
                            </a>
                            <a
                                class="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out bg-gray-100 border-b border-gray-300 cursor-pointer focus:outline-none">
                        <img class="object-cover w-7 h-7 mb-2 rounded-full"
                                    src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg" alt="username" />
                                <div class="w-full pb-2">
                                    <div class="flex justify-between">
                                        <span class="text-lg	block ml-2 font-semibold text-gray-600">Same</span>
                                        <span class="block ml-2 date text-gray-600">30 DEC 2019 12:34</span>
                                    </div>
                                    <span class="block ml-2 text-sm text-gray-600">Good night</span>
                                </div>
                            </a>
                            <a
                                class="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out bg-gray-100 border-b border-gray-300 cursor-pointer focus:outline-none">
                        <img class="object-cover w-7 h-7 mb-2 rounded-full"
                                    src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg" alt="username" />
                                <div class="w-full pb-2">
                                    <div class="flex justify-between">
                                        <span class="text-lg	block ml-2 font-semibold text-gray-600">Same</span>
                                        <span class="block ml-2 date text-gray-600">30 DEC 2019 12:34</span>
                                    </div>
                                    <span class="block ml-2 text-sm text-gray-600">Good night</span>
                                </div>
                            </a> <a
                                class="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out bg-gray-100 border-b border-gray-300 cursor-pointer focus:outline-none">
                        <img class="object-cover w-7 h-7 mb-2 rounded-full"
                                    src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg" alt="username" />
                                <div class="w-full pb-2">
                                    <div class="flex justify-between">
                                        <span class="text-lg	block ml-2 font-semibold text-gray-600">Same</span>
                                        <span class="block ml-2 date text-gray-600">30 DEC 2019 12:34</span>
                                    </div>
                                    <span class="block ml-2 text-sm text-gray-600">Good night</span>
                                </div>
                            </a>
                            
                        </li>
                    </ul>
                </div>
                <div class=" chat ml-20 bg-gray-50 hidden lg:col-span-2 lg:block">
                    <div class="w-full">
                        <div class="relative flex items-center p-3 border-b border-gray-300">
                            <img class="object-cover w-10 h-10 rounded-full"
                                src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg" alt="username" />
                            <span class="block ml-2 text-xl	 font-bold text-gray-600">Lindsey Stroud</span>
                            <span class=" w-2 h-2 ml-2 bg-green-400 rounded-full">
                            </span>
                        </div>
                        <div class="relative w-full p-6 overflow-y-auto h-[40rem]">
                            <ul class="space-y-2">
                                <li class="flex justify-end">
                                    <div class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                                        <span class="block">Hiiii</span>
                                    </div>
                                </li>
                                <li class="flex justify-end">
                                    <div class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                                        <span class="block">how are you?</span>
                                    </div>
                                </li>
                                <li class="flex justify-start">
                                    <div class="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                                        <span class="block incoming">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat. Duis aute irure dolor in reprehenderit
                                            in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident,
                                            sunt in culpa qui officia deserunt mollit anim id est
                                            laborum.Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip
                                            ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore
                                            eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in culpa qui officia
                                            deserunt mollit anim id est laborum.
                                        </span>
                                    </div>
                                </li>
                                <li class="flex justify-end">
                                    <div class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                                        <span class="block">Hiiii</span>
                                    </div>
                                </li>
                                <li class="flex justify-end">
                                    <div class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                                        <span class="block">how are you?</span>
                                    </div>
                                </li>
                                <li class="flex justify-end">
                                    <div class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                                        <span class="block">how are you?</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="flex items-center justify-between w-full p-3 border-t border-gray-300">



                            <input type="text" placeholder="Type a message"
                                class="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                                name="message" required />
                            <button>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                    </svg>
                                </button>
                            </button>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </div></>
);
}