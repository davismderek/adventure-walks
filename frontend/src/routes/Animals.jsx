import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
} from "@chakra-ui/react";

const Animals = () => {
    return (
        <>
            <h1>Animals in the wild!</h1>
            <Button>dog</Button>
            <p>
                These are the top 20 animals found out on neighborhood walks or
                big moutain hikes. Have you seen any of them? Click the animla
                to learn some fun facts.
            </p>
        </>
    );
};

export default Animals;
