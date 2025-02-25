"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FiChevronDown, FiChevronUp, FiX, FiMenu } from "react-icons/fi";

// Desktop Dropdown Component
const DesktopDropdown = ({ isOpen, children }) => (
  <div
    className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white/80 dark:bg-black/80 backdrop-blur-lg rounded-lg shadow-lg border border-gray-200/20 dark:border-gray-800/20 transition-all duration-300 ease-in-out ${
      isOpen
        ? "opacity-100 scale-100 translate-y-0 visible"
        : "opacity-0 scale-95 -translate-y-2 invisible"
    }`}
    style={{ zIndex: isOpen ? 100 : -1 }}
  >
    <div className="p-2 bg-gradient-to-b from-gray-100/10 dark:from-gray-900/10 to-transparent rounded-lg">
      {children}
    </div>
  </div>
);

// Desktop Dropdown Item
const DesktopDropdownItem = ({ href, children, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className="group flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 rounded-md transition-all duration-200 ease-in-out transform hover:scale-105"
  >
    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out transform group-hover:scale-125"></span>
    <span className="text-sm font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
      {children}
    </span>
  </Link>
);

// Mobile Dropdown Component
const MobileDropdown = ({ title, children, isOpen, onClick }) => (
  <div className="w-full border-b border-gray-100/20 last:border-0">
    <button
      onClick={onClick}
      className="flex items-center justify-between w-full py-4 text-gray-200 hover:text-white transition-colors duration-200"
    >
      <span className="text-lg font-medium">{title}</span>
      {isOpen ? <FiChevronUp className="text-xl" /> : <FiChevronDown className="text-xl" />}
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="pb-2 pl-4 flex flex-col space-y-2">{children}</div>
    </div>
  </div>
);

// Mobile Menu Item
const MobileMenuItem = ({ href, children, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className="py-3 px-4 rounded-lg text-gray-200 hover:bg-white/10 dark:hover:bg-gray-800/20 transition-colors duration-200 hover:text-white"
  >
    {children}
  </Link>
);

export function MenuBar() {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState({
    software: false,
    features: false,
    aiAnalysis: false,
  });
  const [mobileDropdowns, setMobileDropdowns] = useState({
    software: false,
    features: false,
    aiAnalysis: false,
    resources: false,
  });
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detect scroll for shadow effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect system color scheme for dark mode
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);
    const handler = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const toggleMobileDropdown = (menu) => {
    setMobileDropdowns((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    document.body.style.overflow = !isMobileNavOpen ? "hidden" : "auto";
  };

  const closeAll = () => {
    setIsMobileNavOpen(false);
    setDropdownOpen({ software: false, features: false, aiAnalysis: false });
    setMobileDropdowns({
      software: false,
      features: false,
      aiAnalysis: false,
      resources: false,
    });
    document.body.style.overflow = "auto";
  };

  const menuItems = {
    software: [
      { href: "/software/Glynac-software", label: "Glync AI Software" },
      { href: "/software/communication-tools", label: "Communication Tools" },
      { href: "/software/email-tools", label: "Email Tools" },
    ],
    features: [
      { href: "/features/demographic-data", label: "Demographic Data" },
      { href: "/features/data-selection", label: "Pre-cleaned Data" },
      { href: "/features/standardized-data", label: "Standardized Data" },
    ],
    aiAnalysis: [
      { href: "/ai-analysis/ai-qualitative", label: "AI Qualitative" },
      { href: "/ai-analysis/ai-quantitative", label: "AI Quantitative" },
    ],
    pricing: [{ href: "/pricing", label: "Pricing" }],
    security: [{ href: "/security", label: "Security" }],
    resources: [
      { href: "/resources/about", label: "About" },
      { href: "/resources/blog", label: "Blog" },
      { href: "/resources/client_case", label: "Client Case" },
      { href: "/resources/contacts", label: "Contacts" },
      { href: "/resources/faq", label: "FAQ" },
      { href: "/resources/manual", label: "Manual" },
      { href: "/resources/news", label: "News" },
      { href: "/resources/partner_program", label: "Partner Program" },
      { href: "/resources/support", label: "Support" },
      { href: "/resources/updates", label: "Updates" },
    ],
  };

  const menuLabels = {
    software: "Software",
    features: "Features",
    aiAnalysis: "AI Analysis",
    pricing: "Pricing",
    security: "Security",
    resources: "Resources",
  };

  return (
    <>
      {/* Global Styles */}
      <style jsx global>{`
        .menu-link {
          position: relative;
          transition: all 0.3s ease;
        }
        .menu-link::after {
          content: "";
          position: absolute;
          bottom: 5px;
          left: 50%;
          width: 0;
          height: 2px;
          background-color: currentColor;
          transform: translateX(-50%);
          transition: width 0.3s ease;
        }
        .menu-link:hover::after {
          width: calc(100% - 24px);
        }
        .menu-link.selected {
          font-weight: 700;
          border-bottom: 2px solid currentColor;
        }
        .menu-link:active {
          transform: scale(0.95);
        }
      `}</style>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-50 transform transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isMobileNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={closeAll}
        />
        <div className="relative h-full w-80 ml-auto bg-gray-900/90 dark:bg-gray-800/90 backdrop-blur-lg shadow-2xl overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <Link
                href="/"
                className="text-2xl font-bold text-white"
                onClick={closeAll}
              >
                Glync.ai
              </Link>
              <button
                onClick={closeAll}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <FiX className="text-2xl text-white" />
              </button>
            </div>
            <nav className="flex flex-col space-y-2">
              <MobileDropdown
                title="Software"
                isOpen={mobileDropdowns.software}
                onClick={() => toggleMobileDropdown("software")}
              >
                {menuItems.software.map((item) => (
                  <MobileMenuItem
                    key={item.href}
                    href={item.href}
                    onClick={closeAll}
                  >
                    {item.label}
                  </MobileMenuItem>
                ))}
              </MobileDropdown>
              <MobileDropdown
                title="Features"
                isOpen={mobileDropdowns.features}
                onClick={() => toggleMobileDropdown("features")}
              >
                {menuItems.features.map((item) => (
                  <MobileMenuItem
                    key={item.href}
                    href={item.href}
                    onClick={closeAll}
                  >
                    {item.label}
                  </MobileMenuItem>
                ))}
              </MobileDropdown>
              <MobileDropdown
                title="AI Analysis"
                isOpen={mobileDropdowns.aiAnalysis}
                onClick={() => toggleMobileDropdown("aiAnalysis")}
              >
                {menuItems.aiAnalysis.map((item) => (
                  <MobileMenuItem
                    key={item.href}
                    href={item.href}
                    onClick={closeAll}
                  >
                    {item.label}
                  </MobileMenuItem>
                ))}
              </MobileDropdown>
              <Link
                href="/pricing"
                onClick={closeAll}
                className={`py-4 text-lg font-medium text-gray-200 hover:text-white transition-colors duration-200 menu-link ${
                  router.pathname === "/pricing" ? "selected" : ""
                }`}
              >
                Pricing
              </Link>
              <Link
                href="/security"
                onClick={closeAll}
                className={`py-4 text-lg font-medium text-gray-200 hover:text-white transition-colors duration-200 menu-link ${
                  router.pathname === "/security" ? "selected" : ""
                }`}
              >
                Security
              </Link>
              <MobileDropdown
                title="Resources"
                isOpen={mobileDropdowns.resources}
                onClick={() => toggleMobileDropdown("resources")}
              >
                {menuItems.resources.map((item) => (
                  <MobileMenuItem
                    key={item.href}
                    href={item.href}
                    onClick={closeAll}
                  >
                    {item.label}
                  </MobileMenuItem>
                ))}
              </MobileDropdown>
            </nav>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-lg transition-all duration-300 ${
          isScrolled ? "shadow-md" : "shadow-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-900 dark:text-white"
            >
              Glync.ai
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              {Object.keys(menuItems).map((menu) => (
                <div
                  key={menu}
                  className="relative group"
                  onMouseEnter={() =>
                    menuItems[menu].length > 1 &&
                    setDropdownOpen((prev) => ({ ...prev, [menu]: true }))
                  }
                  onMouseLeave={() =>
                    setDropdownOpen((prev) => ({ ...prev, [menu]: false }))
                  }
                >
                  {menuItems[menu].length === 1 ? (
                    <Link
                      href={menuItems[menu][0].href}
                      className={`px-3 py-2 rounded-lg text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 menu-link ${
                        router.pathname === menuItems[menu][0].href
                          ? "selected"
                          : ""
                      }`}
                    >
                      {menuLabels[menu]}
                    </Link>
                  ) : (
                    <>
                      <button
                        className="flex items-center space-x-1 px-3 py-2 rounded-lg text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 menu-link"
                      >
                        <span>{menuLabels[menu]}</span>
                        <FiChevronDown className="mt-0.5" />
                      </button>
                      <DesktopDropdown isOpen={dropdownOpen[menu]}>
                        {menuItems[menu].map((item) => (
                          <DesktopDropdownItem
                            key={item.href}
                            href={item.href}
                            onClick={closeAll}
                          >
                            {item.label}
                          </DesktopDropdownItem>
                        ))}
                      </DesktopDropdown>
                    </>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={toggleMobileNav}
              className="md:hidden p-2 rounded-lg hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors duration-200"
            >
              <FiMenu className="text-2xl text-gray-900 dark:text-white" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MenuBar;