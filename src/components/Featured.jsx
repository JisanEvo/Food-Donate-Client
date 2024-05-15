import { Link } from "react-router-dom";
import CardShow from "./CardShow";
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { fadeIn } from '../varaints'


const Featured = ({ data }) => {
  console.log(data)
  return (
    <div>
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}

      >
        <h1 className="text-5xl text-center m-4">Featured Food</h1>

      </motion.div>
      <motion.div
        variants={fadeIn('left', 0.3)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.5 }}

        className="text-2xl text-center mt-2">Food donation reminds us that abundance is best enjoyed when it is shared with those in need.</motion.div>

      <motion.div
    
      className="grid grid-cols-1 lg:grid-cols-3 gap-4 m-4">
        {
          data
            .sort((a, b) => b.quantity - a.quantity)
            .slice(0, 6)
            .map(item => <CardShow item={item} key={item._id}></CardShow>)
        }

      </motion.div>
      <div className="text-center">

        <Link to="/availableFood" className="">
          <button className="btn btn-outline ">Show All </button>
        </Link>
      </div>
    </div>
  );
};
Featured.propTypes = {
  data: PropTypes.array.isRequired,
};
export default Featured;