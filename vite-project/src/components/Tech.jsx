import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion"
import {  textVariant } from "../utils/motion";
import { styles } from "../style";
const Tech = () => {
  return (
   <>
   <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My skillsfggggggggggggggggggggggggggggggggfdffhh set</p>
        <h2 className={`${styles.sectionHeadText}`}>Technologies.</h2>
      </motion.div>
   <div className="flex flex-wrap justify-center gap-10 p-5"> {/* Added padding for responsiveness */}
      {technologies.map((technology) => (
        <div className="flex justify-center items-center w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech"); // Giving an ID for better navigation or styling
