import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import Store from "../../ReduxStore/Store";
import ProductCardMockData from "../../Mocks/ProductCardMockData.json";
import ProductCard from "../ProductCard";
import { BrowserRouter } from "react-router-dom";

it("Should render ItemList component", async () => {
    render(
        <BrowserRouter>
            <Provider store={Store}>
                <ProductCard data={ProductCardMockData} />
            </Provider>
        </BrowserRouter>
    );

    await waitFor(() => {
        const ProductCardElement = screen.getByTestId("ProductCard");
        expect(ProductCardElement).toBeInTheDocument();
    });
});
