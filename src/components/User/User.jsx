import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userId } = useParams();

    //we can also call an api based on this userId variable

    return (
        <div className='bg-gray-600 text-center text-white text-2xl'>
            User:{userId}

        </div>
    )
}

export default User