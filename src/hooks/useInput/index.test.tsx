import { render, fireEvent } from '@testing-library/react';
import { useInput } from './useInput';

const INPUT_TEST_ID = 'input';
const BUTTON_TEST_ID = 'reset';
const INITIAL_VALUE = '';
const UPDATED_VALUE = 'UPDATE TEXT';

const TestComponent = () => {
  const [text, onChange, reset] = useInput(INITIAL_VALUE);

  return (
    <div>
      <input data-testid={INPUT_TEST_ID} value={text} onChange={onChange} />
      <button data-testid={BUTTON_TEST_ID} type="button" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

describe('useInput', () => {
  it('Returns initial value correctly', () => {
    const { getByTestId } = render(<TestComponent />);
    const input = getByTestId(INPUT_TEST_ID) as HTMLInputElement;
    expect(input.value).toBe(INITIAL_VALUE);
  });

  it('Updates text value with onChange correctly', () => {
    const { getByTestId } = render(<TestComponent />);
    const input = getByTestId(INPUT_TEST_ID) as HTMLInputElement;
    fireEvent.change(input, { target: { value: UPDATED_VALUE } });
    expect(input.value).toBe(UPDATED_VALUE);
  });

  it('Resets text value with reset correctly', () => {
    const { getByTestId } = render(<TestComponent />);
    const input = getByTestId(INPUT_TEST_ID) as HTMLInputElement;
    const resetBtn = getByTestId(BUTTON_TEST_ID);
    fireEvent.change(input, { target: { value: UPDATED_VALUE } });
    expect(input.value).toBe(UPDATED_VALUE);
    fireEvent.click(resetBtn);
    expect(input.value).toBe(INITIAL_VALUE);
  });
});
