import { Box, Button, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import MenuItem from './MenuItem'

export default function MenuLinks({ isOpen }) {
    return (
        <Box display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}>
            <Stack
                spacing={8}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
            >
                <MenuItem to="/">Home</MenuItem>
                <MenuItem to="/blog">Blog</MenuItem>
                <Link to="/donate">
                    <Button
                        size="sm"
                        rounded="md"
                        color="white"
                        bg="#47A166"
                        _hover={{
                            bg: ["primary.100", "primary.100", "primary.600", "primary.600"]
                        }}
                    >
                        Donate now
                    </Button>
                </Link>
            </Stack>
        </Box>
    )
}
