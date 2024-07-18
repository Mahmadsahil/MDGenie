import React from "react";
import { act } from "react-dom/test-utils"; 
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; 
import { Provider } from "react-redux";
import Store from "../../ReduxStore/Store";
import ItemCardMockData from "../../Mocks/ItemCardMockData.json";
import ItemCard from "../ItemCard";

it("Should render testid", async () => {
    await act(async () => {
        render(
            <Provider store={Store}>
                <MemoryRouter>
                    <ItemCard data={ItemCardMockData} />
                </MemoryRouter>
            </Provider>
        );
    });

    const ItemCardId = screen.getByTestId("ItemCard");
    expect(ItemCardId).toBeInTheDocument();
});
