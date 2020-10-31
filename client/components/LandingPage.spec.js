import React from 'react';
import { Link, MemoryRouter as Router } from 'react-router-dom';
import LandingPage from './LandingPage';
import enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

describe('react components', () => {
  const adapter = new Adapter();
  enzyme.configure({ adapter });
  // TEST LANDING PAGE
  describe('landing page component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <Router>
          <LandingPage />
        </Router>
      );
    });
    it('should link to /round when button is clicked', () => {
      expect(wrapper.find(Link)).to.have.lengthOf(1);
      expect(wrapper.find('Link').prop('to')).equal('/round');
    });
  });
});
