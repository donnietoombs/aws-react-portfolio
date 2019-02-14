import React from 'react';
import { shallow } from 'enzyme';
import WorkModal from '../js/work-modal';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe("WorkModal component", () => {
    let component = shallow(<WorkModal />);

    let anchors = component.find("a");

    it("Should contain a single 'a' element", () => {
        expect(anchors.length).toEqual(1);
    })
})