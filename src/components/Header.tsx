import { Flex, Image, Text } from "@chakra-ui/react";
import { NavLink } from 'react-router-dom'

export function Header() {
    return (
        <Flex
            bg='#040814'
            width='100%'
        >
            <Flex as='header'
                display='flex'
                width='1216px'
                height='100px'
                margin='0 auto'
                justifyContent='space-between'
                alignItems='center'
                bg='#040814'
            >
                <Image
                    src="/img/disney.svg"
                    alt="Logomarca da Disney"
                    width='150px'
                />

                <Flex as='nav'>
                    <NavLink to='/'>
                        <Text
                            padding='0 16px'
                            fontSize='1.175rem'
                            fontWeight='medium'
                            textDecor='none'
                            color='#FFF'
                            transition=' color 0.3s'
                            _hover={{
                                color: '#6421ff'
                            }}
                        >
                            Home
                        </Text>
                    </NavLink>                
                </Flex>
            </Flex>
        </Flex>
    )
}