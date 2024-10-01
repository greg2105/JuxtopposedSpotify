import notifications from '../assets/notifications.svg';
import privateicon from '../assets/privateicon.svg';
import friends from '../assets/friends.svg';
import settings from '../assets/settings.svg';

const Nav = () => {
    return (
        <div className="Nav">
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