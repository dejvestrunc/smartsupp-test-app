import {UserListProps} from '@/components/User/types'
import {SimpleGrid, Card, CardBody, Button, Heading, Text, Skeleton, Avatar, VStack} from '@chakra-ui/react'

const UserGrid = ({
  isLoading,
  users,
  onDetail,
}: UserListProps) => (
    <SimpleGrid columns={3} gap={4}>
        {isLoading ? [...Array(10)].map((_, index) => (
            <Card key={index}>
                <CardBody>
                    <Skeleton height='20px' />
                </CardBody>
            </Card>
        )) : users.map((user) => (
            <Card key={user.id}>
                <CardBody>
                    <VStack spacing={0}>
                        <Avatar size='md' name={user.name} mb={3}/>
                        <Heading as='h2' size='sm' mb={1}>{user.name}</Heading>
                        <Text mb={3}>{user.company.name}</Text>
                        <Button onClick={() => onDetail(user.id)} colorScheme='teal' size='sm' width='100%'>
                            Detail
                        </Button>
                    </VStack>
                </CardBody>
            </Card>
        ))}
    </SimpleGrid>
)

export default UserGrid