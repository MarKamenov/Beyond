import * as React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import { Box } from 'grid-styled';

interface INavBarProps {
	className?: string;
	published: string;
	description: string;
}

const UnstyledDescription: React.SFC<INavBarProps> = ({ className, published, description }) => (
	<Box className={className} mt={'1rem'}>
		<Box>{`Published on ${format(new Date(published), 'MMM D')},  ${format(new Date(published), ' YYYY')}`}</Box>
		<p>{description}</p>
	</Box>
);

const Description = styled(UnstyledDescription)`
	& > div {
		font-weight: 700;
		color: rgb(255, 255, 255, 0.6);
	}
	p {
		word-break: break-word;
		font-family: 'Alfa Slab One, Regular';
		line-height: 1.2rem;
		color: #afaeae;
	}
`;

export default Description;
