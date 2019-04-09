import React from 'react';
import { shallow , configure} from 'enzyme';


import Adapter from 'enzyme-adapter-react-16';


import Login from './Login';
configure({ adapter: new Adapter() });



describe('Test case for testing login',() =>{

let wrapper;

test('username check',()=>
{
wrapper = shallow(<Login/>);

wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'Sundar'}});

expect(wrapper.state('username')).toEqual('Sundar');

})

it('password check',()=>{

wrapper = shallow(<Login/>);

wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'Sundar@123'}});

expect(wrapper.state('password')).toEqual('Sundar@123');

})

it('login check with right data',()=>{

wrapper = shallow(<Login/>);
wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'Sundar'}});

wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'Sundar@123'}});

wrapper.find('button').simulate('click');

expect(wrapper.state('isLogined')).toBe(true);

})

it('login check with wrong data',()=>{

wrapper = shallow(<Login/>);

wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'Sundar'}});

wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'Sundar@1234'}});

wrapper.find('button').simulate('click');

expect(wrapper.state('isLogined')).toBe(false);

})

})
