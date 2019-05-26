import * as React from 'react';
import { Flex } from 'grid-styled';
import TubeDetails from './TubeDetails';
import styled from 'styled-components';

interface ITubeItems {
	className?: string;
	items: any;
}

class UnstyledVideosList extends React.Component<ITubeItems> {
	public render() {
		const { className, items } = this.props;

		return (
			items &&
			items.map((movie: any) => (
				<Flex key={movie.id} mb={3} flexDirection="column" className={className}>
					<Flex className="videos-main" flexDirection="column">
						<TubeDetails tube={movie} />
					</Flex>
				</Flex>
			))
		);
	}
}

const VideosList = styled(UnstyledVideosList)`
	margin: 1rem;
	flex-grow: 1;
	color: black;
	@media (min-width: 768px) {
		margin: 1rem;
		width: 31%;
		flex-grow: 1;
		color: black;
	}

	.videos-main {
		flex-grow: 1;
	}
`;

export default VideosList;
