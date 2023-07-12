import {
  ConnectWallet,
  ThirdwebProvider,
  metamaskWallet,
} from "@thirdweb-dev/react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

export default function App() {
  const { isOpen, onClose: closeModal } = useDisclosure({
    defaultIsOpen: true,
  });

  return (
    <ThirdwebProvider supportedWallets={[metamaskWallet()]}>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <ConnectWallet />
          </ModalBody>
        </ModalContent>
      </Modal>
    </ThirdwebProvider>
  );
}
