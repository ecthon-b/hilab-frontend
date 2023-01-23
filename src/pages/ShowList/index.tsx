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
    Button} from "@chakra-ui/react";
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

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Título</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>Body do modal</Text>
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