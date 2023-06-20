import React from 'react'

const ListHeader = ({ listName }) => {

  const signOut = () => {
    console.log("User signed out")
  }

  return (
    <div className ="list-header">
      <h1>{listName}</h1>
      <div className='btn-container'>
        <button className='btn create'>ADD NEW</button>
        <button className='btn signout' onclick = {signOut}>SIGN OUT</button>
      </div>
    </div>
  )
}

export default ListHeader