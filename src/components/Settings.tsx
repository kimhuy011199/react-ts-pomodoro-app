import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Modal } from './Modal';
import { ReactComponent as IconSettings } from '../assets/icon-settings.svg';

const Settings = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <motion.button
        onClick={openModal}
        whileHover={{
          rotate: '180deg',
          transition: { duration: 1 },
        }}
      >
        <IconSettings />
      </motion.button>

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && <Modal closeModal={closeModal} />}
      </AnimatePresence>
    </>
  );
};

export default Settings;
