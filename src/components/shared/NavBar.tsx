"use client"
import React, { useState } from 'react'
import { Input } from '../ui/input';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrSearch } from 'react-icons/gr';
import { Separator } from '../ui/separator';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineShoppingCart } from 'react-icons/md';
const NavBar = () => {
    const [open,setOpen] = useState<boolean>(false);
  return (
    <div className=''>
        {/* desktop menu  */}
        <div className='bg-gray-900 opacity-90 h-16 w-full flex justify-between items-center text-gray-200 px-8 lg:px-16'>
            <div className='hidden md:flex justify-center items-center mx-6'>
                <Input placeholder='Search For Product' className='w-xs md:w-sm lg:w-lg h-10 placeholder:text-gray-300'/>
                <button className='-ml-8'><GrSearch /></button>
            </div>


            <div className='mx-4 h-full hidden md:flex justify-center items-center'>
                <Separator orientation='vertical'/>    
                <FaFacebookF color='white' size={30} className='mx-4'/>
                <Separator orientation='vertical'/>    
                <FaWhatsapp color='white' size={30} className='mx-4'/>
                <Separator orientation='vertical'/>    
                </div>
                
            
            <button className='lg:hidden w-fit ml-auto'><GiHamburgerMenu size={22}/></button>
        </div>

        <div className='hidden lg:flex justify-between items-center mx-20 my-4'>
            
                <Image src="/logo.png" alt='logo' height={100} width={180}/>
            
            <ul className='list-none text-lg font-semibold'>
                <li className='inline mx-2 '>Home</li>
                <li className='inline mx-2'>All Products</li>
                <li className='inline mx-2'>Premium Quality</li>
                <li className='inline mx-2'>50% Discount</li>
                <li className='inline mx-2'>Size Chart</li>
            </ul>
            <div className='flex justify-center items-center'>
                <CgProfile size={32} className='mx-2'/>
<MdOutlineShoppingCart size={32} className='mx-2'/>

            </div>
        </div>
    </div>
  )
}

export default NavBar