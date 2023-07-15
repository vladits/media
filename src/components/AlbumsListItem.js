import { GoTrash } from "react-icons/go";
import Button from "./Button";
import ExpandablePanel from "./ExpadablePanel";
import { useRemoveAlbumMutation } from "../store/apis/albumsApi";
import PhotosList from "./PhotosList";

function AlbumsListItem({album}) {
    const [removeAlbum, result] = useRemoveAlbumMutation();

    const handleTrashClick = () => {
        removeAlbum(album);
        console.log(result);
    }
    const header = <>
        <Button loading={result.isLoading} className="mr-2" onClick={handleTrashClick}>
            <GoTrash />
        </Button>
        {album.title}
    </>;

    return <ExpandablePanel header={header}>
        <PhotosList album={album} />
    </ExpandablePanel>; 
}

export default AlbumsListItem;