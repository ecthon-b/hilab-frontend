import { Box, Card, Image, Text, Wrap } from "@chakra-ui/react";

export function Home() {
    return (
        <Box
            bg='gray.100'
        >
            <Box
                width='1216px'
                height='100vh'
                margin='0 auto'
            >
                <Text
                    fontSize='3rem'
                    fontWeight='bold'
                    margin='40px 0'
                >
                    Personagens
                </Text>
                <Wrap
                    spacing='32px'
                    align='center'
                    width='100%'
                >
                    <Card
                        borderRadius='8px'
                    >
                        <Box
                            width='280px'
                            height='280px'
                            flexDirection='column'
                            borderRadius='8px 8px 0 0'
                        >
                            <Image
                                src='https://github.com/ecthon.png'
                                boxSize='full'
                                objectFit='cover'
                                borderRadius='8px 8px 0 0'    
                            />
                        </Box>
                        <Box
                            height='74px'
                            padding='16px 20px'
                        >
                            <Text
                                fontSize='12'
                            >
                                NOME
                            </Text>
                            <Text
                                fontSize='1rem'
                                fontWeight='medium'
                            >
                                Ecthon Borhis
                            </Text>
                        </Box>
                    </Card>
                </Wrap>
            </Box>
        </Box>
    )
}