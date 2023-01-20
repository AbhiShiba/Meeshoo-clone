import React from 'react'
import { NavBar } from '../Meesho/NavBar/NavBar'

const sampleData = [{item:"a1",count:1},{item:"a2",count:1},{item:"a3",count:1},{item:"a4",count:1}]

export function Home() {
    sessionStorage.setItem('sample',JSON.stringify(sampleData));
  return (
    <div>
        <NavBar />
    </div>
  )
}
