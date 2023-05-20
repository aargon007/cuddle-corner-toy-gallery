import React from 'react';
import { Spinner } from "@material-tailwind/react";

const SpinnerGlobal = () => {
    return (
        <div className='py-3 bg-[#eee9d7]'>
            <Spinner className="h-12 w-12 text-center mx-auto" />
        </div>
    );
};

export default SpinnerGlobal;