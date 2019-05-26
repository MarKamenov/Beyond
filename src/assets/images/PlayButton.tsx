import * as React from 'react';

interface ISvgPlayButtonProps {
	className?: string;
	color?: string;
}

const PlayButton: React.SFC<ISvgPlayButtonProps> = ({ color = '#50E3C2' }) => (
	<svg width="43px" height="43px" viewBox="0 0 43 43">
		<g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g id="play_button">
				<g id="Group-2" transform="translate(2.000000, 2.000000)">
					<polygon
						id="Triangle"
						fill={color}
						transform="translate(22.500000, 19.500000) rotate(90.000000) translate(-22.500000, -19.500000) "
						points="22.5 11 33 28 12 28"
					/>
					<circle id="Oval" stroke={color} strokeWidth="2" cx="19.5" cy="19.5" r="19.5" />
				</g>
			</g>
		</g>
	</svg>
);

export default PlayButton;
