import * as React from 'react';
import { Box } from 'grid-styled';
import * as headerBg from '../assets/images/header_bg.png';
import * as logo from '../assets/images/MusicPlay_logo.png';
import styled from 'styled-components';

interface IHeaderProps {
	className?: string;
}

const UnstyledHeader = (props: IHeaderProps) => {
	const { className } = props;
	return (
		<header style={{ backgroundImage: `url(${headerBg})` }} className={className}>
			<Box className="logo" ml={'3rem'} mt={'1rem'}>
				<a href="#">
					<img src={logo} alt="logo" />
				</a>
			</Box>
		</header>
	);
};

const Header = styled(UnstyledHeader)`
	height: 2.5rem;
	position: relative;
	.logo {
		img {
			width: 15rem;
		}
		a:hover {
			cursor: initial;
		}
	}
`;
export default Header;
