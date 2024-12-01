import React from 'react'

interface Props {
    children: JSX.Element;
}

const AllPageWrapper = ({ children }: Props) => {
    return (
        <main className="relative bg-black-100 justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
            <div className="max-w-7xl w-full">
                {children}
            </div>
        </main>
    )
}

export default AllPageWrapper
