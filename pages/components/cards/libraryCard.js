import { motion } from 'framer-motion';

export default function libraryCard() {
    return (
        <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity: 1}}
          transition={{ duration: 0.75, ease: "easeOut"}}
          exit={{ opacity: 1 }}
        >
            <h1 className="text-3xl pb-6 font-gloock">Library</h1>
            <div className="lg:pl-5 lg:-ml-3 lg:border-4 lg:border-l-black lg:border-r-0 lg:border-t-0 lg:border-b-0 lg:dark:border-l-champagne">
                <p className="font-sans leading-2 ">
                Library is a project I built as an assignment in The Odin Project. The Library is an app that you can use to
                track the books you are reading or have not read.You simply enter the book information in the input fields. You can also check whether
                the book has been read or not. If the book has not been read, you can change the status to read later on.You also have the option
                of removing the book from the list. I used <span className="font-extrabold">JavaScript</span>, <span className="font-extrabold">HTML</span>, and
                <span className="font-extrabold pl-1">CSS</span>.
                </p>

                <div className="pt-4">
                    <a 
                    className="underline font-gloock pr-2"
                    href="https://scintillating-sunburst-1d3e7a.netlify.app/" target="_blank" rel="noreferrer">View Site</a>|
                    <a 
                    className="underline font-gloock pl-2"
                    href="https://github.com/taepal467/Library" target="_blank" rel="noreferrer">Github</a>
                </div>
            </div>
        </motion.div>
    );
}