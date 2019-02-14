import React from 'react';
import { shallow } from 'enzyme';
import WorkModal from '../js/work-modal';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const myExample= {
    'title': "React-Portfolio",
    'href': "https://portfolio.donaldtoombs.com",
    'desc': "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum",
    'image': {
        'desc': "example screenshot of a project involving chemistry",
        'src':"images/example1.png",
        'comment':"",
    }
};

describe("WorkModal component", () => {
    let component = shallow(<WorkModal example={myExample} />);

    let anchors = component.find("a");

    it("Should contain a single 'a' element", () => {
        expect(anchors.length).toEqual(1);
    })

    it("Should Link to our Project", () => {
        expect(anchors.prop('href')).toEqual(myExample.href);
    })
})