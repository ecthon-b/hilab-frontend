import { Flex, Link, Text, textDecoration } from "@chakra-ui/react";

export function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <Flex
            as='footer'
            width='100%'
            height='70px'
            alignItems='center'
            justifyContent='center'
            bg='#04020a'
        >
            <Text
                color='#454953'
            >
                © {currentYear} - Code by
            </Text>

            <Text
                color='#454953'
                ml='4px'
                textDecor='none'
                _hover={{
                    color: '#6421ff',
                }}
            >
                <Link
                    textDecor='none'
                    _hover={{ textDecoration: 'none'}}
                    href='https://www.linkedin.com/in/ecthon/'
                    target='_blank'>
                        @ecthon
                    </Link>
            </Text>
        </Flex>
    )
}