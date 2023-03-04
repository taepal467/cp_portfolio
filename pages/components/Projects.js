import { motion } from "framer-motion";

export default function Projects() {

    return(
        <div >
           <motion.main 
          className='bg-slate-100  text-gray-700 absolute top-0 left-0 w-full h-full p-5 font-sans dark:bg-slate-900 dark:text-slate-500'
          initial={{ opacity:0 }}
          animate={{ opacity: 1}}
          transition={{ duration: 0.75, ease: "easeOut"}}
          exit={{ opacity: 1 }}
        >
            <motion.h1 
                className=' text-7xl  pb-10 font-monoton'
                animate={{ y: 30 }}
                transition={{ ease: "easeOut", duration: 2 }}>
                Projects
              </motion.h1>
                    <section> 
                        <div className="text-center shadow-lg p-10 rounded-xl my-10">
                            <h3 className="text-lg font-medium pt-8 pb-2">CV Builder</h3>
                            <p className="py-2">** project description **</p>
                            <h4 className="py-4 text-gray-500">Technologies I used:</h4>
                            <p className="py-1 text-gray-700">React</p>
                        </div>

                        <div className="text-center shadow-lg p-10 rounded-xl my-10">
                            <h3 className="text-lg font-medium pt-8 pb-2">Taes Ice Cream Butiquw</h3>
                            <p className="py-2">** project description **</p>
                            <h4 className="py-4 text-gray-500">Technologies I used:</h4>
                            <p className="py-1 text-gray-700">Webpack</p>
                            <p className="py-1 text-gray-700">CSS</p>
                        </div>

                        <div className="text-center shadow-lg p-10 rounded-xl my-10">
                            <h3 className="text-lg font-medium pt-8 pb-2">Taes Luxury Discount Store</h3>
                            <p className="py-2">** project description **</p>
                            <h4 className="py-4 text-gray-500">Technologies I used:</h4>
                            <p className="py-1 text-gray-700">React</p>
                        </div>

                        <div className="text-center shadow-lg p-10 rounded-xl my-10">
                            <h3 className="text-lg font-medium pt-8 pb-2">CV Builder</h3>
                            <p className="py-2">** project description **</p>
                            <h4 className="py-4 text-gray-500">Technologies I used:</h4>
                            <p className="py-1 text-gray-700">React</p>
                        </div>

                        <div className="text-center shadow-lg p-10 rounded-xl my-10">
                            <h3 className="text-lg font-medium pt-8 pb-2">The Weather App</h3>
                            <p className="py-2">** project description **</p>
                            <h4 className="py-4 text-gray-500">Technologies I used:</h4>
                            <p className="py-1 text-gray-700">openWeather API</p>
                            <p className="py-1 text-gray-700">JavaScript</p>
                        </div>
                     
                    </section>
                    
            </motion.main>
        </div>
    );
}