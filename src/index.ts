import { fetch } from 'undici';
import { fetchResult, lyrics, searchResult } from './types';
export class lyricFinder {
    private baseURI = "https://www.lyricfinder.xyz/api";
    public async search(query: string) {
        const JsonBrowser = await fetch(`${this.baseURI}/song?search=${encodeURIComponent(query)}`, { headers: { origin: this.baseURI }})
        return JsonBrowser.json() as Promise<searchResult>;
    }

    public async fetchLyrics(songId: number) {
        const JsonBrowser = await fetch(`${this.baseURI}/song?id=${encodeURIComponent(songId)}`, { headers: { origin: this.baseURI }})
        return JsonBrowser.json() as Promise<fetchResult>;
    }

    public async searchByTitleAndArtist(title: string, artist: string) {
        const JsonBrowser = await fetch(`${this.baseURI}/song?title=${encodeURIComponent(title)}&artist=${encodeURIComponent(artist)}`, { headers: { origin: this.baseURI }})
        return JsonBrowser.json() as Promise<lyrics | {}>;
    }
}