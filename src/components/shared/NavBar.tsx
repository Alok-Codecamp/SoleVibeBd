"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Input } from '../ui/input';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrSearch } from 'react-icons/gr';
import { Separator } from '../ui/separator';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CircleX, UserRound } from 'lucide-react';
import styles from './navbar.module.css'
const NavBar = () => {
    const [open,setOpen] = useState<boolean>(false);
    const [closed,setClosed] = useState<boolean>(false);
      const navRef = useRef<HTMLDivElement|null>(null);
    const pathName = usePathname();

    useEffect(()=>{
        const handleClickOutside =(e:MouseEvent)=>{
            if(navRef.current && !navRef.current.contains(e.target as Node)&&open){
                closeNav();
            }
        }
        document.addEventListener("mousedown",handleClickOutside)
         return () => document.removeEventListener("mousedown", handleClickOutside);
    },[open])

  const closeNav = () => {
    if (open) {
        setClosed(true); // start slide-out animation
        setTimeout(() => {
            setOpen(false); // remove element after animation ends
            setClosed(false); // reset closed state
        }, 500); // match your animation duration
    }
};
    
  return (
    <div className=''>
        {/* desktop menu  */}
        <div className='bg-gray-900 opacity-90 h-16 w-full flex justify-between items-center text-gray-200 px-8 lg:px-16'>
            <FaFacebookF color='white' size={26} className='md:hidden mx-auto'/>
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
            <button onClick={()=>setOpen(!open)}  className=''><GiHamburgerMenu size={22}/></button>
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
                <UserRound  size={32} className='mx-2'/>
<MdOutlineShoppingCart size={32} className='mx-2'/>

            </div>
        </nav>
        {/* mobile menu */}
        
        {
            open&&<div className={`${styles.navContainer} ${closed?styles.navBarHide:styles.navBarShow} fixed inset-0 bg-black/40 backdrop:blur-lg flex justify-start items-center z-10  `} onClick={closeNav}>
                <div className={`${styles.navBar} bg-gray-50 h-screen w-64 px-6 py-10`} onClick={(e)=>e.stopPropagation()}>
                    <CircleX  className='absolute top-2 right-32' size={20}/>
                    <div className='flex justify-center items-center mt-4'>
                <Input placeholder='Search For Product' className='placeholder:text-gray-800 border border-gray-900'/>
                <button className='-ml-5'><GrSearch /></button>
            </div>
            <ul  className='text-sm'>
                <li className='my-4'><Link href={'/'}>Home</Link></li>
                <li className='my-4'><Link href={'/all-products'}>All Products</Link></li>
                <li className='my-4'><Link href={'/all-products'}>Premium Quality</Link></li>
                <li className='my-4'><Link href={'/all-products'}>50% Discount</Link></li>
                <li className='my-4'><Link href={'/size-chart'}>Size Chart</Link></li>
            </ul>
                </div>
            </div>
        }
        
    </div>
  )
}

export default NavBar