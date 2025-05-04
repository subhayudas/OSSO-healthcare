"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronLeft, Menu } from "lucide-react";

import { mainNavigation } from "@/constants/navbarData";
import {
  NavigationContent,
  SpecialContent,
  StandardContent,
} from "@/types/navbarTypes";

export default function MainNavigationMenu() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSubmenu, setActiveSubmenu] = React.useState<string | null>(null);
  const pathname = usePathname();

  // Handle scroll events
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle section navigation
  const handleSectionNavigation = (path: string, section: string) => {
    // If we're already on the correct page, just scroll to the section
    if (pathname === path) {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
    // Otherwise, navigation will happen via the Link component
  };

  // Type guard function to check if content has specialLayout and sections
  const hasSpecialLayout = (
    content: NavigationContent | undefined,
  ): content is SpecialContent => {
    return content?.specialLayout === true && Array.isArray(content?.sections);
  };

  const hasStandardLayout = (
    content: NavigationContent | undefined,
  ): content is StandardContent => {
    return content?.specialLayout !== true && Array.isArray(content?.menuItems);
  };

  // Mobile Navigation Submenu Component
  const MobileSubmenu = ({
    navItem,
    onBack,
  }: {
    navItem: (typeof mainNavigation)[0];
    onBack: () => void;
  }) => {
    return (
      <div className="flex flex-col h-full p-4">
        <SheetHeader className="border-b border-b-black/20 pb-4 mb-4">
          <button
            onClick={onBack}
            className="flex items-center text-sm font-medium mb-2"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Menu
          </button>
          <SheetTitle>{navItem.title}</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-auto scroll-hide pb-4">
          {/* Special Layout Content */}
          {hasSpecialLayout(navItem.content) && (
            <div className="space-y-6">
              {navItem.content.sections.map((section, idx) => (
                <div key={idx}>
                  <h3 className="text-lg font-medium mb-3">{section.title}</h3>
                  <div className="space-y-2">
                    {section.items.map((item) => (
                      <SheetClose asChild key={item.title}>
                        <Link
                          href={item.href}
                          onClick={() => {
                            const [path, sectionId] = item.href.split("#");
                            if (sectionId) {
                              handleSectionNavigation(path, sectionId);
                            }
                          }}
                          className="flex items-center gap-2 p-2 rounded-md hover:bg-neutral-300/30 transition-colors"
                        >
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Standard Layout Content */}
          {hasStandardLayout(navItem.content) && (
            <div className="space-y-4">
              {navItem.content.menuItems.map((item) => (
                <SheetClose asChild key={item.title}>
                  <Link
                    href={item.href}
                    onClick={() => {
                      const [path, section] = item.href.split("#");
                      if (section) {
                        handleSectionNavigation(path, section);
                      }
                    }}
                    className="flex flex-col p-3 rounded-md border border-black/20 hover:bg-neutral-300/30 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-100/10">
                        <item.icon className="h-4 w-4" />
                      </div>
                      <span className="font-medium">{item.title}</span>
                    </div>
                    <p className="text-sm text-neutral-600">
                      {item.description}
                    </p>
                  </Link>
                </SheetClose>
              ))}
            </div>
          )}
        </div>

        {/* Footer - CTA Button */}
        <div className="border-t border-t-black/20 mt-auto pt-4">
          <h3 className="text-sm font-medium mb-2">
            {navItem.content?.sidebarTitle}
          </h3>
          <p className="text-xs text-neutral-600 mb-3">
            {navItem.content?.sidebarDescription}
          </p>
          <SheetClose asChild>
            <Link
              href={navItem.content?.sidebarButtonLink || "#"}
              className="w-full inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              {navItem.content?.sidebarButtonText}
            </Link>
          </SheetClose>
        </div>
      </div>
    );
  };

  // Main mobile navigation list
  const MobileNavList = ({
    setSubmenu,
  }: {
    setSubmenu: (title: string) => void;
  }) => {
    return (
      <div className="flex flex-col h-full p-4">
        <SheetHeader className="border-b  border-b-black/20 pb-4 mb-4">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <div className="flex-1">
          <nav className="flex flex-col space-y-1">
            {mainNavigation.map((navItem) => (
              <React.Fragment key={navItem.title}>
                {navItem.hasDropdown ? (
                  <button
                    onClick={() => setSubmenu(navItem.title)}
                    className="flex items-center justify-between py-3 px-2 rounded-md hover:bg-neutral-300/30 transition-colors cursor-pointer"
                  >
                    <span>{navItem.title}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                ) : (
                  <SheetClose asChild>
                    <Link
                      href={navItem.href || "#"}
                      className="py-3 px-2 rounded-md hover:bg-neutral-300/30 transition-colors"
                    >
                      {navItem.title}
                    </Link>
                  </SheetClose>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>

        <div className="mt-auto pt-4 border-t border-t-black/20">
          <SheetClose asChild>
            <Link
              href="/contact"
              className="w-full inline-flex justify-center whitespace-nowrap rounded-full bg-gradient-to-tr from-zinc-700 via-55% to-gray-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-gray-300"
            >
              Contact Us
            </Link>
          </SheetClose>
        </div>
      </div>
    );
  };

  return (
    <header className="fixed top-0 w-full z-30 transition-all duration-300">
      <div
        className={`transition-all duration-300 ${
          isScrolled ? "max-w-5xl mx-auto px-4 sm:px-6 mt-6" : "p-4"
        }`}
      >
        <div
          className={`flex h-14 w-full items-center justify-between gap-3 transition-all duration-300
          ${
            isScrolled
              ? "rounded-full shadow-2xl backdrop-blur-2xl border border-gray-300/50 px-3 shadow-black/[0.04]"
              : "px-3 rounded-full"
          }
        `}
        >
          <div className="flex flex-1 items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/ossologo.svg"
                alt="OSSO Orthopaedic Clinic Logo"
                width={40}
                height={40}
              />
            </Link>
          </div>

          {/* Desktop Navigation Menu - Hidden on mobile */}
          <div className="hidden lg:block">
            <NavigationMenu className="mx-auto">
              <NavigationMenuList>
                {mainNavigation.map((navItem) => (
                  <NavigationMenuItem key={navItem.title}>
                    {navItem.hasDropdown ? (
                      <>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          <NavigationMenuTrigger className="bg-neutral-300/30">
                            {navItem.title}
                          </NavigationMenuTrigger>
                        </NavigationMenuLink>
                        <NavigationMenuContent>
                          {hasSpecialLayout(navItem.content) ? (
                            // Special layout for Resources (with sections)
                            <div className="w-[95vw] max-w-screen-xl flex justify-between p-6 50 bg-purple-100/10">
                              <div className="grid grid-cols-2 gap-6">
                                {navItem.content.sections.map(
                                  (section, idx) => (
                                    <div key={idx} className="col-span-1">
                                      <div className="mb-3 text-lg font-medium">
                                        {section.title}
                                      </div>
                                      <div
                                        className={`grid grid-cols-${section.columns} gap-2`}
                                      >
                                        {section.items.map((item) => (
                                          <Link
                                            key={item.title}
                                            href={item.href}
                                            onClick={() => {
                                              const [path, sectionId] =
                                                item.href.split("#");
                                              if (sectionId) {
                                                handleSectionNavigation(
                                                  path,
                                                  sectionId,
                                                );
                                              }
                                            }}
                                            className="flex items-center gap-2 rounded-md p-2 hover:bg-neutral-300/30 transition-colors"
                                          >
                                            <item.icon className="h-4 w-4" />
                                            <span className="text-sm">
                                              {item.title}
                                            </span>
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  ),
                                )}
                              </div>
                              <div className="border-l pl-6">
                                <div className="mb-3 text-lg font-medium">
                                  {navItem.content.sidebarTitle}
                                </div>
                                <p className="mb-4 text-sm text-neutral-600">
                                  {navItem.content.sidebarDescription}
                                </p>
                                <Link
                                  href={
                                    navItem.content.sidebarButtonLink || "#"
                                  }
                                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                >
                                  {navItem.content.sidebarButtonText}
                                </Link>
                              </div>
                            </div>
                          ) : hasStandardLayout(navItem.content) ? (
                            // Standard layout for other dropdowns (with menuItems)
                            <div className="w-[95vw] max-w-screen-xl flex justify-between p-6 inset-0 bg-white/10">
                              <div
                                className={`grid grid-cols-${navItem.content.gridColumns} gap-6 w-3/4`}
                              >
                                {navItem.content.menuItems.map((item) => (
                                  <Link
                                    key={item.title}
                                    href={item.href}
                                    onClick={() => {
                                      const [path, section] =
                                        item.href.split("#");
                                      if (section) {
                                        handleSectionNavigation(path, section);
                                      }
                                    }}
                                    className="group flex h-full w-full flex-col justify-between rounded-md border p-4 hover:bg-purple-100/10 transition-colors"
                                  >
                                    <div className="flex items-start gap-4">
                                      <div className="flex h-10 w-10 items-center justify-center rounded-md border bg-muted">
                                        <item.icon className="h-5 w-5" />
                                      </div>
                                      <div>
                                        <div className="text-md font-medium mb-2">
                                          {item.title}
                                        </div>
                                        <p className="text-sm text-neutral-600">
                                          {item.description}
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                              <div className="w-1/4 pl-6">
                                <div className="mb-3 text-lg font-medium">
                                  {navItem.content.sidebarTitle}
                                </div>
                                <p className="mb-4 text-sm text-neutral-600">
                                  {navItem.content.sidebarDescription}
                                </p>
                                <Link
                                  href={
                                    navItem.content.sidebarButtonLink || "#"
                                  }
                                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                >
                                  {navItem.content.sidebarButtonText}
                                </Link>
                              </div>
                            </div>
                          ) : (
                            // Fallback in case content structure is unexpected
                            <div className="p-4">
                              <p>Menu content unavailable</p>
                            </div>
                          )}
                        </NavigationMenuContent>
                      </>
                    ) : (
                      // Simple link without dropdown
                      <Link href={navItem.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          {navItem.title}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop Contact Button - Hidden on mobile */}
          <div className="hidden lg:flex flex-1 items-center justify-end">
            <Link
              className="bg-gradient-to-tr from-zinc-700 via-55% to-gray-500 inline-flex justify-center whitespace-nowrap rounded-full bg-gray-500 px-3 py-1.5 text-sm font-medium text-white shadow transition-colors hover:bg-gray-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-gray-300"
              href="/contact"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Navigation - Visible only on mobile */}
          <div className="lg:hidden flex flex-1 items-center justify-end">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 w-6 cursor-pointer" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="p-4 w-full sm:w-80 overflow-y-auto scroll-hide bg-indigo-50 border border-white/30 shadow-lg dark:bg-black/20 dark:border-white/10"
              >
                {activeSubmenu ? (
                  <MobileSubmenu
                    navItem={
                      mainNavigation.find(
                        (item) => item.title === activeSubmenu,
                      )!
                    }
                    onBack={() => setActiveSubmenu(null)}
                  />
                ) : (
                  <MobileNavList
                    setSubmenu={(title) => setActiveSubmenu(title)}
                  />
                )}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-neutral-600">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
