import { Pause, Play } from "./Player";
import { usePlayerStore } from "@/store/playerStore";

export function CardPlayButton({ id }) {

    const {
        isPlaying,
        setIsPlaying,
        currentMusic,
        setCurrentMusic
    } = usePlayerStore(state => state);

    const isPlayingPlayilist = isPlaying && currentMusic?.playlist.id === id;

    const handleClick = () => {

        if (isPlayingPlayilist) {
            setIsPlaying(false);
            return;
        }

        fetch(`/api/get-info-playlist-${id}.json`)
            .then(res => res.json())
            .then(data => {
                const { songs, playlist } = data;

                setIsPlaying(true);
                setCurrentMusic({
                    songs,
                    playlist,
                    song: songs[0],
                });
            });
    }


    return (
        <button onClick={handleClick} className="rounded-full bg-green-600 p-4">
            { isPlayingPlayilist ? <Pause /> : <Play /> }
        </button>
    )
}