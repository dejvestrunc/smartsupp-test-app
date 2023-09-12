'use client'
import {Flex, Heading, IconButton, Link, Spacer} from '@chakra-ui/react'
import {DragHandleIcon, HamburgerIcon} from '@chakra-ui/icons'
import UserTable from '@/components/User/table'
import UserGrid from '@/components/User/grid'
import {useGetUsersQuery} from '@/api/user'
import {useRouter} from 'next/navigation'
import {useAppDispatch, useAppSelector} from '@/store/hooks'
import {switchToGrid, switchToTable} from '@/store/slices/viewSlice'

const Users = () => {
    const { isLoading, data, error } = useGetUsersQuery()
    const view = useAppSelector((store) => store.view.value)
    const dispatch = useAppDispatch()
    const router = useRouter()

    const handleOpenDetail = (id: number) => router.push(`/users/${id}`)

    return (
        <main>
            <Flex gap={4} mb={2}>
                <Heading as='h1'>Users</Heading>
                <Spacer />
                <Flex gap={2}>
                    <IconButton
                        onClick={() => dispatch(switchToTable())}
                        aria-label='Table view'
                        icon={<HamburgerIcon />}
                        colorScheme={view === 'table' ? 'teal' : 'gray'}
                    />
                    <IconButton
                        onClick={() => dispatch(switchToGrid())}
                        aria-label='Grid view'
                        icon={<DragHandleIcon />}
                        colorScheme={view === 'grid' ? 'teal' : 'gray'}
                    />
                </Flex>
            </Flex>

            {!error && view === 'table' ?
                <UserTable users={data} isLoading={isLoading} onDetail={handleOpenDetail} /> :
                <UserGrid users={data} isLoading={isLoading} onDetail={handleOpenDetail} />
            }

            {error && (
                <div>An error occurred during data loading. Try to <Link onClick={() => router.refresh()}>refresh the page</Link>.</div>
            )}
        </main>
    )
}

export default Users