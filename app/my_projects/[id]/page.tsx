import React from 'react'

const page = ({ params }: any) => {
    return (
        <div>
            <h1>My projects</h1>
            {params.id}
        </div>
    )
}

export default page
