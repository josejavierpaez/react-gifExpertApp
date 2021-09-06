import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from '../../hooks/useFecthGifs';

describe('test to useFetchGifs hook', () => {
  test('should be return the initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs({ category: 'goku' }));
    const { data, loading } = result.current;
    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  })

  test('should be return array of images and login at true', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs({ category: 'goku' }));
    await waitForNextUpdate();

    const { data, loading } = result.current;
    console.log(data, loading)

    expect(data.length).toEqual(10);
    expect(loading).toBe(false);
  })


});