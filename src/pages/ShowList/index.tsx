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
    useDisclosure,
    Button,
    Flex,
    Divider,
    Stack,
    WrapItem} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ICharacter } from "../../interfaces/character.interface";
import api from "../../services/api";
import '../../styles/glassCard.css'

export function ShowList() {
    const [characters, setCharacters] = useState<ICharacter[]>([]);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [oneCharacter, setOneCharacter] = useState<ICharacter>();

    useEffect(() => {
        getCharacters();
    }, [])

    async function getCharacters() {
        const response = await api.get('characters');
        const data = response.data.data;
        console.log(data)
        setCharacters(data);
    }

    async function getOneCharacter( id: number) {
        const character = await api.get(`characters/${id}`);
        setOneCharacter(character.data)
        onOpen(); 
    }

    return (
        // <Box
        //     width='100%'
        //     height='auto'
        //     bg='#040814'
        // >
        //     <Header />
        //     <Box
        //         width={{base: '100%', md:'100%', lg:'1216px'}}
        //         height='auto'
        //         margin='0 auto'
        //     >
        //         <Text
        //             fontSize={{base: '2rem', lg:'3rem'}}
        //             fontWeight='bold'
        //             margin={{base: '20px 32px', md:'20px 32px', lg: '40px 0'}}
        //             color='#918f8f'
        //         >
        //             Personagens
        //         </Text>
        <Box
            background='#040814'
        >
        <Header />
        <Flex
            maxWidth={{base:'90%', md:'90%', lg:'1216px'}}
            margin='0 auto'
        >
            <Text
                fontSize='2rem'
                fontWeight='medium'
                color='#c3c3c3'
                margin='32px 0'
            >
                Personagens
            </Text>
        </Flex>
        

                <Flex
                    gap='32px'
                    flexWrap='wrap'
                    maxWidth='1216px'
                    height='auto'
                    margin='0 auto'
                    mb='100px'
                    justifyContent={{base: 'center', md: 'center', lg: 'initial'}}
                >
                    {characters.map((character) => (
                    <Flex
                        key={character._id}
                        direction='column'
                        width='280px'
                        height='auto'
                        align='center'
                        borderRadius='8px'
                        bg='#fff'
                    >
                        <Box
                            width='100%'
                            height='270px'
                            padding='10px'
                        >
                            <Image
                                src={character.imageUrl}
                                boxSize='full'
                                objectFit='cover'
                                borderRadius='6px 6px 0 0'
                            />
                        </Box>

                        <Stack
                            spacing='2px'
                            width='100%'
                            padding='16px 10px'
                        >
                            <Text fontSize='12px'>Nome</Text>
                            <Text fontSize='1rem' fontWeight='medium'>{character.name}</Text>
                        </Stack>
                    </Flex>
                    ))}

                </Flex>
            <Footer />
        </Box>    
        //     </Box>

        //     <Modal
        //         size='400px'
        //         isOpen={isOpen}
        //         onClose={onClose}
        //     >
        //         <ModalOverlay  />
        //         <ModalContent
        //         display='flex'
        //             width='600px'
        //             height='700px'
        //         >
        //             {/* <ModalCloseButton /> */}
        //             <ModalHeader></ModalHeader>
        //             <ModalBody
        //                 display='flex'
        //                 flexDir='column'
        //                 w='100%'
        //                 alignItems='center'
        //             >
        //                 <Image
        //                     src={oneCharacter?.imageUrl}
        //                     width='100px'
        //                     height='100px'
        //                     borderRadius='50px'
        //                 />
        //                 <Text
        //                     fontSize='1.25rem'
        //                     fontWeight='medium'
        //                     mt='1rem'
        //                 >
        //                     {oneCharacter?.name}
        //                 </Text>

        //                 <Flex
        //                     width='100%'
        //                     height='350px'
        //                     direction='column'
        //                     mt='40px'
        //                     overflow='auto'
        //                 >
        //                     <Text fontSize='0.75rem' fontWeight='medium' color='#838287'>PRAGRAMA(S)</Text>
        //                     <Divider />
        //                     {oneCharacter?.tvShows.map( (item, index) => (
        //                         <ul key={index}><p>{item}</p></ul>
        //                     ))}
        //                     <Text fontSize='0.75rem' fontWeight='medium' color='#838287'>SHOW(S)</Text>
        //                     <Divider />
        //                     {oneCharacter?.shortFilms.map((item, index) => (
        //                         <ul key={index}><p>{item}</p></ul>
        //                     ))}
        //                     <Text fontSize='0.75rem' fontWeight='medium' color='#838287'>FILME(S)</Text>
        //                     <Divider />
        //                     {oneCharacter?.films.map((item, index) => (
        //                         <ul key={index}><p>{item}</p></ul>
        //                     ))}
        //                 </Flex>
        //             </ModalBody>

        //             <ModalFooter>
        //                 <Button colorScheme='blue' onClick={onClose}>
        //                     Fechar
        //                 </Button>
        //             </ModalFooter>
        //         </ModalContent>

        //     </Modal>
        //     <Footer />
        // </Box>
    )
}