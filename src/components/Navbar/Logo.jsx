import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Logo(props) {
    return (
        <Box {...props}>
            <Link to="/">
                <Image m={0} p={0} src="https://kingdomvisioninternationalorg.files.wordpress.com/2022/02/kvilogo-2.png?w=160&zoom=2" w={50} />
            </Link>
        </Box>
    )
}