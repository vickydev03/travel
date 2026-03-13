"use client";
import React, { useState, useMemo } from "react";
import { Search, X, ChevronDown } from "lucide-react";

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

function ExploreFilters({ tourTypes, categories, filters, onFiltersChange }: Props) {
  const upcomingMonths = useMemo(() => {
    const months: { label: string; value: string }[] = [];
    const now = new Date();
    for (let i = 0; i < 8; i++) {
      const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
      months.push({
        label: d.toLocaleDateString("en-GB", { month: "short", year: "2-digit" }),
        value: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`,
      });
    }
    return months;
  }, []);

  const update = (partial: Partial<ExploreFilterState>) =>
    onFiltersChange({ ...filters, ...partial });

  const clearAll = () =>
    onFiltersChange({
      tourTypeId: undefined,
      categoryId: undefined,
      month: undefined,
      minPrice: undefined,
      maxPrice: undefined,
      search: "",
      sortBy: "date_asc",
    });

  const hasActiveFilters =
    filters.tourTypeId ||
    filters.categoryId ||
    filters.month ||
    filters.minPrice ||
    filters.maxPrice ||
    filters.search;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');

        .ef-root {
          font-family: 'DM Sans', sans-serif;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* ── SEARCH ── */
        .ef-search-wrap {
          position: relative;
        }
        .ef-search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
          pointer-events: none;
          flex-shrink: 0;
        }
        .ef-search {
          width: 100%;
          padding: 11px 40px 11px 42px;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          background: #faf9f7;
          font-size: 14px;
          font-family: 'DM Sans', sans-serif;
          color: #0d1f1a;
          transition: border-color 0.2s, box-shadow 0.2s;
          outline: none;
          box-sizing: border-box;
        }
        .ef-search::placeholder { color: #9ca3af; }
        .ef-search:focus {
          border-color: #0d1f1a;
          box-shadow: 0 0 0 3px rgba(13, 31, 26, 0.08);
          background: #fff;
        }
        .ef-search-clear {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          color: #9ca3af;
          display: flex;
          align-items: center;
          padding: 2px;
          border-radius: 4px;
          transition: color 0.15s;
        }
        .ef-search-clear:hover { color: #374151; }

        /* ── SECTION ── */
        .ef-section { display: flex; flex-direction: column; gap: 10px; }

        .ef-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #9ca3af;
        }

        /* ── PILLS ── */
        .ef-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .ef-pill {
          padding: 6px 14px;
          border-radius: 100px;
          border: 1px solid #e5e7eb;
          background: #faf9f7;
          font-size: 13px;
          font-weight: 400;
          font-family: 'DM Sans', sans-serif;
          color: #6b7280;
          cursor: pointer;
          transition: all 0.18s;
          white-space: nowrap;
          line-height: 1.4;
        }
        .ef-pill:hover {
          border-color: #0d1f1a;
          color: #0d1f1a;
          background: #fff;
        }
        .ef-pill.active {
          border-color: #0d1f1a;
          background: #0d1f1a;
          color: #f5f2ed;
          font-weight: 500;
        }

        /* ── PRICE INPUTS ── */
        .ef-price-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .ef-price-input-wrap {
          position: relative;
          flex: 1;
        }
        .ef-price-symbol {
          position: absolute;
          left: 11px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 13px;
          color: #9ca3af;
          pointer-events: none;
        }
        .ef-price-input {
          width: 100%;
          padding: 9px 10px 9px 26px;
          border-radius: 10px;
          border: 1px solid #e5e7eb;
          background: #faf9f7;
          font-size: 13px;
          font-family: 'DM Sans', sans-serif;
          color: #0d1f1a;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
        }
        .ef-price-input::placeholder { color: #c4c4c4; }
        .ef-price-input:focus {
          border-color: #0d1f1a;
          box-shadow: 0 0 0 3px rgba(13, 31, 26, 0.08);
          background: #fff;
        }
        .ef-price-dash {
          font-size: 13px;
          color: #d1d5db;
          flex-shrink: 0;
        }

        /* ── SORT SELECT ── */
        .ef-select-wrap {
          position: relative;
        }
        .ef-select {
          width: 100%;
          appearance: none;
          padding: 10px 36px 10px 14px;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          background: #faf9f7;
          font-size: 13px;
          font-family: 'DM Sans', sans-serif;
          color: #374151;
          cursor: pointer;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .ef-select:focus {
          border-color: #0d1f1a;
          box-shadow: 0 0 0 3px rgba(13, 31, 26, 0.08);
          background: #fff;
        }
        .ef-select-chevron {
          position: absolute;
          right: 11px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          color: #9ca3af;
        }

        /* ── DIVIDER ── */
        .ef-divider {
          height: 1px;
          background: #f0ece6;
          margin: 2px 0;
        }

        /* ── CLEAR ── */
        .ef-clear-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: none;
          border: none;
          font-size: 12px;
          font-weight: 500;
          font-family: 'DM Sans', sans-serif;
          color: #c8a96e;
          cursor: pointer;
          padding: 4px 0;
          transition: color 0.15s;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .ef-clear-btn:hover { color: #a8893e; }
      `}</style>

      <div className="ef-root">
        {/* Search */}
        <div className="ef-search-wrap">
          <Search size={15} className="ef-search-icon" />
          <input
            type="text"
            placeholder="Search trips by name…"
            value={filters.search}
            onChange={(e) => update({ search: e.target.value })}
            className="ef-search"
          />
          {filters.search && (
            <button className="ef-search-clear" onClick={() => update({ search: "" })}>
              <X size={13} />
            </button>
          )}
        </div>

        {/* Sort */}
        <div className="ef-section">
          <span className="ef-label">Sort by</span>
          <div className="ef-select-wrap">
            <select
              value={filters.sortBy}
              onChange={(e) => update({ sortBy: e.target.value as ExploreFilterState["sortBy"] })}
              className="ef-select"
            >
              <option value="date_asc">Newest first</option>
              <option value="price_asc">Price: low → high</option>
              <option value="price_desc">Price: high → low</option>
            </select>
            <ChevronDown size={14} className="ef-select-chevron" />
          </div>
        </div>

        <div className="ef-divider" />

        {/* Tour Type */}
        {tourTypes.length > 0 && (
          <div className="ef-section">
            <span className="ef-label">Tour type</span>
            <div className="ef-pills">
              <button
                className={`ef-pill${!filters.tourTypeId ? " active" : ""}`}
                onClick={() => update({ tourTypeId: undefined })}
              >
                All
              </button>
              {tourTypes.map((type) => (
                <button
                  key={type.id}
                  className={`ef-pill${filters.tourTypeId === type.id ? " active" : ""}`}
                  onClick={() =>
                    update({ tourTypeId: filters.tourTypeId === type.id ? undefined : type.id })
                  }
                >
                  {type.title}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Category */}
        {categories.length > 0 && (
          <div className="ef-section">
            <span className="ef-label">Category</span>
            <div className="ef-pills">
              <button
                className={`ef-pill${!filters.categoryId ? " active" : ""}`}
                onClick={() => update({ categoryId: undefined })}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`ef-pill${filters.categoryId === cat.id ? " active" : ""}`}
                  onClick={() =>
                    update({ categoryId: filters.categoryId === cat.id ? undefined : cat.id })
                  }
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Month */}
        <div className="ef-section">
          <span className="ef-label">Travel month</span>
          <div className="ef-pills">
            <button
              className={`ef-pill${!filters.month ? " active" : ""}`}
              onClick={() => update({ month: undefined })}
            >
              Any
            </button>
            {upcomingMonths.map((m) => (
              <button
                key={m.value}
                className={`ef-pill${filters.month === m.value ? " active" : ""}`}
                onClick={() =>
                  update({ month: filters.month === m.value ? undefined : m.value })
                }
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        <div className="ef-divider" />

        {/* Budget */}
        <div className="ef-section">
          <span className="ef-label">Budget (₹)</span>
          <div className="ef-price-row">
            <div className="ef-price-input-wrap">
              <span className="ef-price-symbol">₹</span>
              <input
                type="number"
                placeholder="Min"
                value={filters.minPrice ?? ""}
                onChange={(e) =>
                  update({ minPrice: e.target.value ? Number(e.target.value) : undefined })
                }
                className="ef-price-input"
              />
            </div>
            <span className="ef-price-dash">—</span>
            <div className="ef-price-input-wrap">
              <span className="ef-price-symbol">₹</span>
              <input
                type="number"
                placeholder="Max"
                value={filters.maxPrice ?? ""}
                onChange={(e) =>
                  update({ maxPrice: e.target.value ? Number(e.target.value) : undefined })
                }
                className="ef-price-input"
              />
            </div>
          </div>
        </div>

        {/* Clear all */}
        {hasActiveFilters && (
          <button className="ef-clear-btn" onClick={clearAll}>
            <X size={11} />
            Clear all filters
          </button>
        )}
      </div>
    </>
  );
}

export default ExploreFilters;