import React from 'react';

export const MainApp = () => {
  return (
    <>
    <nav className="bg-gray-800 h-16">
         <ul className='flex justify-between item-center px-4 py-3'> 
            <li><a href="#" className='text-white'>init</a></li>
            <li><a href="#" className='text-white'>about</a></li>
            <li><input type="text" /></li>
            <li><a href="#" className='text-white'>about</a></li>
            <li><a href="#" className='text-white'>register</a></li>
         </ul>
    </nav>  
    <ul class="mx-2 text-red-500">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    </ul>

    </>
  )
}
