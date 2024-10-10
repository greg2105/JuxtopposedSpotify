import adjust from '../assets/adjust.svg';
import { useState } from 'react';

const MainMenu = () => {
    const [activeMenuItem, setActiveMenuItem] = useState(0);

    const handleMenuItemClick = (menuItemIndex) => {
        setActiveMenuItem(menuItemIndex);
    };
    
    return (
        <div className="MainMenu">
            <div className="MenuButtonContainer">
                <button className={`All${activeMenuItem === 0 ? 'active' : ''}`}onClick={() => handleMenuItemClick(0)}>All</button>
                <button className={`Music${activeMenuItem === 1 ? 'active' : ''}`}onClick={() => handleMenuItemClick(1)}>Music</button>
                <button className={`Podcasts${activeMenuItem === 2 ? 'active' : ''}`}onClick={() => handleMenuItemClick(2)}>Podcasts</button>
                <button className={`Audiobooks${activeMenuItem === 3 ? 'active' : ''}`}onClick={() => handleMenuItemClick(3)}>Audiobooks</button>
            </div>
            <button className="adjustButton"><img src={adjust} alt="" /></button>
        </div>
    )
}

export default MainMenu;