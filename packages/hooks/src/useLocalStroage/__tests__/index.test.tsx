import {
  render,
  cleanup,
  getByTestId,
  fireEvent,
  act,
} from '@testing-library/react';
import { renderHook, act as actHook } from '@testing-library/react-hooks';
import * as React from 'react';
import useLocalStroage from '../index';

describe('useLocalStroage defined', () => {
  it('should be defined', () => {
    expect(useLocalStroage).toBeDefined();
  });
});

describe('useLocalStroage with array destructuring', () => {
  let App;
  beforeEach(() => {
    // eslint-disable-next-line react/no-multi-comp
    App = function() {
      const { value, setValue, remove } = useLocalStroage(
        'test-value',
      );
      return (
        <div data-testid="container">
          <p data-testid="value">{value}</p>
          <button
            data-testid="new-value"
            onClick={() => {
              setValue('new value');
            }}
          >
              setValue
          </button>
          <button
            data-testid="unset-value"
            onClick={remove}>
              remove
          </button>
        </div>
      );
    };
  });

  afterEach(cleanup);

  it('initializes correctly', () => {
    const { container } = render(<App />);
    const valueElement = getByTestId(container as HTMLElement, 'value');
    expect(valueElement.innerHTML).toBe('');
  });

  test('set ', () => {
    const { result, rerender } = renderHook(() =>
      useLocalStroage('test-value')
    );

    rerender();
    const setAfterRerender = result.current.setValue;

    // work after rerender
    actHook(() => {
      setAfterRerender('value');
    });
    expect(result.current.value).toBe('value');
  });

  it('setting the new value', () => {
    const { container } = render(<App />);
    const setToNewValueButton = getByTestId(
        container as HTMLElement,
        'new-value'
    );
    act(() => {
      fireEvent.click(setToNewValueButton);
    });
    const valueElement = getByTestId(container as HTMLElement, 'value');
    expect(valueElement.innerHTML).toBe('new value');
  });

  it('unsetting the value', () => {
    const { container } = render(<App />);
    const unsetValueButton = getByTestId(
        container as HTMLElement,
        'unset-value'
    );
    act(() => {
      fireEvent.click(unsetValueButton);
    });
    const valueElement = getByTestId(container as HTMLElement, 'value');
    expect(valueElement.innerHTML).toBe('');
  });
});
