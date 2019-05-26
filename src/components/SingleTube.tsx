import * as React from 'react';
import styled from '../theme';
import BackArrow from '../assets/images/BackArrow';
import { Views } from '../types';
import SingleTubeVideo from './SingleTubeVideo';
import { observer, inject } from 'mobx-react';
import PlayListsStore from '../store/Playlists';
import Description from './Description';
import { Flex, Box } from 'grid-styled';
import { IVideo } from '../types';
import { computed } from 'mobx';

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
		const single: IVideo = this.singleVideo[0];

		return (
			<Flex className={this.props.className} flexDirection="column">
				<Flex className="main-wrapper" flexDirection="row">
					<Box className="tube-box">
						<SingleTubeVideo tubeId={this.props.video} />
					</Box>
					<Box className="description-wrapper">
						<h5>{single.snippet.title}</h5>
						<Description published={single.snippet.publishedAt} description={single.snippet.description} />
						<Box className="back">
							<span>
								<BackArrow />
							</span>
							<a onClick={() => this.changeView('default')} href="#" title="back arrow">
								{' '}
								Back to list
							</a>
						</Box>
					</Box>
				</Flex>
			</Flex>
		);
	}

	@computed
	private get singleVideo() {
		return (
			this.props.playlists &&
			this.props.playlists.playList.filter(video => video.contentDetails.videoId === this.props.video)
		);
	}
}

export default styled(SingleTube)`
	width: 100%;
	margin-top: 1rem;
	@media (min-width: 768px) {
		flex-direction: row;
	}

	.description-wrapper {
		flex-grow: 1;
		margin-left: 1.8rem;
	}

	.main-wrapper {
		flex-direction: column;
		@media (min-width: 768px) {
			flex-direction: row;
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
