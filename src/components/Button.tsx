import * as React from 'react';
import styled from 'styled-components';
import { Box } from 'grid-styled';

export interface IButtonProps {
	className?: string;
	onClick?: (event: React.MouseEvent) => void;
	children?: React.ReactNode;
}

const UnStyledButton = ({ onClick, children, className }: IButtonProps) => (
	<button className={className} onClick={onClick}>
		<Box className="content">{children}</Box>
	</button>
);

const Button = styled(UnStyledButton)`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 2rem;
	min-width: 4rem;
	color: white;
	background-color: ${props => props.theme.titleColor};
	border-radius: ${props => props.theme.radius};
	padding: 0.5rem;
	white-space: nowrap;
	cursor: pointer;
	box-sizing: border-box;
	outline: none;
	&:focus,
	&:active {
		outline: none;
	}
`;

export default Button;
