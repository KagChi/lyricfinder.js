"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lyricFinder = void 0;
const undici_1 = require("undici");
class lyricFinder {
    constructor() {
        this.baseURI = "https://www.lyricfinder.xyz/api";
    }
    async search(query) {
        const JsonBrowser = await (0, undici_1.fetch)(`${this.baseURI}/song?search=${encodeURIComponent(query)}`, { headers: { origin: this.baseURI } });
        return JsonBrowser.json();
    }
    async fetchLyrics(songId) {
        const JsonBrowser = await (0, undici_1.fetch)(`${this.baseURI}/song?id=${encodeURIComponent(songId)}`, { headers: { origin: this.baseURI } });
        return JsonBrowser.json();
    }
    async searchByTitleAndArtist(title, artist) {
        const JsonBrowser = await (0, undici_1.fetch)(`${this.baseURI}/song?title=${encodeURIComponent(title)}&artist=${encodeURIComponent(artist)}`, { headers: { origin: this.baseURI } });
        return JsonBrowser.json();
    }
}
exports.lyricFinder = lyricFinder;
