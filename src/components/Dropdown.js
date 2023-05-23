import React from 'react'

const Dropdown = ({items})=>{

    const itemss = items.map((i)=>{
        return(
            <span className='mb-3'>
                <span>{i} </span>
            </span>
        )
    })

    return(
        <>
        {itemss}
        </>
    )
}

export default Dropdown