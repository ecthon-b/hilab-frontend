import {
    Box,
    Image,
    Text,
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
    Stack} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ICharacter, IPageProps } from "../../interfaces/character.interface";
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import { AiOutlineInfoCircle } from 'react-icons/ai'

import api from "../../services/api";
import '../../styles/glassCard.css'

export function ShowList() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [characters, setCharacters] = useState<ICharacter[]>([]);
    const [pageData, setPageData] = useState<IPageProps>();
    const [ count, setCount ] = useState(1);
    const [oneCharacter, setOneCharacter] = useState<ICharacter>();

    useEffect(() => {
        getCharacters();
    }, [count])

    async function getCharacters() {
        const response = await api.get(`characters/?page=${count}`);
        const data = response.data.data;
        const page = response.data
        setCharacters(data);
        setPageData(page);
    }

    async function getOneCharacter( id: number) {
        const character = await api.get(`characters/${id}`);
        setOneCharacter(character.data)
        onOpen(); 
    }

    function nextPage() {
        setCount(count + 1)
        window.scrollTo({
            top: 0,
            behavior:'smooth'
        })
    }

    function previousPage() {
        setCount(count - 1)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
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
                mb='32px'
                justifyContent={{base: 'center', md: 'center', lg: 'initial'}}
            >
                {characters.map((character) => (
                <Flex
                    className="glass"
                    onClick={()=> getOneCharacter(character._id)}
                    key={character._id}
                    direction='column'
                    width='280px'
                    height='auto'
                    align='center'
                    borderRadius='8px'
                    bg='#fff'
                    cursor='pointer'
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
                        <Flex justifyContent='space-between'>
                            <Text fontSize='1rem' fontWeight='medium'>{character.name}</Text>
                            <AiOutlineInfoCircle color='#90959a' size='20' />
                        </Flex>
                    </Stack>
                </Flex>
                ))}
            </Flex>

            <Flex
                maxWidth='1216px'
                margin='0 auto'
                align='center'
                justifyContent='center'
            >

                <Button
                    isDisabled={count === 1}
                    background='transparent'
                    border='1px solid transparent'
                    color='#491faa'
                    mr='4px'
                    _hover={{
                        background: 'transparent',
                        border: '1px solid #1b202e',
                        color: '#6421ff'
                    }}
                    onClick={previousPage}
                >
                    <MdNavigateBefore size={24} /><Text fontWeight='normal'>Voltar</Text>
                </Button>

                <Text color='#3b3e47' padding='16px 32px'>{count}/{pageData?.totalPages}</Text>
                
                <Button
                    isDisabled={count === pageData?.totalPages}
                    background='transparent'
                    border='1px solid transparent'
                    color='#491faa'
                    _hover={{
                        background: 'transparent',
                        border: '1px solid #1b202e',
                        color: '#6421ff'
                    }}
                    onClick={nextPage}
                >
                    <Text fontWeight='normal'>Próximo</Text><MdNavigateNext size={24} />
                </Button>
            </Flex>
            
            <Footer />

        <Modal
            size='400px'
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay  />
            <ModalContent
            display='flex'
                width={{base:'90%', md:'90%', lg:'500px'}}
                height={{base:'auto', md: 'auto', lg: '660px'}}
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
                        src={oneCharacter?.imageUrl}
                        width='100px'
                        height='100px'
                        borderRadius='50px'
                        border='4px solid #f6f5fd'
                    />
                    <Text
                        fontSize={{base: '1rem', md:'1rem', lg:'1.25rem'}}
                        fontWeight='medium'
                        padding='2px 16px'
                        borderRadius='50px'
                            bg='#f6f5fd'
                        mt='1rem'
                    >
                        {oneCharacter?.name}
                    </Text>

                    <Flex
                        width='100%'
                        height={{base: 'auto', md: 'auto',lg: '350px'}}
                        direction='column'
                        mt='40px'
                        overflow='auto'
                        bg='#f6f5fd'
                        padding='10px'
                        borderRadius='8px'
                    >
                        <Text fontSize='0.75rem' fontWeight='medium' color='#838287'>PRAGRAMA(S) DE TV</Text>
                        <Divider mb={{base: '8px', md:'8px', lg:'16px'}}/>
                        {oneCharacter?.tvShows.map( (item, index) => (
                            <ul key={index}><p>{item}</p></ul>
                        ))}
                        <Text fontSize='0.75rem' fontWeight='medium' color='#838287'>SHOW(S)</Text>
                            <Divider mb={{base: '8px', md:'8px', lg:'16px'}} />
                        {oneCharacter?.shortFilms.map((item, index) => (
                            <ul key={index}><p>{item}</p></ul>
                        ))}
                        <Text fontSize='0.75rem' fontWeight='medium' color='#838287'>FILME(S)</Text>
                            <Divider mb={{base: '8px', md:'8px', lg:'16px'}} />
                        {oneCharacter?.films.map((item, index) => (
                            <ul key={index}><p>{item}</p></ul>
                        ))}
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