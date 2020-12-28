import React,{useState,useRef} from 'react'
import './App.css';
import Player from './components/Player';
import Song from './components/Song';
import data from './util'
import Library from './components/Library'
import Nav from './components/Nav';



function App() {

    const audioRef=useRef(null);

    const [songs,setSongs]=useState(data());
    const [currentSong,setCurrentSong]=useState(songs[0])
    const [isPlaying,setIsPlaying]=useState(false)
    const [songInfo,setSongInfo]=useState({
        currentTime:0,
        duration:0
    })
    const [libraryStatus,setLibraryStatus]=useState(false)

    const timeUpdateHandler=(e)=>{
        const current=e.target.currentTime
        const duration=e.target.duration
        setSongInfo({...songInfo,currentTime:current,duration:duration})
    }
    

        return(
            <div>

            <Nav 
            libraryStatus={libraryStatus}
            setLibraryStatus={setLibraryStatus}
            />
           

            <Song currentSong={currentSong}/>    
            <Player
            audioRef={audioRef}
            currentSong={currentSong}
            setIsPlaying={setIsPlaying}
            isPlaying={isPlaying} 
            setSongInfo={setSongInfo}
            songInfo={songInfo} 
            songs={songs}
            setCurrentSong={setCurrentSong} 
            />
            <Library 
                songs={songs}
                setCurrentSong={setCurrentSong}
                songs={songs}
                audioRef={audioRef}
                isPlaying={isPlaying}
                setSongs={setSongs}
                libraryStatus={libraryStatus}
                
            />

            <audio
            onTimeUpdate={timeUpdateHandler}
            ref={audioRef} 
            src={currentSong.audio} 
            onLoadedMetadata={timeUpdateHandler}>   
            </audio>

            </div>
        )
   
    
}

export default App;
