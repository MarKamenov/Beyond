import * as React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import PlayListsStore from '../store/Playlists';
import { Box } from 'grid-styled';

interface ITubes {
	className?: string;
	tubeId?: string;
	playlists?: PlayListsStore;
}

@inject('playlists')
@observer
class SingleTubeVideo extends React.Component<ITubes> {
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
			<Box className={this.props.className}>
				{this.props.tubeId !== null ? (
					<iframe
						style={{
							width: '100%',
							height: '100%',
							minHeight: '60vh',
							minWidth: '55vw',
						}}
						src={`https://www.youtube.com/embed/${this.props.tubeId}`}
						frameBorder="0"
						allowFullScreen
					/>
				) : (
					<img alt="video" src={'https://via.placeholder.com/300x300?text=No Video'} />
				)}
			</Box>
		);
	}
}

export default styled(SingleTubeVideo)``;
