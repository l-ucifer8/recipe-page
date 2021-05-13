import { useRef } from 'react'
import ReactPlayer from 'react-player'
function Rplayer() {
    const ref = useRef()
    return (
        <div className="max-w-xl max-h-xl min-h-1/2 min-w-1/4 mt-10 mx-5 lg:max-w-xl lg:ml-36">
            <ReactPlayer
            ref = {ref}
            url = 'https://manifest.prod.boltdns.net/manifest/v1/hls/v4/clear/1033249144001/b10c0079-ff51-476a-8f04-290a6155db10/10s/master.m3u8?fastly_token=NjA5ZTA1NjdfZjc5NTIwZjQwZWUzOGI1ODgyYjZhYzViYzc4NTBmZDI3ODgyYmI2NDYyNzU1YTE5ODIyYTBkZWQ3NDRjNzIwMw%3D%3D'
            // onPlay = {()=>{
            //     ref.current.getCurrentTime() <6 ? ref.current.seekTo(6,"seconds"): null
            // }}
            onSeek = {()=>{
                ref.current.getCurrentTime() <9 ? ref.current.seekTo(9,"seconds"): null
            }}
            width = "100%"
            height = "100%"
            controls = {true}
            config = {
                {
                    file : {
                        hlsOptions: {
                            "startPosition" : 9
                        }
                    }
                }
            }
          />
        </div>
    )
}

export default Rplayer
