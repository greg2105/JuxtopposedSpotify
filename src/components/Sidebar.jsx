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
                <img src={pinsIcon} className="pins" />Pins</button>
            <button>
                <img src={playlistsIcon} className="playlists" />Playlists</button>
            <button>
                <img src={likedsongsIcon} className="likedsongs" />Liked songs</button>
            <button>
                <img src={savesIcon} className="saves" />Saves</button>
            <button>
                <img src={albumsIcon} className="albums" />Albums</button>
            <button>
                <img src={foldersIcon} className="folders" />Folders</button>
            <button>
                <img src={podcastsIcon} className="podcasts" />Podcasts</button>
            <button>
                <img src={audiobooksIcon} className="audiobooks" />Audiobooks</button>
            <button>
                <img src={artistsIcon} className="artists" />Artists</button>
        </div>
    ) 
}

export default Sidebar;