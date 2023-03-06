import { motion } from 'framer-motion';

export default function luxuryCard() {
    return(
        <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity: 1}}
          transition={{ duration: 0.75, ease: "easeOut"}}
          exit={{ opacity: 1 }}
        >
        <h1 className="text-3xl pb-6 font-gloock">Tae&#x27;s Discount Luxury Store</h1>
        <div className="lg:pl-5 lg:-ml-3 lg:border-4 lg:border-l-black lg:border-r-0 lg:border-t-0 lg:border-b-0 lg:dark:border-l-champagne">
            <p className="font-sans leading-2 ">
            Tae&#x27;s Discount Luxury Store is a project I built for the &#x27;Shopping Cart&#x27; assignment in The Odin Project. I tried replicating real shopping sites
            when building this project. You simply add the items you want to the shopping bag. You then have the option of increasing or decreasing
            the quantity of items. After submitting your order by clicking the &#x27;Checkout&#x27; button, you will then see a fictitious &#x27;Order confirmation&#x27; page.
            I used <span className="font-extrabold">React</span>, <span className="font-extrabold">CSS</span>, and
            <span className="font-extrabold pl-1">ChatGPT</span>.
            </p>
            <div className="pt-4">
                <a 
                className="underline font-gloock pr-2"
                href="https://taepal467.github.io/shopping_cart" target="_blank" rel="noreferrer">View Site</a>|
                <a 
                className="underline font-gloock pl-2"
                href="https://github.com/taepal467/shopping_cart/tree/main" target="_blank" rel="noreferrer">Github</a>
            </div>
        </div>
        </motion.div>
    );
}

