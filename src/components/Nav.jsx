import { useState, useEffect } from 'react';

// importing the icons
import notifications from '../assets/notifications.svg';
import privateicon from '../assets/privateicon.svg';
import friends from '../assets/friends.svg';
import settings from '../assets/settings.svg';
import library from '../assets/library.svg';
import homeSelected from '../assets/homeSelected.svg';
import librarySelected from '../assets/librarySelected.svg';
import discoverSelected from '../assets/discoverSelected.svg';
import searchSelected from '../assets/searchSelected.svg';
import homeUnselected from '../assets/homeSelected.svg';
import libraryUnselected from '../assets/librarySelected.svg';
import discoverUnselected from '../assets/discoverSelected.svg';
import searchUnselected from '../assets/searchSelected.svg';

const Nav = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [homeImgSource, setHomeImg] = useState(homeUnselected);
    const [discoverImgSource, setDiscoverImg] = useState(discoverUnselected);
    const [searchImgSource, setSearchImg] = useState(searchUnselected);

    useEffect(() => {
        switch (activeTab) {
            case 0:
                setHomeImg(homeSelected);
                setDiscoverImg(discoverUnselected);
                setSearchImg(searchUnselected);
                break;
            case 1:
                setHomeImg(homeUnselected);
                setDiscoverImg(discoverSelected);
                setSearchImg(searchUnselected);
                break;
            case 2:
                setHomeImg(homeUnselected);
                setDiscoverImg(discoverUnselected);
                setSearchImg(searchSelected);
                break;
            default:
                setHomeImg(homeUnselected);
                setDiscoverImg(discoverUnselected);
                setSearchImg(searchUnselected);
                break;
        }
    }, [activeTab]);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    return (
        <div className="Nav">
            <button className="myLibrary"><img src={library} alt="" />My Library</button>
            <div className="navLeftTabs">
                <button className={`HomeButton${activeTab === 0 ? 'active' : ''}`} onClick={() => handleTabClick(0)}><img src={homeImgSource} alt="" /></button>
                <button className={`DiscoverButton${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}><img src={discoverImgSource} alt="" /></button>
                <button className={`SearchButton${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}><img src={searchImgSource} /></button>
            </div>
            <div className="navRightIcons"> 
                <button className="notificationsButton"><img src={notifications} alt="" /></button> 
                <button className="privateButton"><img src={privateicon} alt="" /></button> 
                <button className="friendsButton"><img src={friends} alt="" /></button>
                <button className="settingsButton"><img src={settings} alt="" /></button>
                <button className="profileButton"><img src={settings} alt="" /></button>
            </div>
        </div>
    )
}

export default Nav;