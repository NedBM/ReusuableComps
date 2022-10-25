import React, { useState } from 'react';
import './App.css';
import { PhoneIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { Input } from './Reusables/Input';


function App() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  return (
    <div className='bg-slate-200'>
      <header className="App-header">
        <Input
          label="Name"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          svg={<UserCircleIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />}
          type="text"
          width={500}
        />
        <Input
          label="Phone Number"
          placeholder="Enter your number"
          onChange={(e) => setNumber(e.target.value)}
          svg={<PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />}
          type="tele"
          width={200}
          error={'Number Must be 10 digits'}
          onBlur={(e) => {
            if (number.length !== 10) {
              console.log('error')
            }
          }}
        />
      </header>
      <div>
        <div>
          <span>
            {name}
            {number}
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
