import { IconType } from "react-icons";

// Define the types for the menu items
export type MenuItem = {
  title: string;
  description: string;
  href: string;
  icon: IconType;
};

// Define the section type for special layouts
export type Section = {
  title: string;
  items: MenuItem[];
  columns: number;
};

// Define the base navigation content interface
export interface NavigationContent {
  specialLayout?: boolean;
  sections?: Section[];
  menuItems?: MenuItem[];
  sidebarTitle?: string;
  sidebarDescription?: string;
  sidebarButtonText?: string;
  sidebarButtonLink?: string;
  gridColumns?: number;
}

// Define the standard content type
export interface StandardContent extends NavigationContent {
  specialLayout?: false;
  menuItems: MenuItem[];
  gridColumns: number;
  sections?: never; // This ensures sections doesn't exist on standard content
}

// Define the special layout content type
export interface SpecialContent extends NavigationContent {
  specialLayout: true;
  sections: Section[];
  menuItems?: never; // This ensures menuItems doesn't exist on special content
  gridColumns?: never; // This ensures gridColumns doesn't exist on special content
}

// Define the navigation item type
export interface NavItem {
  title: string;
  href: string;
  hasDropdown: boolean;
  content?: NavigationContent;
}

// Define the union type for content
export type ContentType = StandardContent | SpecialContent;

// Define the navigation item with dropdown
export interface NavItemWithDropdown {
  title: string;
  href: string;
  hasDropdown: true;
  content: ContentType;
}

// Define the navigation item without dropdown
export interface NavItemWithoutDropdown {
  title: string;
  href: string;
  hasDropdown: false;
  content?: never;
}

// Define the navigation item type
export type NavigationItem = NavItemWithDropdown | NavItemWithoutDropdown;
