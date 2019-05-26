import { observable, action } from 'mobx';
import * as ApiService from '../services/apiServices';
import { Views } from '../types';

export default class PlayListsStore {
	@observable public playList: any[] = [];
	@observable public currentView: Views = 'default';
	@observable public videoId: string = '';

	public init() {
		this.fetchChannels();
	}

	@action
	public async fetchChannels() {
		try {
			const response = await ApiService.getChannels();
			this.playList = response.items;
		} catch (e) {
			throw e;
		}
	}
}
