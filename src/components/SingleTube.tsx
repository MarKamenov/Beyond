import * as React from 'react';
import styled from 'styled-components';
import BackArrow from '../assets/images/BackArrow';
import { Views } from '../types';
import SingleTubeVideo from './SingleTubeVideo';
import Button from './Button';
import { observer, inject } from 'mobx-react';
import PlayListsStore from '../store/Playlists';
import Description from './Description';
import { Flex, Box } from 'grid-styled';
import { IVideo } from '../types';
import { action } from 'mobx';

interface ISingleTube {
	className?: string;
	playlists: PlayListsStore;
	video: string;
}

@inject('playlists')
@observer
class SingleTube extends React.Component<ISingleTube> {
	constructor(props: ISingleTube) {
		super(props);
	}

	get injected() {
		return this.props as {
			playlists: PlayListsStore;
		};
	}

	public changeView(view: Views, refresh?: boolean) {
		this.injected.playlists.currentView = view;

		if (refresh) {
			this.fetchData();
		}
	}

	public fetchData() {
		this.injected.playlists.fetchChannels();
	}

	public render() {
		const single: IVideo = this.singleVideo();
		const tubeId = single.contentDetails.videoId;
		const snippet = single.snippet;
		return (
			<Flex className={this.props.className} flexDirection="column">
				<Flex className="main-wrapper" flexDirection="row">
					<Box className="tube-box">
						<SingleTubeVideo tubeId={tubeId || this.props.video} />
					</Box>
					<Box className="description-wrapper">
						<h5>{snippet.title}</h5>
						<Description published={snippet.publishedAt} description={snippet.description} />
						<Flex justifyContent="space-between" className="back">
							<Flex justifyContent="center" alignItems="center">
								<BackArrow />
								<Box ml={1}>
									<a onClick={() => this.changeView('default')} href="#" title="back arrow">
										Back to list
									</a>
								</Box>
							</Flex>
							<Flex className="button-wrapper">
								<Button onClick={this.getNextVideo}>next</Button>
								<Button onClick={this.getPrevVideo}>previous</Button>
							</Flex>
						</Flex>
					</Box>
				</Flex>
			</Flex>
		);
	}

	private singleVideo() {
		return this.props.playlists.playList[this.injected.playlists.pos];
	}

	@action.bound
	private getNextVideo() {
		this.injected.playlists.pos >= this.props.playlists.playList.length - 1
			? (this.injected.playlists.pos = 0)
			: (this.injected.playlists.pos += 1);
	}

	@action.bound
	private getPrevVideo() {
		this.injected.playlists.pos <= 0
			? (this.injected.playlists.pos = this.props.playlists.playList.length - 1)
			: (this.injected.playlists.pos -= 1);
	}
}

export default styled(SingleTube)`
	width: 100%;
	margin-top: 1rem;
	@media (min-width: 768px) {
		flex-direction: row;
	}

	.description-wrapper {
		position: relative;
		flex-grow: 1;
		margin-left: 1.8rem;
		max-height: 60vh;
	}

	.main-wrapper {
		flex-direction: column;
		@media (min-width: 768px) {
			flex-direction: row;
		}
	}

	.button-wrapper {
		@media (min-width: 768px) {
			position: absolute;
			bottom: 0;
		}
		& button:not(:first-child) {
			margin-left: 1rem;
		}
	}

	.tube-box {
		flex-grow: 2;
	}

	h5 {
		margin: 0;
		margin-top: 1rem;
		font-weight: bold;
		font-size: 1.2rem;
		color: ${props => props.theme.titleColor};
	}
	.back a {
		text-decoration: none;
		color: ${props => props.theme.titleColor};
	}
	.back a:hover {
		cursor: pointer;
	}
	.back span {
		vertical-align: middle;
	}
`;
