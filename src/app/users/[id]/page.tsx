'use client'
import {useGetUserByIdQuery} from '@/api/user'
import {User} from '@/model/user'
import {Box, Heading, Link, Skeleton, Text, VStack} from '@chakra-ui/react'
import PostList from '@/components/Post/list'

interface Props {
    params: {
        id: number
    }
}

const UserDetail = ({ params }: Props) => {
    const { isLoading, data }: {data: User} = useGetUserByIdQuery({id: params.id})

    return (
        <main>
            {isLoading ? (
                <Skeleton height='40px' width='300px'/>
            ) : (
                <VStack gap={4} align='start'>
                    <Heading as='h1'>{data.name}</Heading>
                    <Box>
                        <Heading as='h2' size='md'>Phone</Heading>
                        <Text><Link href={`tel:${data.phone}`}>{data.phone}</Link></Text>
                    </Box>
                    <Box>
                        <Heading as='h2' size='md'>Address</Heading>
                        <Text>{data.address.street}, {data.address.city} {data.address.zipcode}</Text>
                    </Box>
                    <Box>
                        <Heading as='h2' size='md' mb={2}>Posts</Heading>
                        <PostList userId={data.id} />
                    </Box>
                </VStack>
            )}
        </main>
    )
}

export default UserDetail