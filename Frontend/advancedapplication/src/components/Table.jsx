import React from 'react'
import './Table.css'
import Dashboard from './Dashboard'

export default function Table() {
  return (
    <>
    <Dashboard/>
  <meta charSet="utf-8" />
  <title>Table Style</title>
  <meta
    name="viewport"
    content="initial-scale=1.0; maximum-scale=1.0; width=device-width;"
  />
  <div className="table-title">
    <h3>Table</h3>
  </div>
  <table className="table-fill">
    <thead>
      <tr>
        <th className="text-left">User ID</th>
        <th className="text-left">Email</th>
        <th className="text-left">Username</th>
        <th className="text-left">Mobilenumber</th>
      </tr>
    </thead>
    <tbody className="table-hover">
      <tr>
        <td className="text-left">1</td>
        <td className="text-left">niro@gmail.com</td>
        <td className="text-left">Nirosh</td>
        <td className="text-left">9988773456</td>
      </tr>
      <tr>
      <td className="text-left">2</td>
      <td className="text-left">inba@gmail.com</td>
      <td className="text-left">InbaShri</td>
      <td className="text-left">9987654321</td>
      </tr>
      <tr>
        <td className="text-left">3</td>
        <td className="text-left">abi@gmail.com</td>
        <td className="text-left">Abi</td>
        <td className="text-left">9876054321</td>
      </tr>
    </tbody>
  </table>
</>

  )
}
