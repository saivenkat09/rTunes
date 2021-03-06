import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
	private searchUrl: string;
	private artistUrl: string;
	private albumsUrl: string;
	private albumUrl: string;

	constructor(private _http:Http){}
	searchArtist(str: string){
		this.searchUrl = 'http://ws.audioscrobbler.com/2.0/?method=artist.search&artist='+str+'&api_key=73a3a0eaa1cc2d3de22e5b6450ed6652&format=json&limit=10';
		return this._http.get(this.searchUrl).map(res => res.json());
	}

	getArtistInfo(name: string){
		this.artistUrl = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist='+name+'&api_key=73a3a0eaa1cc2d3de22e5b6450ed6652&format=json';
		return this._http.get(this.artistUrl).map(res => res.json());
	}

	getAlbums(name: string){
		this.albumsUrl = 'http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist='+name+'&api_key=73a3a0eaa1cc2d3de22e5b6450ed6652&format=json&limit=10';
		return this._http.get(this.albumsUrl).map(res => res.json());
	}

	getAlbumInfo(mbid: string){
		this.albumUrl = 'http://ws.audioscrobbler.com/2.0/?method=album.getinfo&mbid='+mbid+'&api_key=73a3a0eaa1cc2d3de22e5b6450ed6652&format=json';
		return this._http.get(this.albumUrl).map(res => res.json());
	}
}