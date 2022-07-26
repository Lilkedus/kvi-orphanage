import { Flex } from "@chakra-ui/react";

const NavBarContainer = ({ children, ...props }) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100"
            rounded="lg"
            m={[4, 4, 0, 4]}
            p={4}
            color="#47A166"
            {...props}
        >
            {children}
        </Flex >
    )
}

export default NavBarContainer;