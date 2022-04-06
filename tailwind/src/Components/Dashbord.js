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
        </div></>
    );
    }