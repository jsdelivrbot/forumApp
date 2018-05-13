import * as React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as sinon from 'sinon';

// import { HomeComponentProps } from '../../src/components/HomeComponent/IHomeComponentProps';
// import HomeComponent from '../../src/components/HomeComponent/HomeComponent';
import { adapter } from '../enzymeAdapter';

adapter;

// const homeProps: HomeComponentProps = {
//   text: 'Hello',
//   change: true,
//   handleChange: () => { },
//   handleClick: () => { },
//   error: false
// };

// 

describe('Home component tests', () => {

  // it('should find the home button', () => {

  //   let wrapper = shallow(<HomeComponent {...homeMock} />);
  //   expect(wrapper.find('.home__button')).to.have.length(1);
    
  // });

  // it('should not find the error message', () => {

  //   let wrapper = shallow(<HomeComponent {...homeMock} />);
  //   expect(wrapper.find('.home__error')).to.have.length(0);
  // });

  // it('should find the error message', () => {

  //   let wrapper = shallow(<HomeComponent {...homeMock} error={true} />);
  //   expect(wrapper.find('.home__error')).to.have.length(1);
  // });

  // it('should show the change message', () => {

  //   let wrapper = shallow(<HomeComponent {...homeMock} change={true} />);
  //   expect(wrapper.find('.home__changed')).to.have.length(1);
  // });

  // it('should check the message', () => {

  //   let wrapper = shallow(<HomeComponent {...homeMock} />);
  //   expect(wrapper.find('.home__text')).to.have.length(1);
  // });

});