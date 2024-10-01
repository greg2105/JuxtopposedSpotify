import greenPlay from '../assets/greenPlay.svg';
import prev from '../assets/prev.svg';
import next from '../assets/next.svg';
import shuffle from '../assets/shuffle.svg';
import loop from '../assets/loop.svg';

const SongPlayer = () => {
    return (
        <div className="SongPlayer">
            <div className="songPlayerButtons">
                <button className="playButton"><img src={greenPlay} alt="" /></button>
                <button className="prev"><img src={prev} alt="" /></button>
                <button className="next"><img src={next} alt="" /></button>
                <button className="shuffle"><img src={shuffle} alt="" /></button>
                <button className="loop"><img src={loop} alt="" /></button>
            </div>
        </div>
    )
}

export default SongPlayer;