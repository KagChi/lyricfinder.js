export interface searchResult {
    result: SearchLyricResult[] | null;
}
export interface SearchLyricResult {
    id: number;
    title: string;
    albumArt: string;
    url: string;
}
export interface fetchResult {
    result: lyrics | {};
}
export interface lyrics {
    id: number;
    title: string;
    url: string;
    lyrics: string;
    albumArt: string;
}
//# sourceMappingURL=index.d.ts.map