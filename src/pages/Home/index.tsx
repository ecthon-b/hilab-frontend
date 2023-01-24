import { Flex, Image, Text } from "@chakra-ui/react";
import { BsArrowRightShort } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

export function Home() {
    return (
        <Flex
            width='100%'
            height='100vh'
            backgroundImage='./img/hero-home.svg'
            backgroundPosition={{base: 'center', lg: 'initial'}}
            backgroundRepeat='no-repeat'
            backgroundSize='cover'
        >
            <Flex
                width={{base: '500px', lg: '600px'}}
                flexDir='column'
                justifyContent='center'
                alignItems='center'
                margin='auto'
            >
                <Image src="./img/disney.svg" alt="Logomarca da Disney" />
                <Text
                    fontSize='1.25rem'
                    fontWeight='normal'
                    textAlign='center'
                    color='#C0C0C0'
                    mt='1.25rem'
                >
                    Encontre dados dos seus personagens favoritos da Disney
                </Text>
                <NavLink to='/showlist' title="Disney">
                    <Text
                        display='flex'
                        width='240px'
                        height='56px'
                        justifyContent='center'
                        alignContent='center'
                        background='#6421FF'
                        borderRadius='2xl'
                        alignItems='center'

                        fontSize='1rem'
                        fontWeight='medium'
                        color='#FFF'
                        mt='4.5rem'
                        gap='10px'
                        transition='0.3s'

                        _hover={{
                            background: '#551dda',
                            gap: '16px'
                            
                        }}
                    >
                        EXPLORAR
                        <BsArrowRightShort size='32px'/>
                    </Text>
                </NavLink>
            </Flex>
        </Flex>
    )
}