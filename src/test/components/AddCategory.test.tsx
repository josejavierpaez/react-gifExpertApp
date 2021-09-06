import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory';

describe('test to AddCategory component', () => {

  const setCategories = jest.fn();
  let wraper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wraper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('should be render AddCategory component well', () => {

    expect(wraper).toMatchSnapshot();
  })

  test('should be change textbox', () => {
    const input = wraper.find('input');
    const value = 'hellow world';

    input.simulate('change', {
      target: { value }
    });
  })
  test('should not be post information when submit the form', () => {

    wraper.find('form').simulate('submit', {
      preventDefault() { }
    });

    expect(setCategories).not.toHaveBeenCalled();
  })

  // test('should be call setCategories and clear the textbox', () => {

  //   const input = wraper.find('input');
  //   const value = 'hello world';
  //   input.simulate('change', {
  //     target: { value }
  //   });

  //   wraper.find('form').simulate('submit', {
  //     preventDefault() { }

  //   })

  //   expect(setCategories).toHaveBeenCalled();
  //   expect(setCategories).toHaveBeenCalledTimes(1);
  //   expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
  //   expect(wraper.find('input').prop('value')).toBe('');
  // })



});