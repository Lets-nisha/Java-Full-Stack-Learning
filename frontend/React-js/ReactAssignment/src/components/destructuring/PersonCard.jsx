import React from 'react'

const PersonCard = ({children}) => {
  
    return (
        <>
            <h2>Task 5th : Person Card use destructuring</h2>
          <div className="card">
            {children}
        </div>
        </>
    )
}

export default PersonCard