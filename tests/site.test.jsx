/* eslint-disable @next/next/no-img-element -- Next Image is replaced only inside unit tests. */
import { fireEvent, render, screen } from "@testing-library/react";
import { expect, it, vi } from "vitest";
vi.mock("next/image", () => ({ default: ({ alt, src }) => <img src={src} alt={alt} /> }));
vi.mock("next/link", () => ({ default: ({ href, children, ...props }) => <a href={href} {...props}>{children}</a> }));
vi.mock("next/navigation", () => ({ usePathname: () => "/cabins" }));
import CabinCatalog from "../app/components/CabinCatalog";
import Navigation from "../app/components/Navigation";
import Account from "../app/account/page";
import { cabins } from "../app/data/cabins";

it("filters cabins by the required group capacity and restores all results", () => {
  render(<CabinCatalog cabins={cabins} />);
  expect(screen.getAllByRole("article")).toHaveLength(4);
  fireEvent.click(screen.getByRole("button", { name: "For 4 guests" }));
  expect(screen.getAllByRole("article")).toHaveLength(2);
  expect(screen.getByRole("status")).toHaveTextContent("2 cabins");
  fireEvent.click(screen.getByRole("button", { name: "For 6 guests" }));
  expect(screen.getAllByRole("article")).toHaveLength(1);
  fireEvent.click(screen.getByRole("button", { name: "All cabins" }));
  expect(screen.getAllByRole("article")).toHaveLength(4);
});
it("marks the current page and closes the mobile menu with Escape", () => {
  render(<Navigation />);
  expect(screen.getByRole("link", { name: "Cabins" })).toHaveAttribute("aria-current", "page");
  fireEvent.click(screen.getByRole("button", { name: "Menu" }));
  expect(screen.getByRole("button", { name: "Close menu" })).toHaveAttribute("aria-expanded", "true");
  fireEvent.keyDown(document, { key: "Escape" });
  expect(screen.getByRole("button", { name: "Menu" })).toHaveAttribute("aria-expanded", "false");
});
it("clearly identifies the unconnected account service without a fake sign-in", () => {
  render(<Account />);
  expect(screen.getByRole("heading", { name: "Guest accounts are coming soon." })).toBeVisible();
  expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Browse the cabins" })).toHaveAttribute("href", "/cabins");
});
