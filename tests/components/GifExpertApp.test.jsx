import { render, screen } from "@testing-library/react"
import GifExpertApp from "../../src/components/GifExpertApp"

describe('Pruebas en <GifExpertApp />', () => {
  test('should any', () => {
    render(<GifExpertApp />);
    screen.debug();
  })
})
