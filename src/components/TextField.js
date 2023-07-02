import React from 'react'
import './TextField.css'
export const TextField = ({label,inputProps,value,onChange}) => {
  return (
    <div>
        <label className='label'>{label}</label>
        <input
        {...inputProps}
        onChange={onChange}
        value={value}
        className='inputField'
        />
    </div>
  )
}
