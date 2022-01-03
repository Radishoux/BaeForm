import styles from './chatlist.module.css'
import React from 'react'

export default function Chatlist(el) {
  return (
    <div key={JSON.stringify(el)} >
      <h1>{el.Name} // {el.Age}</h1>
    </div>
  )
}
