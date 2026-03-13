"use client";

import { useTRPC } from "@/trpc/client";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import React, { useState, useMemo } from "react";
import {
  Minus,
  Plus,
  Users,
  Calendar,
  ChevronRight,
  Trash2,
  Phone,
} from "lucide-react";
import { formatBookingReceipt, prepareBookingPayload } from "@/lib/booking";
import { SharingType } from "@/generated/prisma";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";

type BookingItem = {
  sharingType: SharingType;
  price: number;
  quantity: number;
  subtotal: number;
};

function BookingDetails({ id }: { id: string }) {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.booking.getBookingSession.queryOptions({ id }),
  );

  const trip = data?.trip;
  const tripDate = data?.tripDate;

  const [bookingItems, setBookingItems] = useState<Record<string, BookingItem>>(
    {},
  );
  // ── NEW: mobile field state ──────────────────────────────────────────────────
  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileError, setMobileError] = useState("");
  // ────────────────────────────────────────────────────────────────────────────

  const updateQuantity = (
    sharingType: SharingType,
    price: number,
    delta: number,
  ) => {
    setBookingItems((prev) => {
      const current = prev[sharingType];
      const newQty = (current?.quantity ?? 0) + delta;

      if (newQty <= 0) {
        const next = { ...prev };
        delete next[sharingType];
        return next;
      }

      return {
        ...prev,
        [sharingType]: {
          sharingType,
          price,
          quantity: newQty,
          subtotal: newQty * price,
        },
      };
    });
  };

  const { subtotal, totalSeats, gst, tcs, totalAmount } = useMemo(() => {
    const items = Object.values(bookingItems);
    const subtotal = items.reduce((sum, i) => sum + i.subtotal, 0);
    const totalSeats = items.reduce((sum, i) => sum + i.quantity, 0);
    const gst = subtotal * 0.05;
    const tcs = subtotal * 0.05;
    return {
      subtotal,
      totalSeats,
      gst,
      tcs,
      totalAmount: subtotal + gst + tcs,
    };
  }, [bookingItems]);

  const hasItems = Object.keys(bookingItems).length > 0;

  // ── NEW: mobile validation ───────────────────────────────────────────────────
  const validateMobile = (value: string) => {
    if (!value) return "Mobile number is required.";
    if (!/^\+?[0-9]{10,15}$/.test(value.replace(/\s/g, "")))
      return "Enter a valid mobile number.";
    return "";
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d+\s]/g, ""); // allow digits, +, spaces
    setMobileNumber(value);
    if (mobileError) setMobileError(validateMobile(value));
  };
  // ────────────────────────────────────────────────────────────────────────────

  const startDate = tripDate?.startDate
    ? new Date(tripDate.startDate).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "N/A";

  const mutate = useMutation(
    trpc.booking.createBooking.mutationOptions({
      onSuccess: () => toast.success("Booking Created Successfully"),
      onError: (error) => toast.error(error.message),
    }),
  );

  const { user, loading, openLogin, setOpenLogin } = useAuth();

  const handleProceedToPayment = async () => {
    // ── NEW: validate mobile before proceeding ───────────────────────────────
    const err = validateMobile(mobileNumber);
    if (err) {
      setMobileError(err);
      return;
    }
    // ────────────────────────────────────────────────────────────────────────

    const payload = prepareBookingPayload({
      sessionId: id,
      userId: data.userId,
      trip: {
        id: trip.id,
        title: trip.title,
        cardImageUrl: trip.cardImageUrl,
        slug: trip.slug,
      },
      tripDate: {
        id: tripDate.id,
        startDate: new Date(tripDate.startDate),
        endDate: new Date(tripDate.endDate),
      },
      bookingItems,
    });

    const receipt = formatBookingReceipt(payload);
    const items = receipt.guests.map((e) => ({
      sharingType: e.type,
      quantity: e.count,
      pricePerPerson: Number(e.ratePerPerson),
      subtotal: Number(e.lineTotal),
    }));

    await mutate.mutateAsync({
      booking: {
        userId: data.userId,
        tripId: data.tripId,
        tripDateId: data.tripDateId,
        totalAmount: Number(receipt.breakdown.total),
        totalSeats: receipt.totalSeats,
        mobileNumber,
      },
      items,
    });
  };

  return (
    <div className="min-h-screen py-12 bg-gray-50 font-sans text-slate-900">
      <div className="mx-auto max-w-5xl px-4 py-8 md:py-16">
        <header className="mb-10 md:mb-14">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Review your booking
          </h1>
          <p className="mt-2 text-slate-500 font-medium">
            Select room sharing preference and number of guests.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Sharing Type Selection */}
          <div className="lg:col-span-7 space-y-4">
            {tripDate?.pricing.map((pricing) => {
              const item = bookingItems[pricing.sharing];
              const qty = item?.quantity ?? 0;

              return (
                <section
                  key={pricing.sharing}
                  className={`bg-white border rounded-3xl p-6 shadow-sm transition-all ${
                    qty > 0
                      ? "border-slate-900 ring-1 ring-slate-900"
                      : "border-slate-100"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-base font-bold uppercase tracking-wide text-slate-800">
                          {pricing.sharing} Sharing
                        </h3>
                        {qty > 0 && (
                          <span className="text-[10px] font-bold bg-slate-900 text-white px-2 py-0.5 rounded-full">
                            {qty} added
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mb-3">
                        Per person basis
                      </p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-black">
                          ₹{pricing.price.toLocaleString()}
                        </span>
                        <span className="text-xs text-slate-400 line-through">
                          ₹{Math.round(pricing.price * 1.2).toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 bg-slate-50 rounded-2xl p-1 border border-slate-100">
                      <button
                        disabled={qty === 0}
                        onClick={() =>
                          updateQuantity(pricing.sharing, pricing.price, -1)
                        }
                        className="h-10 w-10 flex items-center justify-center rounded-xl bg-white shadow-sm hover:bg-slate-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        {qty === 1 ? (
                          <Trash2 size={14} className="text-red-400" />
                        ) : (
                          <Minus size={15} className="text-slate-600" />
                        )}
                      </button>
                      <span className="font-bold text-lg w-8 text-center">
                        {qty}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(pricing.sharing, pricing.price, 1)
                        }
                        className="h-10 w-10 flex items-center justify-center rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors"
                      >
                        <Plus size={15} />
                      </button>
                    </div>
                  </div>

                  {qty > 0 && (
                    <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between text-sm font-semibold">
                      <span className="text-slate-500">
                        {qty} × ₹{pricing.price.toLocaleString()}
                      </span>
                      <span className="text-slate-800">
                        ₹{(qty * pricing.price).toLocaleString()}
                      </span>
                    </div>
                  )}
                </section>
              );
            })}

            {hasItems && (
              <section className="bg-slate-900 text-white rounded-3xl p-6 space-y-2">
                <p className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">
                  Your selection
                </p>
                {Object.values(bookingItems).map((item) => (
                  <div
                    key={item.sharingType}
                    className="flex justify-between text-sm font-medium"
                  >
                    <span className="text-slate-300">
                      {item.sharingType} Sharing × {item.quantity}
                    </span>
                    <span>₹{item.subtotal.toLocaleString()}</span>
                  </div>
                ))}
              </section>
            )}
          </div>

          {/* RIGHT: Order Summary */}
          <aside className="lg:col-span-5">
            <div className="sticky top-8 bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm">
              {/* Trip Brief */}
              <div className="p-6 bg-slate-50/50 flex gap-4 border-b border-slate-100">
                <img
                  src={trip?.cardImageUrl}
                  alt=""
                  className="h-20 w-20 rounded-2xl object-cover ring-4 ring-white shadow-sm"
                />
                <div className="flex flex-col justify-center">
                  <h2 className="font-bold text-slate-800 leading-tight mb-2">
                    {trip?.title}
                  </h2>
                  <div className="grid grid-cols-1 gap-1">
                    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                      <Calendar size={12} /> {startDate}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                      <Users size={12} />{" "}
                      {totalSeats > 0
                        ? `${totalSeats} Guests`
                        : "No guests selected"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="p-6 space-y-4">
                {hasItems ? (
                  <>
                    <div className="space-y-3">
                      {Object.values(bookingItems).map((item) => (
                        <div
                          key={item.sharingType}
                          className="flex justify-between text-sm font-medium"
                        >
                          <span className="text-slate-500">
                            {item.sharingType} ({item.quantity}p)
                          </span>
                          <span className="text-slate-800">
                            ₹{item.subtotal.toLocaleString()}
                          </span>
                        </div>
                      ))}
                      <div className="flex justify-between text-sm font-medium pt-2 border-t border-slate-100">
                        <span className="text-slate-500">
                          Tax & Fees (GST + TCS)
                        </span>
                        <span className="text-slate-800">
                          ₹{(gst + tcs).toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex justify-between items-end">
                      <div>
                        <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
                          Total Amount
                        </p>
                        <p className="text-2xl font-black text-slate-900">
                          ₹{totalAmount.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="py-6 text-center text-slate-400 text-sm font-medium">
                    Select at least one sharing type to continue.
                  </div>
                )}

                {/* ── NEW: Mobile Number Field ───────────────────────────────── */}
                <div className="pt-2">
                  <label
                    htmlFor="mobile"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2"
                  >
                    Mobile Number
                  </label>
                  <div
                    className={`flex items-center gap-2 border rounded-2xl px-4 py-3 bg-slate-50 transition-all ${
                      mobileError
                        ? "border-red-400 ring-1 ring-red-400"
                        : mobileNumber && !mobileError
                          ? "border-slate-900 ring-1 ring-slate-900"
                          : "border-slate-200 focus-within:border-slate-900 focus-within:ring-1 focus-within:ring-slate-900"
                    }`}
                  >
                    <Phone size={15} className="text-slate-400 shrink-0" />
                    <input
                      id="mobile"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={mobileNumber}
                      onChange={handleMobileChange}
                      onBlur={() =>
                        setMobileError(validateMobile(mobileNumber))
                      }
                      className="flex-1 bg-transparent text-sm font-semibold text-slate-800 placeholder:text-slate-300 outline-none"
                    />
                  </div>
                  {mobileError && (
                    <p className="mt-1.5 text-xs text-red-500 font-medium pl-1">
                      {mobileError}
                    </p>
                  )}
                </div>
                {/* ──────────────────────────────────────────────────────────── */}

                <button
                  disabled={!hasItems}
                  onClick={handleProceedToPayment}
                  className="w-full mt-2 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white py-4 rounded-2xl font-bold transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  Proceed to Book
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Mobile Floating Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-slate-100 px-6 py-4 pb-8 shadow-[0_-8px_30px_rgb(0,0,0,0.04)]">
        <div className="flex justify-between items-center max-w-md mx-auto">
          <div>
            <p className="text-[10px] uppercase font-bold text-slate-400">
              Total to pay
            </p>
            <p className="font-black text-xl text-slate-900">
              {hasItems ? `₹${totalAmount.toLocaleString()}` : "—"}
            </p>
          </div>
          <button
            disabled={!hasItems}
            className="bg-slate-900 disabled:bg-slate-200 disabled:text-slate-400 text-white px-8 py-3.5 rounded-2xl font-bold text-sm shadow-lg shadow-slate-200"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingDetails;
