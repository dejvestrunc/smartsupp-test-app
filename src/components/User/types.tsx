import {User} from '@/model/user'

export interface UserListProps {
    isLoading: boolean;
    users: User[];
    onDetail: (id: number) => void;
}