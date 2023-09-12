'use client'
import {
    Box,
    Button,
    Spinner,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerBody,
    DrawerFooter,
    VStack,
    Heading,
    Text,
    Divider,
} from '@chakra-ui/react'
import {Comment} from '@/model/comment'
import {useGetCommentsByPostIdQuery} from '@/api/comment'
import {useRef} from 'react'

interface Props {
    postId: number
}

const PostComments = ({
  postId
}: Props) => {
    const { isLoading, data }: {data: Comment[]} = useGetCommentsByPostIdQuery({postId})
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return (
        <Box align='stretch' gap={3}>
            {isLoading ? (
                <Spinner />
            ) : (
                <>
                    <Button ref={btnRef} onClick={onOpen}>{data?.length} {`comment${data?.length > 1 ? 's' : ''}`}</Button>
                    <Drawer
                        isOpen={isOpen}
                        placement='right'
                        onClose={onClose}
                        finalFocusRef={btnRef}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />

                            <DrawerBody>
                                <VStack align='stretch' py={12} gap={4}>
                                    {data.map((comment, index) => (
                                        <Box key={index} align='stretch'>
                                            <Heading as='p' size='xs'>{comment.name}</Heading>
                                            <Text>{comment.body}</Text>
                                            {index !== data.length - 1 && <Divider mt={4} />}
                                        </Box>
                                    ))}
                                    {!data?.length && (
                                        <Text>There is no comments to show.</Text>
                                    )}
                                </VStack>
                            </DrawerBody>

                            <DrawerFooter>
                                <Button variant='outline' mr={3} onClick={onClose}>
                                    Close
                                </Button>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </>
            )}
        </Box>
    )
}

export default PostComments