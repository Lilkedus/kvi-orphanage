import { Box, Image, Text } from "@chakra-ui/react";

export default function Logo(props) {
    return (
        <Box {...props}>
            {/* <Text fontSize="2xl" fontWeight="extrabold" color="#47A166">
                KVI
            </Text> */}
            <Image m={0} p={0} src="https://kingdomvisioninternationalorg.files.wordpress.com/2022/02/kvilogo-2.png?w=160&zoom=2" w={50} />
        </Box>
    )
}