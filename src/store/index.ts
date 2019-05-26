import PlayListsStore from './Playlists';

export class Root {
	public playlists = new PlayListsStore();

	constructor() {
		Object.keys(this).forEach(storeName => this[storeName].init && this[storeName].init());
	}
}

const stores = new Root();

(window as any).stores = stores;

export default stores;
