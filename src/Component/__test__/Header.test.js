import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../Header";

it("Should render appTest", () => {
    render(<Header />);
    const AltText = screen.getByAltText("logo");
    expect(AltText).toBeInTheDocument();
})