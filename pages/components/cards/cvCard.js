import { motion } from 'framer-motion';

export default function cvCard() {
    return(
        <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity: 1}}
          transition={{ duration: 0.75, ease: "easeOut"}}
          exit={{ opacity: 1 }}
        >
            <h1 className="text-3xl pb-6 font-gloock">CV Builder</h1>
            <div className="lg:pl-5 lg:-ml-3 lg:border-4 lg:border-l-black lg:border-r-0 lg:border-t-0 lg:border-b-0 lg:dark:border-l-champagne">
                <p className="font-sans leading-2 ">
                CV Builder (or resume builder) is a project I built as an assignment in The Odin Project. The UI has two sections: the left side contains the input fields
                and the right side is the CV template. Upon entering the information, the inputs will be displayed in the CV template.
                I used <span className="font-extrabold">React</span> and
                <span className="font-extrabold pl-1">CSS</span>.
                </p>
                <div className="pt-4">
                    <a 
                    className="underline font-gloock pr-2"
                    href="https://taepal467.github.io/cv-project/" target="_blank" rel="noreferrer">View Site</a>|
                    <a 
                    className="underline font-gloock pl-2"
                    href="https://github.com/taepal467/cv-project" target="_blank" rel="noreferrer">Github</a>
                </div>
            </div>
        </motion.div>
    );
}
