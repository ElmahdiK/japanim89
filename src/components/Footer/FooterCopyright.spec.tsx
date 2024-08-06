import { render, screen } from '@testing-library/react';
import FooterCopyright from './FooterCopyright';

describe('test button theme mode', () => {
  it('renders the footer copyright unchanged', () => {
    const { container } = render(<FooterCopyright />);
    expect(container).toMatchSnapshot();
  });

  it('displays the copyright text', () => {
    render(<FooterCopyright />);
    expect(screen.getByText('© 2024 japanim89')).toBeInTheDocument();

    // fireEvent.click(screen.getByText('Load Greeting'));
    // await screen.findByRole('heading');

    // expect(screen.getByRole('heading')).toHaveTextContent('hello there');
    // expect(screen.getByRole('button')).toBeDisabled();
  });
});
