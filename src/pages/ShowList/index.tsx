import {
    Box,
    Card,
    Image,
    Text,
    Wrap,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, 
    useDisclosure,
    Button,
    Flex,
    Divider} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ICharacter } from "../../interfaces/character.interface";
import api from "../../services/api";

export function ShowList() {
    const [characters, setCharacters] = useState<ICharacter[]>([]);
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        getCharacters();
    }, [])

    async function getCharacters() {
        const response = await api.get('characters');
        const data = response.data.data;
        console.log(data)
        setCharacters(data);
    }

    return (
        <Box
            bg='gray.100'
        >
            <Header />
            <Box
                width='1216px'
                height='100vh'
                margin='0 auto'
            >
                <Text
                    fontSize='3rem'
                    fontWeight='bold'
                    margin='40px 0'
                    color='#040814'
                >
                    Personagens
                </Text>
                <Wrap
                    spacing='32px'
                    align='center'
                    width='100%'
                >
                        {characters.map((character, index) => (
                            <Card
                                onClick={onOpen}
                                borderRadius='8px'
                                key={index}
                                cursor='pointer'
                            >
                                <Box
                                    width='280px'
                                    height='280px'
                                    flexDirection='column'
                                    borderRadius='8px 8px 0 0'
                                >
                                    <Image
                                        src={character.imageUrl}
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
                                        {character.name}
                                    </Text>
                                </Box>
                            </Card>
                        ))}
                </Wrap>
            </Box>

            <Modal
                size='400px'
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay  />
                <ModalContent
                display='flex'
                    width='600px'
                    height='700px'
                >
                    {/* <ModalCloseButton /> */}
                    <ModalHeader></ModalHeader>
                    <ModalBody
                        display='flex'
                        flexDir='column'
                        w='100%'
                        alignItems='center'
                    >
                        <Image
                            src="https://github.com/ecthon.png"
                            width='100px'
                            height='100px'
                            borderRadius='50px'
                        />
                        <Text
                            fontSize='1.25rem'
                            fontWeight='medium'
                            mt='1rem'
                        >
                            Nome do Personagem
                        </Text>

                        <Flex
                            width='100%'
                            height='350px'
                            // bg='red'
                            direction='column'
                            mt='40px'
                            overflow='auto'
                        >
                            <Text fontSize='0.75rem' fontWeight='medium' color='#838287'>PRAGRAMA(S)</Text>
                            <Divider />
                            <Text fontSize='0.75rem' fontWeight='medium' color='#838287'>SHOW(S)</Text>
                            <Divider />
                            <Text fontSize='0.75rem' fontWeight='medium' color='#838287'>FILME(S)</Text>
                            <Divider />
                        </Flex>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' onClick={onClose}>
                            Fechar
                        </Button>
                    </ModalFooter>
                </ModalContent>

            </Modal>
        </Box>
    )
}