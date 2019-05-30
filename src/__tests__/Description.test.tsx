import * as React from 'react';
import { shallow } from 'enzyme';
import Description from '../components/Description';

describe('Description props', () => {
	const props = {
		className: 'class-some',
		published: '11',
		description: 'test',
	};
	const wrapper = shallow(<Description {...props} />).shallow();

	it('renders Description', () => {
		expect(wrapper).toHaveLength(1);
	});

	it('check if description prop is correct', () => {
		const desc = props.description;
		expect(desc).toBe('test');
	});
});
