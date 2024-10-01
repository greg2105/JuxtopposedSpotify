import adjust from '../assets/adjust.svg';

const MainMenu = () => {
    return (
        <div className="MainMenu">
            <div className="MenuButtonContainer">
                <button>All</button>
                <button>Music</button>
                <button>Podcasts</button>
                <button>Audiobooks</button>
            </div>
            <button className="adjustButton"><img src={adjust} alt="" /></button>
        </div>
    )
}

export default MainMenu;