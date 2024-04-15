import { render, screen } from "@testing-library/react";
import GifGrid from "../../src/components/GifGrid";
import useFetchGifs from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => {
  const category = 'One punch man';
  test('debe de mostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    })

    render(<GifGrid category={category} />);
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  })

  test('debe de mostrar items cuando se cargan las imágenes usando useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Title-1',
        url: 'https://url.com/image-1.jpg',
      },
      {
        id: '123',
        title: 'Title-2',
        url: 'https://url.com/image-2.jpg',
      }
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true,
    })

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
  })
})
