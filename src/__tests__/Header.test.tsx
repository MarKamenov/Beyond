import 'jsdom-global/register';
import * as React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';

describe('Check if Header exists', () => {
	const wrapper = shallow(<Header />);
	it('renders App', () => {
		expect(wrapper).toHaveLength(1);
	});
});
