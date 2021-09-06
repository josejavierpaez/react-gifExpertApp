import { getGif } from '../../helpers/getGif';

describe('test with getGifs Fecth', () => {
  test('should be return 10 elements', async () => {

    const gif = await getGif({ category: 'goku' });
    expect(gif.length).toBe(10);
  })

  test('should be return empty array', async () => {

    const gif = await getGif({ category: '' });
    expect(gif.length).toBe(0);
  })


});