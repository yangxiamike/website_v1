import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowRight, Search, SlidersHorizontal, ChevronDown, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { productsList, filterOptions, applicationHelpers } from '../data/productsCatalog';
import {
  IconWaterTreatment, IconChemicalProcessing, IconOilGas, IconGeneralPipeline,
} from '../components/icons';
import CTABanner from '../components/CTABanner';
import { CTAButton, PageHero, ProductCard } from '../components/common';
import { pageHeroes } from '../data/pageHeroes';

const appIconMap: Record<string, React.FC<{ className?: string; size?: number; strokeWidth?: number }>> = {
  'Water Treatment': IconWaterTreatment,
  'Chemical Processing': IconChemicalProcessing,
  'Oil & Gas': IconOilGas,
  'General Pipeline': IconGeneralPipeline,
};

const PRODUCTS_PER_PAGE = 12;

/* URL type param → filter value mapping */
const urlTypeToFilter: Record<string, string> = {
  'ball-valve': 'Ball Valve',
  'gate-valve': 'Gate Valve',
  'globe-valve': 'Globe Valve',
  'butterfly-valve': 'Butterfly Valve',
  'check-valve': 'Check Valve',
  'strainer': 'Strainer',
};

/* ─── Checkbox filter group ─── */
function FilterGroup({ title, options, selected, toggle }: {
  title: string; options: string[]; selected: string[]; toggle: (v: string) => void;
}) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b border-gray-100">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-3.5 text-sm font-semibold text-text-primary uppercase tracking-wider">
        {title}
        <ChevronDown className={`w-4 h-4 text-text-muted transition-transform ${open ? '' : '-rotate-180'}`} />
      </button>
      {open && (
        <div className="pb-4 space-y-2.5">
          {options.map((opt) => (
            <label key={opt} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={selected.includes(opt)}
                onChange={() => toggle(opt)}
                className="w-4 h-4 border border-gray-300 text-brand-red focus:ring-brand-red"
              />
              <span className="text-sm text-text-secondary group-hover:text-brand-red transition-colors">{opt}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Mobile Filter Drawer ─── */
function MobileFilterDrawer({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;
  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />
      <div className="fixed top-0 left-0 bottom-0 w-[320px] max-w-[85vw] bg-white z-50 overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h3 className="font-semibold text-text-primary">Filters</h3>
          <button onClick={onClose} className="p-2" aria-label="Close"><X className="w-5 h-5" /></button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </>
  );
}

/* ═══════════════════════════ PRODUCTS PAGE ═══════════════════════════ */
export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeParam = searchParams.get('type') || '';
  const queryParam = searchParams.get('q') || '';
  const typeFilter = urlTypeToFilter[typeParam];

  // Filter state
  const [filters, setFilters] = useState<Record<string, string[]>>({
    valveType: [], application: [], material: [], pressure: [], connection: [],
  });
  const [sortBy, setSortBy] = useState('relevance');
  const [page, setPage] = useState(1);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [mobileSortOpen, setMobileSortOpen] = useState(false);

  const setSearchQuery = (value: string) => {
    const next = new URLSearchParams(searchParams);
    if (value.trim()) next.set('q', value);
    else next.delete('q');
    setSearchParams(next, { replace: true });
    setPage(1);
  };

  // Toggle a filter value
  const toggleFilter = (group: string, value: string) => {
    setFilters((prev) => {
      const current = prev[group] || [];
      const next = current.includes(value) ? current.filter((v) => v !== value) : [...current, value];
      return { ...prev, [group]: next };
    });
    if (group === 'valveType' && typeFilter === value) {
      const next = new URLSearchParams(searchParams);
      next.delete('type');
      setSearchParams(next, { replace: true });
    }
    setPage(1);
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({ valveType: [], application: [], material: [], pressure: [], connection: [] });
    setSearchParams({}, { replace: true });
    setPage(1);
  };

  // Filtered products
  const filtered = useMemo(() => {
    let list = [...productsList];

    // Search
    if (queryParam.trim()) {
      const q = queryParam.toLowerCase();
      list = list.filter((p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }

    // Category filters
    const valveTypes = typeFilter && !filters.valveType.includes(typeFilter)
      ? [...filters.valveType, typeFilter]
      : filters.valveType;
    if (valveTypes.length) list = list.filter((p) => valveTypes.includes(p.category));
    if (filters.application.length) list = list.filter((p) => p.application.some((a) => filters.application.includes(a)));
    if (filters.material.length) list = list.filter((p) => p.material.some((m) => filters.material.includes(m)));
    if (filters.pressure.length) list = list.filter((p) => p.pressure.some((pr) => filters.pressure.includes(pr)));
    if (filters.connection.length) list = list.filter((p) => p.connection.some((c) => filters.connection.includes(c)));

    // Sort
    if (sortBy === 'name-asc') list.sort((a, b) => a.name.localeCompare(b.name));
    else if (sortBy === 'name-desc') list.sort((a, b) => b.name.localeCompare(a.name));

    return list;
  }, [filters, queryParam, sortBy, typeFilter]);

  // Pagination
  const totalPages = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);
  const pageProducts = filtered.slice((page - 1) * PRODUCTS_PER_PAGE, page * PRODUCTS_PER_PAGE);
  const resultStart = filtered.length > 0 ? (page - 1) * PRODUCTS_PER_PAGE + 1 : 0;
  const resultEnd = Math.min(page * PRODUCTS_PER_PAGE, filtered.length);

  const activeValveTypes = typeFilter && !filters.valveType.includes(typeFilter)
    ? [...filters.valveType, typeFilter]
    : filters.valveType;
  const totalActiveFilters = Object.values(filters).flat().length + (typeFilter && !filters.valveType.includes(typeFilter) ? 1 : 0) + (queryParam ? 1 : 0);

  // Sidebar filters content
  const sidebarFilters = (
    <>
      {/* Search */}
      <div className="mb-5">
        <label className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2 block">Product Search</label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            placeholder="Search by product name..."
            value={queryParam}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 pl-9 pr-3 text-sm border border-gray-200 bg-gray-50 focus:outline-none focus:border-brand-red focus:bg-white transition-colors"
          />
        </div>
      </div>

      <FilterGroup title="Valve Type" options={filterOptions.valveType} selected={activeValveTypes} toggle={(v) => toggleFilter('valveType', v)} />
      <FilterGroup title="Application" options={filterOptions.application} selected={filters.application} toggle={(v) => toggleFilter('application', v)} />
      <FilterGroup title="Material" options={filterOptions.material} selected={filters.material} toggle={(v) => toggleFilter('material', v)} />
      <FilterGroup title="Pressure Rating" options={filterOptions.pressure} selected={filters.pressure} toggle={(v) => toggleFilter('pressure', v)} />
      <FilterGroup title="Connection Type" options={filterOptions.connection} selected={filters.connection} toggle={(v) => toggleFilter('connection', v)} />

      {totalActiveFilters > 0 && (
        <button onClick={clearFilters} className="mt-4 flex items-center gap-2 text-sm text-brand-red font-medium hover:underline">
          <SlidersHorizontal className="w-4 h-4" /> Clear All Filters
        </button>
      )}
    </>
  );

  return (
    <div className="pt-[80px]">
      <PageHero
        {...pageHeroes.products}
        ctas={(
          <>
            <CTAButton to="/request-quote?source=products-hero">Request a Quote</CTAButton>
            <CTAButton to="/request-quote?source=catalog-download" variant="ghost">Download Catalog</CTAButton>
          </>
        )}
      />

      {/* ═══════ MOBILE: Search Bar (above toolbar) ═══════ */}
      <div className="lg:hidden bg-white border-b border-gray-100 px-4 py-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            placeholder="Search by product name..."
            value={queryParam}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-11 pl-9 pr-3 text-sm border border-gray-200 bg-gray-50 focus:outline-none focus:border-brand-red"
          />
        </div>
      </div>

      {/* ═══════ MOBILE: Sticky Toolbar ═══════ */}
      <div className="lg:hidden sticky top-0 z-40 bg-white border-b border-gray-200 px-4 py-2.5 flex items-center gap-3">
        <button
          onClick={() => setMobileFilterOpen(true)}
          className="flex items-center gap-2 h-10 px-4 border border-gray-200 text-sm font-medium text-text-primary hover:border-brand-red hover:text-brand-red transition-colors"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filter
          {totalActiveFilters > 0 && <span className="w-5 h-5 bg-brand-red text-white text-[11px] font-bold flex items-center justify-center">{totalActiveFilters}</span>}
        </button>
        <div className="relative flex-1">
          <button
            onClick={() => setMobileSortOpen(!mobileSortOpen)}
            className="flex items-center justify-between w-full h-10 px-3 border border-gray-200 text-sm text-text-primary"
          >
            <span>Sort: {sortBy === 'relevance' ? 'Relevance' : sortBy === 'name-asc' ? 'Name A-Z' : 'Name Z-A'}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          {mobileSortOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 shadow-lg z-50">
              {[
                { value: 'relevance', label: 'Relevance' },
                { value: 'name-asc', label: 'Name A-Z' },
                { value: 'name-desc', label: 'Name Z-A' },
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => { setSortBy(opt.value); setMobileSortOpen(false); }}
                  className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 ${sortBy === opt.value ? 'text-brand-red font-medium' : 'text-text-secondary'}`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>
        <span className="text-xs text-text-muted whitespace-nowrap flex-shrink-0">{resultStart}-{resultEnd} of {filtered.length}</span>
      </div>

      {/* ═══════ MAIN CONTENT ═══════ */}
      <section className="bg-white py-10 lg:py-14">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-10">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-[280px] flex-shrink-0">
              <div className="sticky top-24">
                <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4">Filter Products</h3>
                {sidebarFilters}
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1 min-w-0">
              {/* Desktop results bar */}
              <div className="hidden lg:flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-sm text-text-muted">
                    Showing <strong className="text-text-primary">{resultStart}–{resultEnd}</strong> of {filtered.length} products
                  </span>
                  {/* Active filter tags */}
                  {activeValveTypes.map((vt) => (
                    <span key={vt} className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-red/10 text-brand-red text-xs font-semibold">
                      {vt}
                      <button onClick={() => toggleFilter('valveType', vt)} className="hover:text-dark-red"><X className="w-3 h-3" /></button>
                    </span>
                  ))}
                </div>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none h-10 pl-4 pr-10 text-sm border border-gray-200 bg-white focus:outline-none focus:border-brand-red cursor-pointer"
                  >
                    <option value="relevance">Sort by: Relevance</option>
                    <option value="name-asc">Sort by: Name A-Z</option>
                    <option value="name-desc">Sort by: Name Z-A</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                </div>
              </div>

              {/* Products Grid */}
              {pageProducts.length > 0 ? (
                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
                  {pageProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-text-muted text-lg">No products match your filters.</p>
                  <button onClick={clearFilters} className="mt-4 text-brand-red text-sm font-semibold hover:underline">
                    Clear All Filters
                  </button>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-10 pt-6 border-t border-gray-100">
                  <button
                    onClick={() => setPage(Math.max(1, page - 1))}
                    disabled={page === 1}
                    className="h-10 px-4 border border-gray-200 text-sm text-text-secondary hover:border-brand-red hover:text-brand-red disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
                  >
                    <ChevronLeft className="w-4 h-4" /> Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <button
                      key={p}
                      onClick={() => setPage(p)}
                      className={`w-10 h-10 text-sm font-medium border transition-colors ${
                        page === p
                          ? 'bg-brand-red text-white border-brand-red'
                          : 'border-gray-200 text-text-secondary hover:border-brand-red hover:text-brand-red'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                  <button
                    onClick={() => setPage(Math.min(totalPages, page + 1))}
                    disabled={page === totalPages}
                    className="h-10 px-4 border border-gray-200 text-sm text-text-secondary hover:border-brand-red hover:text-brand-red disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
                  >
                    Next <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ APPLICATION HELPER ═══════ */}
      <section className="bg-gray-50 py-14 lg:py-18">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-brand-red uppercase tracking-wider mb-3">
              <span className="w-6 h-px bg-brand-red" />
              Application Guide
              <span className="w-6 h-px bg-brand-red" />
            </div>
            <h2 className="text-xl lg:text-2xl font-bold text-text-primary tracking-tight">
              Choose Valves by Application
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {applicationHelpers.map((app) => {
              const IconComp = appIconMap[app.title];
              return (
                <div key={app.title} className="bg-white border border-gray-200 p-6 hover:border-brand-red/40 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 group">
                  {IconComp && <IconComp size={40} strokeWidth={1.5} className="text-brand-red mb-4" />}
                  <h3 className="font-bold text-text-primary text-[15px]">{app.title}</h3>
                  <p className="text-sm text-text-muted mt-2 leading-relaxed line-clamp-2">{app.description}</p>
                  <p className="text-[11px] text-text-muted mt-3">
                    <span className="font-medium">Recommended:</span> {app.recommended}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-brand-red text-sm font-semibold mt-4 group-hover:underline underline-offset-2">
                    View Solutions <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mobile Filter Drawer */}
      <MobileFilterDrawer open={mobileFilterOpen} onClose={() => setMobileFilterOpen(false)}>
        {sidebarFilters}
      </MobileFilterDrawer>

      <CTABanner />
    </div>
  );
}
