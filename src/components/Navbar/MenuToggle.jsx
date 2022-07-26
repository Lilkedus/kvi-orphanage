import { Box } from "@chakra-ui/react";
import { AiFillCloseCircle, AiOutlineMenu } from "react-icons/ai";

export default function MenuToggle({ setIsOpen, isOpen }) {
    const handleToggle = () => setIsOpen(!isOpen);

    return (
        <Box display={{ base: "block", md: "none" }} onClick={() => handleToggle()}>
            {isOpen ? <p><AiFillCloseCircle fontSize={25} /></p> : <p><AiOutlineMenu fontSize={20} /></p>}
        </Box>
    )
}
