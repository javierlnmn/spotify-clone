// This should fetch a database, but as it is a simpler app we will fetch our local files.

import { allPlaylists, songs as allSongs } from "@/lib/data";

export async function GET({ params }) {

    const playlistId = params.id;

    const playlist = allPlaylists.find(playlist => playlist.id === playlistId );
    const songs = allSongs.filter(song => song.albumId === playlist?.albumId);

    return new Response(JSON.stringify({playlist, songs}), {
        headers: {
            'content-type': 'application/json',
        }
    })
}