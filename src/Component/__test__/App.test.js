import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../../App";

it("Should render appTest", () => {
        render(<App />);
    const testid = screen.getByTestId("appTest");
    expect(testid).toBeInTheDocument();
})