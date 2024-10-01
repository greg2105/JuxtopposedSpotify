import pinsIcon from '../assets/pin.svg';
import playlistsIcon from '../assets/playlist.svg';
import likedsongsIcon from '../assets/like.svg';
import savesIcon from '../assets/saved.svg';
import albumsIcon from '../assets/album.svg';
import foldersIcon from '../assets/folder.svg';
import podcastsIcon from '../assets/podcast.svg';
import audiobooksIcon from '../assets/audiobook.svg';
import artistsIcon from '../assets/artist.svg';

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <button>
                <img src={pinsIcon} className="pins" /> pins </button>
            <button>
                <img src={playlistsIcon} className="playlists" />playlists</button>
            <button>
                <img src={likedsongsIcon} className="likedsongs" />likedsongs</button>
            <button>
                <img src={savesIcon} className="saves" />saves</button>
            <button>
                <img src={albumsIcon} className="albums" />albums</button>
            <button>
                <img src={foldersIcon} className="folders" />folders</button>
            <button>
                <img src={podcastsIcon} className="podcasts" />podcasts</button>
            <button>
                <img src={audiobooksIcon} className="audiobooks" />audiobooks</button>
            <button>
                <img src={artistsIcon} className="artists" />artists</button>
        </div>
    ) 
}

export default Sidebar;