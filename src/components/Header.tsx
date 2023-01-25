import { Flex, Image, Text } from "@chakra-ui/react";
import { NavLink } from 'react-router-dom'

export function Header() {

    return (
        <Flex
            bg='#040814'
            width='100%'
        >
            <Flex as='header'
                id="header-size"
                display='flex'
                width={{base: '90%', md:'90%', lg: '1216px'}}
                height={{base: '80px', md:'90px', lg: '100px'}}
                margin='0 auto'
                justifyContent='space-between'
                alignItems='center'
                borderBottom='1px solid #1b202e'
                bg='#040814'
            >
                <Image
                    src="/img/disney.svg"
                    alt="Logomarca da Disney"
                    width={{ base: '70px', md:'100px', lg:'150px'}}
                />
                {}
                <Flex as='nav'>
                    <NavLink to='/'>
                        <Text
                            padding='0 16px'
                            fontSize={{base: '1rem', md:'1rem' ,lg:'1.175rem'}}
                            fontWeight='normal'
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