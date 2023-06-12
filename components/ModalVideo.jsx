import { useRef } from 'react'
import { BiX } from 'react-icons/bi'


const ModalVideo = ({ showVideo, setShowVideo}) => {

    const vidRef = useRef(null)

    function stopVideo() {
        vidRef.current.pause();
        vidRef.current.currentTime = 0;
    }

    return (
        <div className="flex flex-col md:flex-row items-end md:items-start gap-4 w-[95%] md:w-[80%] xl:w-[70%]">

            <video ref={vidRef} controls className="w-full aspect-video order-2 md:order-1">
                <source src='/2023.mp4' type="video/mp4" />
            </video>
            
            <div
                onClick={() => { setShowVideo(false); stopVideo() }}
                className="text-white cursor-pointer p-0 order-1 md:order-2">
                <BiX className="text-4xl" />
            </div>
        </div>
    )
}

export default ModalVideo