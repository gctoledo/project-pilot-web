import FormActions from "../form-actions";
import { motion } from "framer-motion";

const BackendForm = () => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h1>Back-end</h1>

      <FormActions />
    </motion.div>
  );
};

export default BackendForm;
