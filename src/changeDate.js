import React from 'react'

const ChangeDate = ({ setDate }) => {
    return(
        <button onClick={() => setDate(prompt('Enter a date','YYYY-MM-DD'))}>Change Date</button>
    )
}

export default ChangeDate
