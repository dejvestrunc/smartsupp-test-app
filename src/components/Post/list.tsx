'use client'
import {Card, CardBody, Heading, Text, VStack, HStack, Spinner} from '@chakra-ui/react'
import {useGetPostsByUserIdQuery} from '@/api/post'
import {Post} from '@/model/post'
import PostComments from '@/components/Post/comments'

interface Props {
    userId: number
}

const PostList = ({
    userId
}: Props) => {
    const { isLoading, data }: {data: Post[]} = useGetPostsByUserIdQuery({userId})

    return (
        <VStack align='stretch' gap={3}>
            {isLoading ? (
                <HStack>
                    <Spinner />
                    <Text>Posts are loading...</Text>
                </HStack>
            ) : data.map((post, index) => (
                <Card key={index}>
                    <CardBody>
                        <Heading as='h3' size='sm' mb={2}>{post.title}</Heading>
                        <Text mb={4}>{post.body}</Text>
                        <PostComments postId={post.id} />
                    </CardBody>
                </Card>
            ))}

            {!data?.length && (
                <Text>No posts found.</Text>
            )}
        </VStack>
    )
}

export default PostList