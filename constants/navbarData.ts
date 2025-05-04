import { companyMenu } from "@/constants/company-page-data/company";
import { servicesMenu } from "@/constants/services-page-data/services";
import { customersMenu } from "@/constants/customers-page-data/customers";
import { trendsMenu } from "@/constants/trends-page-data/trends";
import { milestonesMenu } from "@/constants/milestones-page-data/milestones";
import { NavigationItem } from "@/types/navbarTypes";

export const mainNavigation: NavigationItem[] = [
  {
    title: "Home",
    href: "/",
    hasDropdown: false,
  },
  {
    title: "Company",
    href: "/company",
    hasDropdown: true,
    content: {
      specialLayout: false, // Add this explicitly
      menuItems: companyMenu,
      sidebarTitle: "About OSSO",
      sidebarDescription:
        "Discover how OSSO is providing specialized orthopaedic care to improve patient mobility and quality of life.",
      sidebarButtonText: "Learn More",
      sidebarButtonLink: "/company",
      gridColumns: 3,
    },
  },
  {
    title: "Services",
    href: "/services",
    hasDropdown: true,
    content: {
      specialLayout: false, // Add this explicitly
      menuItems: servicesMenu,
      sidebarTitle: "Our Services",
      sidebarDescription:
        "Comprehensive orthopaedic treatments and rehabilitation services designed to restore mobility and improve quality of life.",
      sidebarButtonText: "View All Services",
      sidebarButtonLink: "/services",
      gridColumns: 3,
    },
  },
  {
    title: "Customers",
    href: "/customers",
    hasDropdown: true,
    content: {
      specialLayout: false, // Add this explicitly
      menuItems: customersMenu,
      sidebarTitle: "Who We Serve",
      sidebarDescription:
        "From athletes to seniors, we provide specialized orthopaedic care for patients of all ages and activity levels.",
      sidebarButtonText: "Our Customers",
      sidebarButtonLink: "/customers",
      gridColumns: 2,
    },
  },
  {
    title: "Resources",
    href: "/resources",
    hasDropdown: true,
    content: {
      specialLayout: true,
      sections: [
        {
          title: "Milestones",
          items: milestonesMenu.slice(0, 4),
          columns: 2,
        },
        {
          title: "Industry Trends",
          items: trendsMenu,
          columns: 1,
        },
      ],
      sidebarTitle: "Resources Center",
      sidebarDescription:
        "Access educational materials, rehabilitation guides, and orthopaedic health insights to support your recovery journey.",
      sidebarButtonText: "Explore Resources",
      sidebarButtonLink: "/resources",
    },
  },
];
