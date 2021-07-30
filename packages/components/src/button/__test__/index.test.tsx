import * as React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Button from '../index';

describe('Button', () => {
  it('snapshot', () => {
    const component = shallow(
      <Button>
        button
      </Button>,
    );
    expect(toJSON(component)).toMatchSnapshot();
  });

  it('onPress', () => {
    const onPress = jest.fn();
    const component = shallow(<Button onPress={onPress}>button</Button>);
    component.simulate('click');
    expect(onPress).toHaveBeenCalled();
  });
});
