import { motion } from "framer-motion";
import aboutImage from '../assets/about.png';

const About = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <motion.div
            className="w-full md:w-1/2 p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-8">About ECP</h2>
            <p className="text-lg mb-8">
              Employee Credibility Portal is a platform that aims to streamline the employee recruitment process and improve the credibility of both candidates and organizations. Our platform assigns a credibility score to employees based on their past records and skills, and to organizations based on their recruitment and onboarding practices.
            </p>
            <p className="text-lg mb-8">
              Our mission is to create a more transparent and fair hiring process for everyone, by providing valuable insights and data to both employers and job seekers.
            </p>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <img className="w-full" src={aboutImage} alt="About us" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;