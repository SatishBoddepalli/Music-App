import React from 'react'

function LibrarySong({song,songs,setCurrentSong,id,audioRef,isPlaying,setSongs}) {


        const songSelectHandler=()=>{
          
                setCurrentSong(song)
                

                if(isPlaying){
                    const playProm=audioRef.current.play();
                    if(playProm !== undefined){
                        playProm.then((audio)=>{
                            audioRef.current.play()
                        })
                    }
                }
        }


    return (
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ""} `}>
            <img src={song.cover} alt={song.name}/>
            <div className="song-description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
            </div>
            
        </div>
    )
}

export default LibrarySong
