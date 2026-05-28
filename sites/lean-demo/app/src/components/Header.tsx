import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '../generated/siteData';

const fallbackNavItems = [
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'Ball Valve', href: '/products?type=ball-valve' },
      { label: 'Gate Valve', href: '/products?type=gate-valve' },
      { label: 'Globe Valve', href: '/products?type=globe-valve' },
      { label: 'Butterfly Valve', href: '/products?type=butterfly-valve' },
      { label: 'Check Valve', href: '/products?type=check-valve' },
      { label: 'Y Strainer', href: '/products?type=strainer' },
    ],
  },
  { label: 'Industries', href: '/industries' },
  { label: 'Cases', href: '/cases' },
  { label: 'Factory', href: '/factory' },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Catalogs & Datasheets', href: '/resources#downloads' },
      { label: 'Technical Articles', href: '/resources#articles' },
      { label: 'FAQs', href: '/resources#faqs' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const lastScrollY = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();
  const company = siteData.company;
  const navItems = siteData.nav?.primary?.length ? siteData.nav.primary : fallbackNavItems;
  const requestQuoteHref = siteData.pages?.requestQuote?.href || '/request-quote';

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 50);
      if (y < 50) {
        setHidden(false);
      } else if (y > lastScrollY.current) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = searchQuery.trim();
    if (!query) return;
    navigate(`/products?q=${encodeURIComponent(query)}`);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-gray-200'
            : 'bg-white border-gray-100'
        } ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
        style={{ height: 80 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2.5">
            <img
              src={company.logo || '/images/logo-haiyue-lockup.png'}
              alt={company.logoAlt || company.brand}
              className="h-12 sm:h-14 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center flex-1 justify-center">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children?.length && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium transition-colors duration-150 ${
                    location.pathname.startsWith(item.href)
                      ? 'text-brand-red'
                      : 'text-text-primary hover:text-brand-red'
                  }`}
                >
                  {item.label}
                  {item.children?.length ? <ChevronDown className="w-3.5 h-3.5" /> : null}
                </Link>

                <AnimatePresence>
                  {item.children?.length && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.12 }}
                      className="absolute top-full left-0 mt-0 w-56 bg-white shadow-lg border border-gray-100 py-2 z-50"
                    >
                      {item.children?.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.href}
                          className="block px-4 py-2 text-sm text-text-secondary hover:text-brand-red hover:bg-surface transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right: Search + CTA */}
          <div className="flex items-center gap-3">
            {/* Search Input */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center relative">
              <Search className="absolute left-3 w-4 h-4 text-text-muted pointer-events-none" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="w-[180px] h-10 pl-9 pr-3 text-sm border border-gray-200 bg-surface focus:outline-none focus:border-brand-red transition-colors"
              />
            </form>

            <Link
              to={requestQuoteHref}
              className="hidden sm:inline-flex items-center gap-1.5 h-[48px] px-6 bg-brand-red text-white text-sm font-semibold hover:bg-dark-red transition-colors whitespace-nowrap"
            >
              Request a Quote
            </Link>
            <button
              className="lg:hidden p-2 text-text-primary"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-white z-50 lg:hidden overflow-y-auto"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <span className="font-semibold text-text-primary">Menu</span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2" aria-label="Close">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="p-4">
                <form onSubmit={handleSearch} className="flex items-center gap-2 mb-4 px-3 py-2 border border-gray-200 bg-surface">
                  <Search className="w-4 h-4 text-text-muted" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    className="flex-1 bg-transparent text-sm focus:outline-none"
                  />
                </form>
                {navItems.map((item) => (
                  <div key={item.label} className="border-b border-gray-100 last:border-0">
                    <Link
                      to={item.href}
                      className="block py-3 text-text-primary font-medium hover:text-brand-red"
                      onClick={() => !item.children?.length && setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.children?.length ? (
                      <div className="pl-4 pb-2">
                        {item.children.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.href}
                            className="block py-2 text-sm text-text-muted hover:text-brand-red"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
                <Link
                  to={requestQuoteHref}
                  className="mt-4 block w-full text-center h-12 bg-brand-red text-white font-semibold text-sm leading-[48px] hover:bg-dark-red"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Request a Quote
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
