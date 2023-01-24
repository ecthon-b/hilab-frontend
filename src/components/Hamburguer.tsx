import {
    Button,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Flex,
    DrawerHeader,
    Text, } from "@chakra-ui/react";
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavLink } from "react-router-dom";

export function Hamburguer() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button
                colorScheme='teal'
                onClick={onOpen}
                bg='transparent'
                _hover={{
                    bg: '#6421ff'
                }}
            >
                <GiHamburgerMenu  />
            </Button>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader></DrawerHeader>
                    <DrawerBody>
                        <Flex
                            width='100%'
                            align='center'
                            justifyContent='center'
                            mt='40px'
                        >
                            <NavLink
                                to={"/"}
                            >
                                <Text
                                    fontWeight='medium'
                                    color='#040814'
                                    _hover={{
                                        color: '#6421ff'
                                    }}
                                >
                                    Home
                                </Text>
                            </NavLink>
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}