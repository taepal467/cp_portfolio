import { motion } from 'framer-motion';

export default function boutiqueCard() {
    return(
        <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity: 1}}
          transition={{ duration: 0.75, ease: "easeOut"}}
          exit={{ opacity: 1 }}
        >
            <h1 className="text-3xl pb-6 font-gloock">Tae&#x27;s Ice Cream Boutique</h1>
            <div className="lg:pl-5 lg:-ml-3 lg:border-4 lg:border-l-black lg:border-r-0 lg:border-t-0 lg:border-b-0 lg:dark:border-l-champagne">
                <p className="font-sans leading-2 ">
                Tae&#x27;s Ice Cream Boutique is a project I built as an assignment in The Odin Project. It&#x27;s a simple project that displays 
                 a menu for ice cream, milk shakes, cake and ice cream desserts.
                 I used <span className="font-extrabold">JavaScript</span>, <span className="font-extrabold">Webpack</span>, and
                <span className="font-extrabold pl-1">CSS</span>.
                </p>
                <div className="pt-4">
                    <a 
                    className="underline font-gloock pr-2"
                    href="https://taepal467.github.io/ice-cream-boutique/" target="_blank" rel="noreferrer">View Site</a>|
                    <a 
                    className="underline font-gloock pl-2"
                    href="https://github.com/taepal467/ice-cream-boutique" target="_blank" rel="noreferrer">Github</a>
                </div>
            </div>
       
        </motion.div>
    );
}

