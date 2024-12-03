import React from 'react'
import { navItems } from "@/data";
import { Content } from './components/Content';
import AllPageWrapper from '@/components/AllPageWrapper';
import { FloatingNav } from '@/components/ui/FloatingNavbar';

const page = ({ params }: any) => {

    return (
        <AllPageWrapper>
            <>

                <FloatingNav navItems={navItems} />
                <div className="h-20 " />
                <Content />
            </>
        </AllPageWrapper>
    )
}

export default page