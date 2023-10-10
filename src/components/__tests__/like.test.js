import { render, screen, fireEvent, getByTestId } from "@testing-library/react"
import React from "react";
import Like from "../like";

test("Defaults to Likes: 0", () => {
    render(<Like/>);
    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
})

test("Likes increment on Like button press", () => {
    render(<Like/>);
    expect(screen.getByText("Like")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Like"))
    expect(screen.getByText("Likes: 1")).toBeInTheDocument();
});

test("Likes decrement on Dislike button press", () => {
    render(<Like />);
    expect(screen.getByText("Dislike")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Dislike"))
    expect(screen.getByText("Likes: -1")).toBeInTheDocument();
});