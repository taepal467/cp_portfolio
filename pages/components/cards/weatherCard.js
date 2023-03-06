import { motion } from 'framer-motion';

export default function weatherCard() {
    return(
        <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity: 1}}
          transition={{ duration: 0.75, ease: "easeOut"}}
          exit={{ opacity: 1 }}
        >
        <h1 className="text-3xl pb-6 font-gloock">Weather App</h1>
        <div className="lg:pl-5 lg:-ml-3 lg:border-4 lg:border-l-black lg:border-r-0 lg:border-t-0 lg:border-b-0 lg:dark:border-l-champagne">
            <p className="font-sans leading-2 ">
            The Weather App is a project I built as an assignment in The Odin Project. The Weather App will display the weather in your city. Depending on the weather,
            the background image will change accordingliy. To use the app, simply enter your city. You can chose to see the temperatures
            in either celsius or fahrenheit.
            I used <span className="font-extrabold">openWeatherAPI</span>, <span className="font-extrabold">HTML</span>, <span className="font-extrabold">CSS</span>,  and
            <span className="font-extrabold pl-1">JavaScript</span>.
            </p>
            <div className="pt-4">
                <a 
                className="underline font-gloock pr-2"
                href="https://taepal467.github.io/weather_app/" target="_blank" rel="noreferrer">View Site</a>|
                <a 
                className="underline font-gloock pl-2"
                href="https://github.com/taepal467/weather_app" target="_blank" rel="noreferrer">Github</a>
            </div>
        </div>
        </motion.div>
    );
}

