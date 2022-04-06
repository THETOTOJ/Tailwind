import React from 'react';
import Sidebar from '../Components/sidebar';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default function Dashboard() {
    return (
        <>
        <div class= 'content background'>
        <div class=' bg-gray-50 mb-10'>
                <div class="mt-1 relative rounded-md shadow-sm h-16 flex flex-row justify-between items-center px-8">
                <input type="text" name="search" class="focus:ring-indigo-500 focus:border-indigo-500 block w-11/12 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="Global Search" />
                </div>
        </div>
        <div class=" flex flex-col  w-11/12">
                        <div class="flex flex-row justify-between ml-10 mt-4">
                            <h4>8 task completed out of 10</h4>
                            <p>Show:  <a class="text-blue-400" href='#'>This Week</a></p>
                        </div>
                        <div class="flex items-center  justify-center mt-3 ml-7">

                            <div class="h-1 w-96 bg-lime-500 rounded" >

                            </div >
                            <div class="h-1 w-40 bg-slate-400 rounded">

                            </div>

                        </div>
                        <div class="ml-10 mt-4">
                            <h4>23 December, Sunday</h4>

                        </div>
                        <div class="flex flex-row items-center justify-around  p-5 border-b-2 mt-1">
                            <div>
                                <p class="text-slate-400">Sun</p>
                                <div class="mt-2">

                                    <p class="rounded-full text-white bg-blue-500">23</p>

                                </div>

                            </div>
                            <div>
                                <p class="text-sky-400">Mon</p>
                                <div class="mt-2 text-sky-400">

                                    <p>24</p>

                                </div>

                            </div>
                            <div>
                                <p class="text-slate-400">tue</p>
                                <div class="mt-2">

                                    <p class="text-slate-400">25</p>

                                </div>

                            </div>
                            <div>
                                <p class="text-slate-400">wed</p>
                                <div class="mt-2">

                                    <p class="text-slate-400">26</p>

                                </div>

                            </div>
                            <div>
                                <p class="text-slate-400">thu</p>
                                <div class="mt-2">

                                    <p class="text-slate-400">27</p>

                                </div>

                            </div>
                            <div>
                                <p class="text-slate-400">fri</p>
                                <div class="mt-2">

                                    <p class="text-slate-400">28</p>

                                </div>

                            </div>
                            <div>
                                <p class="text-slate-400">sat</p>
                                <div class="mt-2">

                                    <p class="text-slate-400">29</p>

                                </div>

                            </div>

                        </div>
                        <div>
                            <div class="p-3  ml-9 mt-10 bg-white border-2">
                                <div class="flex justify-between">
                                    <h3>
                                        Send benefit review by Sunday
                                </h3>
                                    <p class="text-slate-400">Reminder</p>

                                </div>
                                <p>Due date: December 23, 2018</p>
                                <div class="flex justify-between mt-2">
                                    <div class="flex items-center mt-3">
                                        <img class="self-center h-7 rounded-full " src="image 2.png" alt="" />
                                        <p class="text-slate-400 ml-3">George Fields</p>

                                    </div>
                                    <button class="text-white bg-green-500 w-32 h-7 mt-4 rounded">Completed</button>

                                </div>

                            </div>


                            <div class="p-3  ml-9 mt-5 bg-white border-2">
                                <div class="flex justify-between">
                                    <h3>
                                        Send benefit review by Sunday
                                </h3>
                                    <p class="text-slate-400">Reminder</p>

                                </div>

                                <p>Due date: December 23, 2018</p>
                                <div class="flex justify-between mt-2">
                                    <div class="flex items-center mt-3">
                                        <img class="self-center h-7 rounded-full " src="image 2.png" alt="" />
                                        <p class="text-slate-400 ml-3">George Fields</p>

                                    </div>
                                    <button class="text-white bg-red-500 w-32 h-7 mt-4 rounded">Ended</button>

                                </div>

                            </div>


                            <div class="p-3  ml-9 mt-5 mb-3 bg-white border-2">
                                <div>
                                    <div class="flex justify-between">
                                        <h3>
                                            Send benefit review by Sunday
                                </h3>
                                        <p class="text-slate-400">Reminder</p>

                                    </div>
                                    <p>Due date: December 23, 2018</p>
                                    <div class="flex justify-between mt-2">
                                        <div class="flex items-center mt-3">
                                            <img class="self-center h-7 rounded-full " src="image 2.png" alt="" />
                                            <p class="text-slate-400 ml-3">George Fields</p>

                                        </div>
                                        <button class="text-white bg-green-500 w-32 h-7 mt-4 rounded">Completed</button>

                                    </div>

                                </div>

                            </div>
                        </div>
                        <div class="flex items-center justify-center">
                            <button class="text-sky-400 mb-5">show more</button>
                        </div>

        </div>
        <div class= 'second'>

        </div>
        </div>
        </>
    );
    }