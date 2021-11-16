import { fetchResult, lyrics, searchResult } from './types';
export declare class lyricFinder {
    private baseURI;
    search(query: string): Promise<searchResult>;
    fetchLyrics(songId: number): Promise<fetchResult>;
    searchByTitleAndArtist(title: string, artist: string): Promise<{} | lyrics>;
}
//# sourceMappingURL=index.d.ts.map