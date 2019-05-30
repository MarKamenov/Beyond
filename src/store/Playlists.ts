import { observable, action } from 'mobx';
import * as ApiService from '../services/apiServices';
import { Views } from '../types';

export default class PlayListsStore {
	@observable public playList: any[] = [];
	@observable public currentView: Views = 'default';
	@observable public videoId: string = '';
	@observable public pos: number = 0;

	public init() {
		this.fetchChannels();
	}

	@action
	public async fetchChannels() {
		try {
			const response = await ApiService.getChannels();
			this.playList = response.items.sort((a: any, b: any) => {
				return a.snippet.position > b.snippet.position ? 1 : a.snippet.position < b.snippet.position ? -1 : 0;
			});
		} catch (e) {
			throw e;
		}
	}
}
