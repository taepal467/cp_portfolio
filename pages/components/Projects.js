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

      //these two const variables are used for the animated links
  const container = {
    hidden: { opacity: 0 },
    show: {
        opacity:1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.2,
        },
    }
}

  const item = {
    hidden:{ y: '75%'},
    show: { y: '0%', transition: {  duration:0.75 }},
  }


    return(
        <div >
           <motion.main 
            className='bg-pinkNude text-black absolute top-0 left-0 w-full h-full p-5 font-sans dark:bg-neutral-900 dark:text-champagne'
            initial={{ opacity:0 }}
            animate={{ opacity: 1}}
            transition={{ duration: 0.75, ease: "easeOut"}}
            >
    
            <div className='text-base mt-20 lg:absolute lg:inset-x-3/4 lg:right-0 lg:top-20'> 
                <div>
                <motion.h1 
                className=' text-7xl  pb-10 font-gloock'
                animate={{ y: 30 }}
                transition={{ ease: "easeOut", duration: 2 }}>
                Projects
                </motion.h1>
                </div>
                <motion.ul 
                className='font-gloock underline underline-offset-4 py-6'
                variants={container}
                initial='hidden'
                animate='show'
                >
                    <div>
                        <motion.li 
                        className="pb-2 hover:text-2xl hover:ease-out hover:duration-300" 
                        variants={item}>
                            <Link href="#" onClick={() => handleLinkClick('libraryCard')}>Library</Link>
                        </motion.li>
                    </div>
                    <div>
                        <motion.li
                         className="pb-2 hover:text-2xl hover:ease-out hover:duration-300"    
                        variants={item}>
                            <Link href="#" onClick={() => handleLinkClick('weatherCard')}>Weather App</Link>
                        </motion.li>
                    </div>
                    <div>
                        <motion.li 
                         className="pb-2 hover:text-2xl hover:ease-out hover:duration-300"   
                        variants={item}>
                            <Link href="#" onClick={() => handleLinkClick('boutiqueCard')}>Tae Ice cream boutique</Link>
                        </motion.li>
                    </div>
                    <div>
                        <motion.li
                         className="pb-2 hover:text-2xl hover:ease-out hover:duration-300"    
                        variants={item}>
                            <Link href="#" onClick={() => handleLinkClick('cvCard')}>CV Builder</Link>
                        </motion.li>
                    </div>
                    <div>
                        <motion.li
                         className="pb-2 hover:text-2xl hover:ease-out hover:duration-300"    
                        variants={item}>
                            <Link href="#" onClick={() => handleLinkClick('luxuryCard')}>Tae luxury discount store</Link>
                        </motion.li>
                    </div>
                </motion.ul>
            </div>
            <div className='lg:ml-40 lg:mt-32 lg:absolute  lg:inset-x-2/4 lg:left-0 lg:top-20'>
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