import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("home", () => {
    it("renders a heading", () => {
        render(<Home />);
        const heading = screen.getByText(/Hi/i);
        expect(heading).toBeInTheDocument();
    });
});
