import React from 'react';
import Sidebar from '../Components/sidebar';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Dashboard from '../Components/Dashbord';

export default function Dash() {
    return (
      <><div className='flex'><Sidebar /><Dashboard /></div></>
    )
  }