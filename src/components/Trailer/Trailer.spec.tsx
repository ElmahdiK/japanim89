import { render, screen } from '@testing-library/react';
import Trailer, { defaultYoutubeURL } from '.';

describe('test button theme mode', () => {
  it('renders the trailer unchanged', () => {
    const { container } = render(<Trailer trailerUrl='shrek' />);
    expect(container).toMatchSnapshot();
  });

  it('displays the iframe with the right trailer url', () => {
    const trailerEmbed = 'shrek3';
    render(<Trailer trailerUrl={trailerEmbed} />);
    const iframeElement = screen.getByTitle('YouTube video player');
    expect(iframeElement).toBeInTheDocument();
    expect(iframeElement).toHaveAttribute(
      'src',
      `${defaultYoutubeURL}/${trailerEmbed}`
    );
  });
});
