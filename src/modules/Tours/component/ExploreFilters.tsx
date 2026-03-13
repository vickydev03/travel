"use client";
import React, { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type TourTypeItem = {
  id: number;
  title: string;
  _count: { tours: number };
};

type CategoryItem = {
  id: number;
  title: string;
  slug: string;
  _count: { trip: number };
};

export type ExploreFilterState = {
  tourTypeId: number | undefined;
  categoryId: number | undefined;
  month: string | undefined;
  minPrice: number | undefined;
  maxPrice: number | undefined;
  search: string;
  sortBy: "price_asc" | "price_desc" | "date_asc";
};

type Props = {
  tourTypes: TourTypeItem[];
  categories: CategoryItem[];
  filters: ExploreFilterState;
  onFiltersChange: (filters: ExploreFilterState) => void;
};

function ExploreFilters({
  tourTypes,
  categories,
  filters,
  onFiltersChange,
}: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Generate upcoming 6 months
  const upcomingMonths = useMemo(() => {
    const months: { label: string; value: string }[] = [];
    const now = new Date();
    for (let i = 0; i < 8; i++) {
      const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
      months.push({
        label: d.toLocaleDateString("en-GB", {
          month: "short",
          year: "2-digit",
        }),
        value: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`,
      });
    }
    return months;
  }, []);

  const update = (partial: Partial<ExploreFilterState>) => {
    onFiltersChange({ ...filters, ...partial });
  };

  const clearAll = () => {
    onFiltersChange({
      tourTypeId: undefined,
      categoryId: undefined,
      month: undefined,
      minPrice: undefined,
      maxPrice: undefined,
      search: "",
      sortBy: "date_asc",
    });
  };

  const hasActiveFilters =
    filters.tourTypeId ||
    filters.categoryId ||
    filters.month ||
    filters.minPrice ||
    filters.maxPrice ||
    filters.search;

  const FilterContent = () => (
    <div className="flex flex-col gap-5">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search trips..."
          value={filters.search}
          onChange={(e) => update({ search: e.target.value })}
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#003022]/20 focus:border-[#003022] transition-all"
        />
        {filters.search && (
          <button
            onClick={() => update({ search: "" })}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            <X className="size-4 text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      {/* Tour Type */}
      {tourTypes.length > 0 && (
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Tour Type
          </h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => update({ tourTypeId: undefined })}
              className={`px-3.5 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                !filters.tourTypeId
                  ? "border-[#003022] bg-[#003022] text-white shadow-sm"
                  : "border-gray-300 text-gray-600 hover:border-gray-400 bg-white"
              }`}
            >
              🌏 All
            </button>
            {tourTypes.map((type) => (
              <button
                key={type.id}
                onClick={() =>
                  update({
                    tourTypeId:
                      filters.tourTypeId === type.id ? undefined : type.id,
                  })
                }
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                  filters.tourTypeId === type.id
                    ? "border-[#003022] bg-[#003022] text-white shadow-sm"
                    : "border-gray-300 text-gray-600 hover:border-gray-400 bg-white"
                }`}
              >
                {type.title}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Category */}
      {categories.length > 0 && (
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Category
          </h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => update({ categoryId: undefined })}
              className={`px-3.5 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                !filters.categoryId
                  ? "border-[#003022] bg-[#003022] text-white shadow-sm"
                  : "border-gray-300 text-gray-600 hover:border-gray-400 bg-white"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() =>
                  update({
                    categoryId:
                      filters.categoryId === cat.id ? undefined : cat.id,
                  })
                }
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                  filters.categoryId === cat.id
                    ? "border-[#003022] bg-[#003022] text-white shadow-sm"
                    : "border-gray-300 text-gray-600 hover:border-gray-400 bg-white"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Month Picker */}
      <div>
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Travel Month
        </h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => update({ month: undefined })}
            className={`px-3.5 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
              !filters.month
                ? "border-[#003022] bg-[#003022] text-white shadow-sm"
                : "border-gray-300 text-gray-600 hover:border-gray-400 bg-white"
            }`}
          >
            Any
          </button>
          {upcomingMonths.map((m) => (
            <button
              key={m.value}
              onClick={() =>
                update({
                  month: filters.month === m.value ? undefined : m.value,
                })
              }
              className={`px-3.5 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                filters.month === m.value
                  ? "border-[#003022] bg-[#003022] text-white shadow-sm"
                  : "border-gray-300 text-gray-600 hover:border-gray-400 bg-white"
              }`}
            >
              📅 {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Budget Range
        </h3>
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
              ₹
            </span>
            <input
              type="number"
              placeholder="Min"
              value={filters.minPrice ?? ""}
              onChange={(e) =>
                update({
                  minPrice: e.target.value ? Number(e.target.value) : undefined,
                })
              }
              className="w-full pl-7 pr-3 py-2 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#003022]/20 focus:border-[#003022] transition-all"
            />
          </div>
          <span className="text-gray-400 text-sm">—</span>
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
              ₹
            </span>
            <input
              type="number"
              placeholder="Max"
              value={filters.maxPrice ?? ""}
              onChange={(e) =>
                update({
                  maxPrice: e.target.value ? Number(e.target.value) : undefined,
                })
              }
              className="w-full pl-7 pr-3 py-2 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#003022]/20 focus:border-[#003022] transition-all"
            />
          </div>
        </div>
      </div>

      {/* Clear All */}
      {hasActiveFilters && (
        <button
          onClick={clearAll}
          className="text-sm font-medium text-[#F61B00] hover:text-red-700 flex items-center gap-1 transition-colors w-fit"
        >
          <X className="size-3.5" />
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div className="w-full">
      {/* Desktop Filters */}
      <div className="hidden md:block">
        {/* Top bar: Search + Sort */}
        <div className="flex items-center gap-4 mb-5">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search trips by name..."
              value={filters.search}
              onChange={(e) => update({ search: e.target.value })}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#003022]/20 focus:border-[#003022] transition-all shadow-sm"
            />
            {filters.search && (
              <button
                onClick={() => update({ search: "" })}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <X className="size-4 text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>

          <div className="relative">
            <select
              value={filters.sortBy}
              onChange={(e) =>
                update({
                  sortBy: e.target.value as ExploreFilterState["sortBy"],
                })
              }
              className="appearance-none pl-4 pr-9 py-2.5 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#003022]/20 focus:border-[#003022] cursor-pointer shadow-sm"
            >
              <option value="date_asc">🕒 Newest First</option>
              <option value="price_asc">💰 Price: Low → High</option>
              <option value="price_desc">💰 Price: High → Low</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-gray-400 pointer-events-none" />
          </div>

          {hasActiveFilters && (
            <button
              onClick={clearAll}
              className="text-sm font-medium text-[#F61B00] hover:text-red-700 flex items-center gap-1 transition-colors whitespace-nowrap"
            >
              <X className="size-3.5" />
              Clear all
            </button>
          )}
        </div>

        {/* Filter pills row */}
        <div className="flex flex-wrap items-start gap-6">
          {/* Tour Type pills */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mr-1">
              Type:
            </span>
            <button
              onClick={() => update({ tourTypeId: undefined })}
              className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                !filters.tourTypeId
                  ? "border-[#003022] bg-[#003022] text-white shadow-sm"
                  : "border-gray-200 text-gray-600 hover:border-gray-400 bg-white"
              }`}
            >
              All
            </button>
            {tourTypes.map((type) => (
              <button
                key={type.id}
                onClick={() =>
                  update({
                    tourTypeId:
                      filters.tourTypeId === type.id ? undefined : type.id,
                  })
                }
                className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                  filters.tourTypeId === type.id
                    ? "border-[#003022] bg-[#003022] text-white shadow-sm"
                    : "border-gray-200 text-gray-600 hover:border-gray-400 bg-white"
                }`}
              >
                {type.title}
              </button>
            ))}
          </div>

          {/* Category pills */}
          {categories.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mr-1">
                Category:
              </span>
              <button
                onClick={() => update({ categoryId: undefined })}
                className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                  !filters.categoryId
                    ? "border-[#003022] bg-[#003022] text-white shadow-sm"
                    : "border-gray-200 text-gray-600 hover:border-gray-400 bg-white"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() =>
                    update({
                      categoryId:
                        filters.categoryId === cat.id ? undefined : cat.id,
                    })
                  }
                  className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                    filters.categoryId === cat.id
                      ? "border-[#003022] bg-[#003022] text-white shadow-sm"
                      : "border-gray-200 text-gray-600 hover:border-gray-400 bg-white"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          )}

          {/* Month pills */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mr-1">
              Month:
            </span>
            <button
              onClick={() => update({ month: undefined })}
              className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                !filters.month
                  ? "border-[#003022] bg-[#003022] text-white shadow-sm"
                  : "border-gray-200 text-gray-600 hover:border-gray-400 bg-white"
              }`}
            >
              Any
            </button>
            {upcomingMonths.map((m) => (
              <button
                key={m.value}
                onClick={() =>
                  update({
                    month: filters.month === m.value ? undefined : m.value,
                  })
                }
                className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                  filters.month === m.value
                    ? "border-[#003022] bg-[#003022] text-white shadow-sm"
                    : "border-gray-200 text-gray-600 hover:border-gray-400 bg-white"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          {/* Price inputs */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mr-1">
              Budget:
            </span>
            <div className="relative">
              <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                ₹
              </span>
              <input
                type="number"
                placeholder="Min"
                value={filters.minPrice ?? ""}
                onChange={(e) =>
                  update({
                    minPrice: e.target.value
                      ? Number(e.target.value)
                      : undefined,
                  })
                }
                className="w-24 pl-6 pr-2 py-1.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#003022]/20 focus:border-[#003022] transition-all"
              />
            </div>
            <span className="text-gray-400 text-xs">—</span>
            <div className="relative">
              <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                ₹
              </span>
              <input
                type="number"
                placeholder="Max"
                value={filters.maxPrice ?? ""}
                onChange={(e) =>
                  update({
                    maxPrice: e.target.value
                      ? Number(e.target.value)
                      : undefined,
                  })
                }
                className="w-24 pl-6 pr-2 py-1.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#003022]/20 focus:border-[#003022] transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Search bar + Filter button */}
      <div className="md:hidden flex items-center gap-3 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search trips..."
            value={filters.search}
            onChange={(e) => update({ search: e.target.value })}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#003022]/20 focus:border-[#003022] transition-all shadow-sm"
          />
        </div>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <button className="relative p-2.5 rounded-xl border border-gray-200 bg-white shadow-sm hover:bg-gray-50 transition-colors">
              <SlidersHorizontal className="size-5 text-gray-700" />
              {hasActiveFilters && (
                <span className="absolute -top-1 -right-1 size-3 bg-[#F61B00] rounded-full"></span>
              )}
            </button>
          </SheetTrigger>
          <SheetContent side="bottom" className="rounded-t-3xl max-h-[85vh] overflow-y-auto pb-8">
            <SheetHeader className="mb-4">
              <SheetTitle className="text-lg font-semibold text-[#003022]">
                Filters
              </SheetTitle>
            </SheetHeader>

            <FilterContent />

            {/* Sort */}
            <div className="mt-5">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Sort By
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { value: "date_asc" as const, label: "🕒 Newest" },
                  { value: "price_asc" as const, label: "💰 Low → High" },
                  { value: "price_desc" as const, label: "💰 High → Low" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => update({ sortBy: opt.value })}
                    className={`px-3.5 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                      filters.sortBy === opt.value
                        ? "border-[#003022] bg-[#003022] text-white shadow-sm"
                        : "border-gray-300 text-gray-600 hover:border-gray-400 bg-white"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <Button
              onClick={() => setMobileOpen(false)}
              className="w-full mt-6 gold-gradient-soft rounded-full py-5 font-medium"
            >
              Apply Filters
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default ExploreFilters;
