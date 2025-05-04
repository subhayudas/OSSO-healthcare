import {
  FaUsers,
  FaHandshake,
  FaLightbulb,
  FaMapMarkedAlt,
} from "react-icons/fa";

export const customersMenu = [
  {
    title: "Our Patients",
    description:
      "Athletes, seniors, accident victims, and individuals with chronic conditions we treat.",
    href: "/customers#target",
    icon: FaUsers,
  },
  {
    title: "Patient Needs",
    description:
      "Orthopaedic conditions we treat and rehabilitation services we provide.",
    href: "/customers#needs",
    icon: FaLightbulb,
  },
  {
    title: "Referral Network",
    description: "Learn about our network of specialists and referral process.",
    href: "/customers#partnerships",
    icon: FaHandshake,
  },
  {
    title: "Geographical Coverage",
    description: "Locations where OSSO clinics are available to serve patients.",
    href: "/customers#regions",
    icon: FaMapMarkedAlt,
  },
];
