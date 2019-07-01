import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow } from '../enzyme';
import { ExampleComponent } from './example.component';


test('Renders correctly', () => {
    const component = renderer.create(
        <ExampleComponent foo="world"></ExampleComponent>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Displays the correct message, based on passed in props', () => {
    const wrapper = shallow(<ExampleComponent foo="world"></ExampleComponent>);
    expect(wrapper.contains(<h1>Hello, world!</h1>));
});

test('The counter increases when the button is clicked', () => {
    const component = shallow(<ExampleComponent foo="world"></ExampleComponent>);
    expect(component.contains(<button >Count: 0</button>));
    component.find('button').at(0).simulate('click');
    expect(component.contains(<button >Count: 1</button>));
});
