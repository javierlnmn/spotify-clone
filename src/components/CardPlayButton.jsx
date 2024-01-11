import { Pause, Play } from "./Player"

export function CardPlayButton({ id }) {
    return (
        <div className="rounded-full bg-green-600 p-4">
            <Play />
        </div>
    )
}