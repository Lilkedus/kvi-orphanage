import { useState } from 'react'
import Logo from './Logo'
import MenuLinks from './MenuLinks'
import MenuToggle from './MenuToggle'
import NavBarContainer from './NavBarContainer'

export default function NavBar(props) {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <NavBarContainer {...props}>
            <Logo
                w="100px"
                color={["white", "white", "primary.500", "primary.500"]}
            />
            <MenuToggle setIsOpen={setIsOpen} isOpen={isOpen} />
            <MenuLinks isOpen={isOpen} />
        </NavBarContainer>
    );
}