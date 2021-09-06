import { GifGridItem } from '../../components/GifGridItem/GifGridItem';
import { shallow } from 'enzyme';

describe('test to GifGridItem component', () => {

  const title = 'title';
  const url = 'https://localhost/algo.jpg';
  const wraper = shallow(<GifGridItem title={title} url={url} />);

  test('should be render GifGridItem component well', () => {

    expect(wraper).toMatchSnapshot();
  })

  test('should be have p tag with the title', () => {
    const p = wraper.find('p');
    expect(p.text().trim()).toBe(title);
  })

  test('should be have img equal to props url and alt', () => {
    const img = wraper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  })

  test('should have animate__pulse', () => {
    const div = wraper.find('div');
    expect(div.hasClass('animate__pulse')).toBe(true);
  })

});
