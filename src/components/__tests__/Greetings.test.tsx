import { render, screen } from "@testing-library/react-native"
import Greetings from "../Greetings"


describe("<Greetings />", () => {

  it("Should diplay a greetings message", () => {
    render(<Greetings />)

    const greetingText = screen.getByText(/hello/i)

    expect(greetingText).toBeTruthy()
  })


})