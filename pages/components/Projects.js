import { motion } from 'framer-motion';
import Link from 'next/link'
import dynamic from 'next/dynamic';
import { useState } from 'react';

const DynamicComponent1 = dynamic(() => import('./cards/libraryCard'));
const DynamicComponent2 = dynamic(() => import('./cards/weatherCard'));
const DynamicComponent3 = dynamic(() => import('./cards/boutiqueCard'));
const DynamicComponent4 = dynamic(() => import('./cards/cvCard'));
const DynamicComponent5 = dynamic(() => import('./cards/luxuryCard'));

export default function Projects() {

    const [selectedComponent, setSelectedComponent] = useState(null);

    function handleLinkClick(componentName) {
        setSelectedComponent(componentName)
    }


    return(
        <div >
           <motion.main 
          className='bg-slate-100 text-gray-700 absolute top-0 left-0 w-full h-full p-5 font-sans dark:bg-slate-900 dark:text-slate-500'
          initial={{ opacity:0 }}
          animate={{ opacity: 1}}
          transition={{ duration: 0.75, ease: "easeOut"}}
        >
            <motion.h1 
                className=' text-7xl  pb-10 font-monoton'
                animate={{ y: 30 }}
                transition={{ ease: "easeOut", duration: 2 }}>
                Projects
              </motion.h1>
                    <div className='mt-20'> 
                    <ul>
        <li>
          <Link href="#" onClick={() => handleLinkClick('libraryCard')}>Library</Link>
        </li>
        <li>
          <Link href="#" onClick={() => handleLinkClick('weatherCard')}>Weather App</Link>
        </li>
        <li>
          <Link href="#" onClick={() => handleLinkClick('boutiqueCard')}>Tae Ice cream boutique</Link>
        </li>
        <li>
          <Link href="#" onClick={() => handleLinkClick('cvCard')}>CV Builder</Link>
        </li>
        <li>
          <Link href="#" onClick={() => handleLinkClick('luxuryCard')}>Tae luxury discount store</Link>
        </li>
      </ul>

      {selectedComponent === 'libraryCard' && <DynamicComponent1 />}
      {selectedComponent === 'weatherCard' && <DynamicComponent2 />}
      {selectedComponent === 'boutiqueCard' && <DynamicComponent3 />}
      {selectedComponent === 'cvCard' && <DynamicComponent4 />}
      {selectedComponent === 'luxuryCard' && <DynamicComponent5 />}
                    </div>
                    
            </motion.main>
        </div>
    );
}