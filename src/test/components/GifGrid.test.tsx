import React from 'react';

import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid/GifGrid';
import { useFetchGifs } from '../../hooks/useFecthGifs';
// jest.mock('../../hooks/useFecthGifs');


describe('test to GifGrid component', () => {

  const catgory = 'goku';
  const wraper = shallow(<GifGrid category={catgory} />);
  test('should be render GifGridItem component well', () => {

    // //@ts-ignore
    // useFetchGifs.mockReturnValue({ data: [], loading: true });
    // expect(wraper).toMatchSnapshot();
  })

  test('should be show item when image loaded with useFec th', () => {
    // const gifs = [{
    //   id: 'abs',
    //   url: 'https://localhost/test',
    //   title: 'test'
    // }]
    // useFetchGifs.mockReturnValue(
    //   {
    //     data: gifs,
    //     loading: false
    //   });

    //   expect(wraper).toMatchSnapshot();
  })


});
