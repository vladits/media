import { GoTrash } from 'react-icons/go';
import Button from './Button';
import { removeUser } from '../store';
import { useThunk } from '../hooks/use-thunk';
import ExpandablePanel from './ExpadablePanel';
import AlbumsList from './AlbumsList';

function UsersListItem({ user}) {
    const [doRemoveUser, isLoading, error] = useThunk(removeUser);

    const handleTrashClick = () => doRemoveUser(user);

    const header = <>
        <Button className="mr-3" loading={isLoading} onClick={handleTrashClick}>
            <GoTrash />
        </Button>
        { error && <div>Error deleting user.</div>}
        {user.name}
    </>;

    return (
        <ExpandablePanel header={header}>
            <AlbumsList user={user}/>
        </ExpandablePanel>
    );
}

export default UsersListItem;