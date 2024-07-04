import { RenderResult, render, screen } from '@testing-library/react';
import { COLOR_PALETTE } from 'constants/colors/colors';
import { AMessage } from '../AMessage';
import { IAMessageProps } from '../type';

describe('AMessage', () => {
  const props: IAMessageProps = {
    children: 'child',
    type: 'warning',
  };

  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<AMessage {...props} />);
  });

  it('should render correctly', () => {
    const element = screen.getByTestId('aMessage');

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('child');
  });

  it('snapshot', () => {
    const element = screen.getByTestId('aMessage');

    expect(element).toMatchSnapshot();
  });

  it('should render correctly with Node child', () => {
    renderResult.rerender(
      <AMessage type="warning">
        <a href="#">Test</a>
      </AMessage>,
    );

    const element = screen.getByTestId('aMessage');

    expect(element).toBeInTheDocument();
    expect(element.innerHTML).toEqual('<a href="#">Test</a>');
  });

  it('should render correctly with multiple children', () => {
    renderResult.rerender(
      <AMessage type="warning">
        test <a href="#">Test</a> test <a href="#">Test</a>
      </AMessage>,
    );

    const element = screen.getByTestId('aMessage');

    expect(element).toBeInTheDocument();
    expect(element.innerHTML).toEqual('test <a href="#">Test</a> test <a href="#">Test</a>');
  });

  it('should apply correct styling when prop "type" = "warning"', () => {
    const element = screen.getByTestId('aMessage');

    expect(element).toHaveStyle(`color: ${COLOR_PALETTE.gray900}`);
    expect(element).toHaveStyle(`background-color: ${COLOR_PALETTE.gray150}`);
    expect(element).toHaveStyle('padding: 8px 12px');
  });

  it('should apply correct styling when prop "type" = "error"', () => {
    renderResult.rerender(<AMessage type="error">text</AMessage>);

    const element = screen.getByTestId('aMessage');

    expect(element).toHaveStyle(`color: ${COLOR_PALETTE.error}`);
    expect(element).toHaveStyle('background-color: transparent');
    expect(element).toHaveStyle('padding: 0');
  });
});
