import * as React from 'react'
interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string | number | any
  label?: string
  svg?: React.ReactNode
  error?: string
  width?: number
  onBlur?: (e: React.FocusEvent) => void
  autocomplete?: string
  id?: string
  type: React.HTMLInputTypeAttribute
  placeholder?: any
  name?: string
  onKeyUp?: any
  onKeyDown?: any
  darkMode?: boolean
}

function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ')
  }

/**
 * Reusable input component with support for SVGs, error handling, etc
 *
 * @export
 * @param {InputProps} props
 * @example
 * <Input
 *  onChange={(e) => console.log('changed',e.target.value)}
    value={'test'}
    type={'date'}
    placeholder={'test-empty'}
   />
 * @returns
 */

export function Input(props: InputProps) {
  const [value, setValue] = React.useState('')
  React.useEffect(() => {
    setValue(props.value)
  }, [props])
  return (
    <div className='flex flex-col'>
      <label
        htmlFor='name'
        className={classNames(
          'mb-1 text-xs tracking-wide text-gray-300 sm:text-sm',
          props.darkMode ? 'text-gray-300' : 'text-gray-500'
        )}
      >
        {props.label}
      </label>
      <div className='relative'>
        <div className='absolute top-0 left-0 flex w-10 h-full'>
          {props.svg && (
            <div className={classNames
            ('flex items-center justify-center w-full h-full text-lg rounded-tl rounded-bl z-5', 
            props.darkMode ? 'text-gray-300' : 'text-gray-600')}>
              <svg
                viewBox='0 0 24 24'
                width='24'
                height='24'
                stroke='currentColor'
                strokeWidth='2'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='w-5 h-5'
              >
                {props.svg}
              </svg>
            </div>
          )}
        </div>

        <input
          style={{ width: props.width }}
          className={classNames(
            props.error
              ? 'text-red-500 border-red-500 focus:ring-red-500'
              : ' border-gray-600 focus:ring-pink-900 focus:border-pink-900',
            'shadow-sm block sm:text-sm rounded-md h-[34px] w-[300px]',
            props.darkMode ? 'bg-stone-800 text-green-400' : 'bg-gray-100 text-green-600',
            props.svg ? 'pl-12' : 'pl-3',
          )}
          autoComplete={props.autocomplete}
          id={props.id}
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            props.onChange(e)
          }}
          onBlur={(e) => {
            if (props.onBlur) {
              props.onBlur(e.target.value as any)
            }
          }}
          onKeyUp={props.onKeyUp}
          onKeyDown={props.onKeyDown}
        />
      </div>
      <span className='flex items-center mt-1 ml-1 font-sans text-xs font-medium tracking-wide text-red-500'>
        {props.error}
      </span>
    </div>
  )
}