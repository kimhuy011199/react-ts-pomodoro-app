import React from 'react';
import { motion } from 'framer-motion';
import FormSettings from './FormSettings';
import { ReactComponent as IconClose } from '../assets/icon-close.svg';

interface ModalProps {
  closeModal: () => void;
}

export const Modal = (props: ModalProps) => {
  const { closeModal } = props;
  const dropIn = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      onClick={closeModal}
      className="bg-purple1/90 flex flex-col absolute inset-0 justify-center items-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="w-full md:w-120 bg-white rounded-2xl relative"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="px-6 md:px-8 py-4 border-b border-gray2 flex justify-between items-center">
          <span className="text-purple1 text-2xl font-semibold">Settings</span>
          <button onClick={closeModal}>
            <IconClose />
          </button>
        </div>
        <div className="py-5 px-8 pb-16 md:pb-12">
          <FormSettings closeModal={closeModal} />
        </div>
      </motion.div>
    </motion.div>
  );
};
