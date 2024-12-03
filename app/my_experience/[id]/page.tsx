import React from 'react'

const page = ({ params }: any) => {
    return (
        <div>
            <h1>My exp</h1>
            {params.id}
        </div>
    )
}

export default page