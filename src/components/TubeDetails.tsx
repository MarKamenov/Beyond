import * as React from 'react';
import { Box } from 'grid-styled';
import TubeVideo from './TubeVideos';
import Description from './Description';
import { IVideo } from '../types';

interface ITubeDetailsProps {
	className?: string;
	tube: IVideo;
}

const TubeDetails: React.SFC<ITubeDetailsProps> = ({ className, tube }) => {
	const { videoId } = tube.contentDetails;
	const published = tube.snippet.publishedAt;
	return (
		<Box className={className}>
			<TubeVideo title={tube.snippet.title} tubeId={videoId} />
			<Description published={published} description={tube.snippet.description} />
		</Box>
	);
};

export default TubeDetails;
