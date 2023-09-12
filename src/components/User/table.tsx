import {Button, Input, Skeleton, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from '@chakra-ui/react'
import {UserListProps} from '@/components/User/types'
import {User} from '@/model/user'

const UserTable = ({
   isLoading,
   users,
   onDetail,
}: UserListProps) => (
    <TableContainer>
        <Table>
            <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Company</Th>
                    <Th isNumeric>Actions</Th>
                </Tr>
                <Tr>
                    <Th><Input placeholder='Find by name' /></Th>
                    <Th />
                    <Th />
                </Tr>
            </Thead>
            <Tbody>
                {isLoading ? [...Array(10)].map((_, index) => (
                    <Tr key={index}>
                        <Td><Skeleton height='20px' /></Td>
                        <Td><Skeleton height='20px' /></Td>
                        <Td><Skeleton height='20px' /></Td>
                    </Tr>
                )) : users.map((user: User) => (
                    <Tr key={user.id}>
                        <Td>{user.name}</Td>
                        <Td>{user.company.name}</Td>
                        <Td isNumeric>
                            <Button onClick={() => onDetail(user.id)} colorScheme='teal' size='xs'>
                                Detail
                            </Button>
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    </TableContainer>
)

export default UserTable