import { App } from "../App";
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

describe("High-level tests", () => {
  test("App container renders", () => {
    render(<App />)
    const app = screen.getByTestId("app");
    expect(app).toBeVisible();
  })
})

describe("BP-10700 default tests", () => {
  test("BP-10700 loads and displays Lego brick", () => {
    render(<App />)
    const legoBrick = screen.getByTestId("lego-brick");
    expect(legoBrick).toBeVisible();
  })
  
  test("BP-10700 loads and displays text", () => {
    render(<App />)
    const titleText = screen.getByTestId("title-text");
    expect(titleText).toBeVisible();
  })
})