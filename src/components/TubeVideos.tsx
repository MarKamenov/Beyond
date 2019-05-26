import * as React from 'react';
import styled from 'styled-components';
import PlayButton from '../assets/images/PlayButton';
import { observer, inject } from 'mobx-react';
import PlayListsStore from '../store/Playlists';
import { Flex, Box } from 'grid-styled';

interface ITubes {
	className?: string;
	tubeId?: string;
	title?: string;
	playlists?: PlayListsStore;
}

@inject('playlists')
@observer
class TubeVideo extends React.Component<ITubes> {
	constructor(props: ITubes) {
		super(props);
	}

	get injected() {
		return this.props as {
			playlists: PlayListsStore;
		};
	}

	public render() {
		return (
			<Flex className={this.props.className} flexDirection="column">
				{this.props.tubeId !== null ? (
					<iframe
						style={{
							width: '100%',
							height: '100%',
							minHeight: '20rem',
						}}
						src={`https://www.youtube.com/embed/${this.props.tubeId}`}
						frameBorder="0"
					/>
				) : (
					<img alt="video" src={'https://via.placeholder.com/300x300?text=No Video'} />
				)}
				<Flex p="1rem" className="shadow" alignItems="center" justifyContent="space-between">
					<h5>{this.props.title}</h5>
					<Box className="svg-wrapper" title="go to full view" onClick={() => this.getVideo(this.props.tubeId)}>
						<PlayButton />
					</Box>
				</Flex>
			</Flex>
		);
	}

	private getVideo(id: any) {
		this.injected.playlists.videoId = id;
		this.injected.playlists.currentView = 'full';
	}
}

export default styled(TubeVideo)`
	position: relative;
	.shadow {
		position: absolute;
		bottom: 0;
		width: 100%;
		color: lime;
		background-color: rgba(0, 0, 0, 0.6);
		& h5 {
			margin: 0;
			font-weight: bold;
			font-size: 1.2rem;
			color: ${props => props.theme.titleColor};
		}
	}
	.svg-wrapper:hover {
		cursor: pointer;
	}
`;
