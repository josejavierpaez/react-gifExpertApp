import { shallow } from 'enzyme';
import { GifExpertApp } from '../../views/GifExpertApp'

describe('test to <GifExpertApp/> component', () => {
  test('should be render <GifExpertApp/> component well', () => {
    const categories = ['One Punch', 'goku'];
    const wrapper = shallow(<GifExpertApp defaulCategories={categories} />);

    expect(wrapper).toMatchSnapshot()

    expect(wrapper.find('GifGrid').length).toBe(categories.length)
  })

})