import React from 'react';
import photo from './assets/nj.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

class Profile extends React.Component {

    render() {
        return(
            <div className='w-full md:h-screen overflow-auto flex justify-center items-center bg-gradient-to-r from-indigo-200 via-pink-200 to-lime-100 dark:bg-gradient-to-r dark:from-slate-600 dark:via-zinc-500 dark:to-gray-600'>
                <div name='profile' className='m-10 lg:m-0 max-w-fit bg-gray-50 dark:bg-zinc-800 rounded-3xl'>
                    <div className="grid container mx-auto px-4 py-8 md:grid-cols-3 md:gap-6">
                        <div className='md:col-span-1 text-center place-self-center'>
                            <img src={photo} className='max-w-xs mx-auto' alt='Niranjan'/>
                            <div className='h-[35px]'></div>
                            <p className='font-sans text-3xl text-gray-700 dark:text-gray-50'>👋🏽 Hi, I’m</p>
                            <div className='h-[15px]'></div>
                            <p className='font-sans text-3xl text-gray-700 dark:text-gray-50'>Niranjan Ravichandran</p>
                            <div className='h-[15px]'></div>
                        </div>
                        <div className='md:mt-0 px-5 md:col-span-2 place-self-center'>
                            <p className='font-sans font-bold text-2xl text-gray-700 dark:text-gray-50'>A little about me...</p>
                            <p className='font-sans text-justify text-gray-600 py-2 dark:text-gray-50'>I'm a Software Engineer based out of New York:statue_of_liberty:. I spend most of my time building and breaking (mostly breaking) software. I love any tool that makes building software more fun. I’ve been lucky to have worked on products used by millions of people every day. I'm currently building the interaction experience at <a href='https://www.hinge.co/' className='font-medium hover:opacity-75'>Hinge</a> on iOS.</p>
                            <div className='flex flex row py-2 md:text-center'>
                                <a href='https://twitter.com/_nravichan' className='hover:opacity-75 dark:text-slate-50'><FontAwesomeIcon icon={brands('twitter')} className='fa-2xl px-2'/></a>
                                <a href='https://www.linkedin.com/in/nravichan/' className='hover:opacity-75 dark:text-slate-50'><FontAwesomeIcon icon={brands('linkedin')} className='fa-2xl px-2'/></a>
                                <a href='https://github.com/n-ravichandran' className='hover:opacity-75 dark:text-slate-50'><FontAwesomeIcon icon={brands('github')} className='fa-2xl px-2'/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;