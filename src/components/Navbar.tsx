import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='border border-gray-300 bg-gray-100'>
<div className=' bg-gray-100 mx-5'>
<div className='flex justify-between mx-10 my-7 text-black'>
        <div className='text-4xl font-extrabold'>SAMI <span className='text-purple-500'> E-STORE</span></div>
        <ul className='flex gap-8 mt-3 font-bold text-xl'>
            {/* <li className='hover:text-purple-500'>Home</li>
            <li className='hover:text-purple-500'>Men</li>
            <li className='hover:text-purple-500'>Women</li>
            <li className='hover:text-purple-500'>Kids</li>
            <li className='hover:text-purple-500'>Contact us</li> */}
            <Link href={"/"} className='hover:text-purple-500'>Home</Link>
            <Link href={""} className='hover:text-purple-500'>Men</Link>
            <Link href={""} className='hover:text-purple-500'>Women</Link>
            <Link href={""} className='hover:text-purple-500'>Kids</Link>
            <Link href={""} className='hover:text-purple-500'>Contact us</Link>
        </ul>
     
        <button className=' text-black border border-black py-4 px-6 rounded hover:bg-gray-400  hover:text-black  bg-gray-300'>Add to Card</button>
        
    </div>
</div>
</div>
  )
}

export default Navbar