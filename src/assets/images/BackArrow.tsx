import * as React from 'react';

interface ISvgBackArrosIconProps {
	className?: string;
	color?: string;
}

const BackArrow: React.SFC<ISvgBackArrosIconProps> = ({ color = '#50E3C2' }) => (
	<svg width="12px" height="15px" viewBox="0 0 12 15">
		<g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g id="back_arrow" fill={color}>
				<polygon
					id="Triangle"
					transform="translate(6.000000, 7.500000) scale(-1, 1) rotate(90.000000) translate(-6.000000, -7.500000) "
					points="6 2 13 13 -1 13"
				/>
			</g>
		</g>
	</svg>
);

export default BackArrow;
