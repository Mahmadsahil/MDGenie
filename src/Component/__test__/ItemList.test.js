import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import ItemList from "../ItemList";
import Store from "../../ReduxStore/Store";
import ItemListMockData from "../../Mocks/ItemList.MockData.json";

it("Should render ItemList component", async () => {
    render(
        <Provider store={Store}>
            <ItemList data={ItemListMockData} />
        </Provider>
    );

    await waitFor(() => {
        const ItemListElement = screen.getByTestId("ItemList");
        expect(ItemListElement).toBeInTheDocument();
    });
});
