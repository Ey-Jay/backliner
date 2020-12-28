import { useModalState } from '@context/Modal';

const ModalGroup = ({ children }) => {
  const modalState = useModalState();

  return (
    <>
      {/* <>Modals</> */}
      {children}
    </>
  );
};

export default ModalGroup;
