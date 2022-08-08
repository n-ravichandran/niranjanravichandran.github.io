import React from 'react';
import photo from './assets/nj.png';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

class Profile extends React.Component {

    render() {
        return(
            <div name='profile' className='w-full h-screen bg-gray-50'>
                <div className="grid container mx-auto px-4 py-8 md:py-32 md:grid-cols-3 md:gap-6">
                    <div className='md-col-span-1 text-center place-self-center'>
                        <img src={photo} className='max-w-xs' alt='Niranjan' />
                        <div className='h-[35px]'></div>
                        <p className='font-sans text-3xl text-gray-700'>👋🏽 Hi, I’m</p>
                        <div className='h-[15px]'></div>
                        <p className='font-sans text-3xl text-gray-700'>Niranjan Ravichandran</p>
                        <div className='h-[15px]'></div>
                    </div>
                    <div className='md:mt-0 px-10 md:col-span-2 place-self-center'>
                        <p className='font-sans font-bold text-2xl text-gray-700'>A little about me...</p>
                        <p className='font-sans text-gray-600 py-2'>I spend most of my time building and breaking (mostly breaking) software. I love any tool that makes building software more fun. I’ve been lucky to work on incredible projects with inspiring people. I’m proud to have worked on products that are used by people million times everyday. Currently breaking things at Latch, Inc. as a Sr. iOS Engineer.</p>
                        <div className='flex flex row py-2 md:text-center'>
                            <a href='https://twitter.com/_nravichan'><FontAwesomeIcon icon={brands('twitter')} className='fa-2xl px-2'/></a>
                            <a href='https://www.linkedin.com/in/nravichan/'><FontAwesomeIcon icon={brands('linkedin')} className='fa-2xl px-2'/></a>
                            <a href='https://github.com/n-ravichandran'><FontAwesomeIcon icon={brands('github')} className='fa-2xl px-2'/></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;