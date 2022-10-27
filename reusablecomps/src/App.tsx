import React, { useState } from 'react';
import './App.css';
import { PhoneIcon, UserCircleIcon, HomeModernIcon  } from '@heroicons/react/24/outline'
import { Input } from './Reusables/Input';


function App() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [address, setAddress] = useState('')
  const [nameError, setnameError] = useState('')
  const [numError, setnumError] = useState('')
  const [addressError, setaddressError] = useState('')



  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    if (e.target.value === '') {
      setnameError('Name is required')
    } else {
      setnameError('')
    }
  }

  const handleNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value)
    if (e.target.value === '') {
      setnumError('Number is required')
    } else {
      setnumError('')
    }
  }

  const handleNumBlur = (e: React.FocusEvent) => {
    if (number === '') {
      setnumError('Number is required')
    } else {
      setnumError('')
    }
  }

  
  
  return (
    <div className="App">
    <div className='bg-stone-900 h-[100vh] m-10 flex flex-row'>
    <div className='flex flex-col mx-10'>
        <h2 className='text-2xl font-bold text-white'>Custom Width, Svgs, Light/Dark Mode</h2>
        <Input
          onChange={(e) => {
            setName(e.target.value)
            handleNameChange(e)
          }}
          label='Name'
          svg={<UserCircleIcon />}
          error={nameError}
          width={300}
          placeholder={'Enter Name'}
          type='text'
          autocomplete='none'
          id={'name'}
          name='Merchant Name'
          onBlur={(e) => {
            setnameError('')
          }}
          darkMode={true}
        />
        <Input
          label="Phone Number"
          placeholder="(222)222-2222"
          onChange={(e) => {
            setNumber(e.target.value)
            handleNumChange(e)
          }
          }
          svg={<PhoneIcon/>}
          type="tele"
          width={180}
          error={numError}
          onBlur={(e) => {
            handleNumBlur(e)
          }}
          darkMode={true}
        />
        <Input
          label="Address"
          placeholder="Enter your Address"
          onChange={(e) => {
            setAddress(e.target.value)
            setaddressError('')
          }}
          svg={<HomeModernIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />}
          type="text"
          width={400}
          error={addressError}
          onBlur={(e) => {
            if (address === '') {
              setAddress('Address is required')
            } else {
              setAddress('')
            }
          }}
          darkMode={true}
        />
         <Input
          label="Email"
          placeholder="Enter your Address"
          onChange={(e) => {
            setAddress(e.target.value)
            setaddressError('')
          }}
          svg={<HomeModernIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />}
          type="text"
          error={addressError}
          onBlur={(e) => {
            if (address === '') {
              setAddress('Address is required')
            } else {
              setAddress('')
            }
          }}
        />
        <div>
          <button
          onClick={() => {
            console.log('name', name, 'number', number)
          }}
          className='bg-stone-500 hover:bg-stone-700 text-white font-bold py-2 px-4 rounded uppercase'>
            Submit
          </button>
        </div>
      </div>
      <div className='flex flex-col mx-10'>
        <h2 className='text-2xl font-bold text-white'>Contact Form</h2>
        <Input
          onChange={(e) => {
            setName(e.target.value)
            handleNameChange(e)
          }}
          label='Name'
          svg={<UserCircleIcon />}
          error={nameError}
          width={300}
          placeholder={'Enter Name'}
          type='text'
          autocomplete='none'
          id={'name'}
          name='Merchant Name'
          onBlur={(e) => {
            setnameError('')
          }}
        />
        <Input
          label="Phone Number"
          placeholder="Enter your number"
          onChange={(e) => {
            setNumber(e.target.value)
            handleNumChange(e)
          }
          }
          svg={<PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />}
          type="tele"
          width={300}
          error={numError}
          onBlur={(e) => {
            handleNumBlur(e)
          }}
        />
        <Input
          label="Address"
          placeholder="Enter your Address"
          onChange={(e) => {
            setAddress(e.target.value)
            setaddressError('')
          }}
          svg={<HomeModernIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />}
          type="text"
          width={300}
          error={addressError}
          onBlur={(e) => {
            if (address === '') {
              setAddress('Address is required')
            } else {
              setAddress('')
            }
          }}
        />
        <div>
          <button
          onClick={() => {
            console.log('name', name, 'number', number)
          }}
          className='bg-stone-500 hover:bg-stone-700 text-white font-bold py-2 px-4 rounded uppercase'>
            Submit
          </button>
        </div>
        <div className='w-full flex justify-center'>
        <div className='bg-stone-700 w-[600px] h-30 flex flex-col text-lg tracking-wider p-3 rounded text-green-700 mt-10 '>
          <span className='text-md tracking-wider uppercase text-center'>Call State Here</span>
          <div className='bg-stone-800 rounded m-2 p-3 '>
            {name}
          </div>
          <div className='bg-stone-800 rounded m-2 p-3'>
            {number}
          </div>
          <div className='bg-stone-800 rounded m-2 p-3'>
            {address}
          </div>
          <div className='bg-stone-800 rounded m-2 p-3'>
            {/* {favColor} */}
          </div>
          <div className='bg-stone-800 rounded m-2 p-3'>
            {/* {number} */}
          </div>
          </div>
          </div>
    </div>
    </div>
    </div>
  );
}

export default App;
