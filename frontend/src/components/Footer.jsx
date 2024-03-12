import React from 'react'

function Footer() {
  return (
    <div>
       {/* footer section */}
       <footer class="bg-black w-full shadow  ">
       <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
         <span class="text-sm text-white sm:text-center  ">
           © 2024 Movie Review. All Rights Reserved.
         </span>
         <ul class="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0 text-white">
           <li>
             <a href="#" class="mr-4 hover:underline md:mr-6 ">
               About
             </a>
           </li>
           <li>
             <a href="#" class="mr-4 hover:underline md:mr-6">
               Privacy Policy
             </a>
           </li>
           <li>x
             <a href="#" class="mr-4 hover:underline md:mr-6">
               Licensing
             </a>
           </li>
           <li>
             <a href="#" class="hover:underline">
               Contact
             </a>
           </li>
         </ul>
       </div>
     </footer>
     </div>
  )
}

export default Footer