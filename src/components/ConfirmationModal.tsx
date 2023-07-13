import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

function ConfirmationModal({ isOpen, onClose }: any) {
  return (
    <>
      <Modal  isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent background={"rgba(62, 3, 100, 0.7)"}>
          <ModalHeader>
            ¿Estás seguro de que deseas eliminar esta publicación?
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {
              " Esta acción no se puede deshacer y se perderá toda la información relacionada con la publicación, incluyendo los comentarios y las reacciones. Por favor, confirma si deseas proceder con la eliminación del post."
            }
          </ModalBody>

          <ModalFooter>
            <Button background={"red.900"} mr={3}>
              Eliminar
            </Button>
            <Button background={"gray.700"} onClick={onClose} variant="ghost">Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default ConfirmationModal;
