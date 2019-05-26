import * as React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { Flex } from 'grid-styled';
import VideosList from './components/VideosList';
import PlayListsStore from './store/Playlists';
import SingleTube from './components/SingleTube';
import Header from './components/Header';
import * as mainBckg from './assets/images/main_bg.png';

interface IAppProps {
	className?: string;
}

@inject('playlists')
@observer
class UnstyledApp extends React.Component<IAppProps> {
	constructor(props: IAppProps) {
		super(props);
	}

	get injected() {
		return this.props as {
			playlists: PlayListsStore;
		};
	}

	public render() {
		const views = {
			default: VideosList,
			full: SingleTube,
		};
		const { playList, currentView } = this.injected.playlists;
		const CurrentView = views[currentView];
		return (
			<Flex
				style={{ background: `url(${mainBckg})` }}
				width={1}
				flexDirection="column"
				className={this.props.className}
			>
				<Header />
				<Flex flex={1} className="videos-wrapper" flexWrap="wrap">
					{CurrentView && (
						<CurrentView items={playList} playlists={this.injected.playlists} video={this.injected.playlists.videoId} />
					)}
				</Flex>
			</Flex>
		);
	}
}

const App = styled(UnstyledApp)`
	height: 100%;
	.videos-wrapper {
		padding: 1rem;
		@media (min-width: 768px) {
			padding: 4rem;
		}
	}
`;
export default App;
