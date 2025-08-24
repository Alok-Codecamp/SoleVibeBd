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
import { usePathname } from 'next/navigation';
import Link from 'next/link';
const NavBar = () => {
    const [open,setOpen] = useState<boolean>(false);
    const pathName = usePathname();
    
  return (
    <div className=''>
        {/* desktop menu  */}
        <div className='bg-gray-900 opacity-90 h-16 w-full flex justify-between items-center text-gray-200 px-8 lg:px-16'>
            <FaFacebookF color='white' size={26} className='mx-auto'/>
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
                
            
            
        </div>
        <div className='flex lg:hidden justify-between items-center mx-2 my-4'>
            <button className=''><GiHamburgerMenu size={22}/></button>
                <Image src="/logo.png" alt='logo' height={100} width={180}/>
            <MdOutlineShoppingCart color='' size={32} className=''/>
        </div>

        <nav className='hidden lg:flex justify-between items-center mx-20 my-4'>
            
            
                <Image src="/logo.png" alt='logo' height={100} width={180}/>
            
            <ul className='list-none text-lg font-semibold flex justify-center items-center'>
                <li className={`${pathName==='/'&&'underline text decoration-3 decoration-gray-800'}inline mx-3`}><Link href='/'>Home</Link></li>
                <li className={`${pathName==='/all-products'&&'underline text decoration-3 decoration-gray-800'}mx-3`}><Link href='/all-products'>All Products</Link></li>
                <li className={`${pathName==='/premium-quality'&&'underline text decoration-3 decoration-gray-800'} mx-3`}><Link href='/premium-quality'>Premium Quality</Link></li>
                
                
                <li className='inline mx-2'>50% Discount</li>
                <li className='inline mx-2'>Size Chart</li>
            </ul>
            <div className='flex justify-center items-center'>
                <CgProfile size={32} className='mx-2'/>
<MdOutlineShoppingCart size={32} className='mx-2'/>

            </div>
        </nav>
        mobile menu
        <div>
            <ul>
                <li><Link href={'/'}>Home</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar