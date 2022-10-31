import * as React from 'react'
import { useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ArrowsUpDownIcon } from '@heroicons/react/24/solid'

function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ')
  }

type Option = {
  id: string
  name: string
  description: string
}

interface IProps {
  onChange: (value: Option) => void
  options: Array<Option>
  label?: string
  value: Option
  error?: string
  placeholder?: string
  autoFocus?: boolean
  dimensions?: {
    height: number
    width: number
  }
}
export const ComboboxHUI = ({
  options,
  value,
  onChange,
  error,
  placeholder,
  autoFocus,
}: IProps) => {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(value || ({} as Option))

  //this is needed for when outside state sets the value
  React.useEffect(() => {
    if (value) {
      return setSelected(value)
    }
  }, options)

  if (!options?.length) {
    return null
  }

  const filteredOption =
    query === ''
      ? options
      : options.filter((option) =>
          option.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, '')),
        )
  
  return (
    <Combobox
      placeholder='Select an option'
      value={selected}
      onChange={(value: Option) => {
        onChange(value)
        setSelected(value)
      }}
    >
      {({ open }) => (
        <div className={`relative w-[300px]`}>
          <Combobox.Input
            className={classNames(
              error
                ? 'text-red-500 border-red-500 focus:ring-red-500'
                : ' border-first-grey-border text-first-blue focus:ring-first-blue focus:border-first-blue',
              'shadow-sm block sm:text-sm rounded-md h-[34px] w-[300px]',
            )}
            placeholder={placeholder}
            onChange={(event) => {
              setQuery(event.target.value)
            }}
            value={query}
            displayValue={(option: { id: string; name: string }) => option.name}
            autoComplete='my-field-name1'
            autoFocus={autoFocus}
          />
          <Combobox.Button className='absolute inset-y-0 right-0 flex items-center pr-2'>
            <ArrowsUpDownIcon
              className='w-5 h-5 text-gray-400'
              aria-hidden='true'
            />
          </Combobox.Button>

          <Transition
            show={open}
            leave='transition duration-100 ease-in'
            leaveFrom='transform opacity-100'
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className='absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-[99999]'>
              {filteredOption.length === 0 && query !== '' ? (
                <div className='relative px-4 py-2 cursor-default select-none text-first-blue'>
                  Nothing found.
                </div>
              ) : (
                filteredOption.map((option) => (
                  <Combobox.Option
                    key={option.id}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-5 pr-4 ${
                        active ? 'bg-first-blue text-white' : 'text-first-blue'
                      }`
                    }
                    value={option}
                  >
                    <span
                      className={`block truncate ${
                        selected.id === option.id
                          ? 'font-medium'
                          : 'font-normal'
                      }`}
                    >
                      {option.name}
                      <div
                        className={`block truncate ${
                          selected.id === option.id
                            ? 'text-xs font-medium'
                            : 'text-xs font-normal'
                        }`}
                      >
                        {option.description}
                      </div>
                    </span>
                    {selected.id === option.id ? (
                      <span
                        className={`absolute inset-y-0 flex items-center right-0 pr-4`}
                      >
                        <CheckIcon className='w-5 h-5 ' aria-hidden='true' />
                      </span>
                    ) : null}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      )}
    </Combobox>
  )
}
