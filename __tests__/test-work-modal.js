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
    let mockCloseModalFn = jest.fn();
    let component = shallow(<WorkModal example={myExample} open={false} />);
    let openComponent = shallow(<WorkModal example={myExample} open={true} />);
    let closedComponent = shallow(<WorkModal example={myExample} closeModal={mockCloseModalFn} />);
    let anchors = component.find("a");

    it("Should contain a single 'a' element", () => {
        expect(anchors.length).toEqual(1);
    })

    it("Should Link to our Project", () => {
        expect(anchors.prop('href')).toEqual(myExample.href);
    })

    it("Should have the Modal Class Set correctly", () => {
        expect(component.find(".background--skyBlue").hasClass("modal--closed")).toBe(true);
        expect(openComponent.find(".background--skyBlue").hasClass("modal--open")).toBe(true);
    })

    it("Should Call the closeModal function when Clicked", () => {
        closedComponent.find('.modal__closeButton').simulate('click');
        expect(mockCloseModalFn).toHaveBeenCalled();
    })

   
        
})