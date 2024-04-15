import { render, screen } from "@testing-library/react"
import GifItem from "../../src/components/GifItem"

describe('Pruebas en <GifItem/>', () => {

  const title = 'One punch man';
  const url = 'http://this-is-an-url.com/image.jpg';

  test('debe de hacer match con el snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  })

  test('debe mostrar la imagen con el URL y el ALT indicado', () => {
    render(<GifItem title={title} url={url} />);
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  })

  test('debe demostrar el titulo en el componente', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  })
})
