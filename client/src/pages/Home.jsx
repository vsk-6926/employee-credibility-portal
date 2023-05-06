import { motion } from "framer-motion";
import { Link ,Routes,Route} from "react-router-dom";
import Company from "../pages/Company";
import Employee from "../pages/Employee";
import companyImage from "../assets/company.jpg";
import employeeImage from "../assets/employee.jpg";
import Hero from "../components/Hero";
import Newsletter from "../components/newsletter";
import TopJobOpenings from "../components/jobCard";

const Home = () => {
  const sectionVariants = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        delay: 0.5,
      },
    },
    exit: {
      x: "100vw",
      transition: {
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="">
      <motion.div
        className="flex flex-col items-center pt-8"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Hero/>
        <TopJobOpenings/>
        <h3 className="text-3xl font-bold mb-8 mt-10">One Stop For Both!</h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          
          <motion.div
            className=" rounded-lg shadow-lg p-8 w-full md:w-1/2 bg-no-repeat bg-center bg-cover mr-10"
            style={{ backgroundImage: `url(${employeeImage})`,width: '500px',height: '400px' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/employee"
              className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-full hover:bg-blue-600 transition duration-300"
            >
              Employee
            </Link>
          </motion.div>
          <motion.div
            className="bg-gray-200  rounded-lg shadow-lg p-8 w-full md:w-1/2 bg-no-repeat bg-center bg-cover ml-10"
            style={{ backgroundImage: `url(${companyImage})`,width: '500px',height: '400px' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/company"
              className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-full hover:bg-blue-600 transition duration-300"
            >
              Company
            </Link>
            
          </motion.div>

        </div>
      </motion.div>
      <Newsletter/>
      <Routes>
        <Route path="/company" component={Company} />
        <Route path="/employee" component={Employee} />
      </Routes>
    </div>
  );
};

export default Home;