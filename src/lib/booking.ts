// utils/booking.ts

import { SharingType } from "@/generated/prisma";

// ── Input types (mirrors your component state) ──────────────────────────────

export type BookingItemInput = {
  sharingType: SharingType;
  price: number;
  quantity: number;
  subtotal: number;
};

// ── Output type (mirrors your Prisma schema exactly) ─────────────────────────

export type BookingPayload = {
  // BookingSession identifiers
  sessionId: string;
  userId: string;
  tripId: number;
  tripDateId: number;

  // Trip snapshot (frozen at purchase time)
  trip: {
    title: string;
    cardImageUrl: string;
    slug: string;
  };

  // TripDate snapshot
  tripDate: {
    startDate: Date;
    endDate: Date;
  };

  // BookingItems (maps to BookingItem model)
  items: {
    sharingType: SharingType;
    quantity: number;
    pricePerPerson: number;
    subtotal: number;
  }[];

  // Totals (maps to Booking model fields)
  totalSeats: number;
  subtotal: number;

  // Tax breakdown
  gst: number;
  tcs: number;
  totalAmount: number; // → Booking.totalAmount in paise or rupees (your choice)
};

// ── Constants ────────────────────────────────────────────────────────────────

const GST_RATE = 0.05;
const TCS_RATE = 0.05;

// ── Core function ────────────────────────────────────────────────────────────

export function prepareBookingPayload({
  sessionId,
  userId,
  trip,
  tripDate,
  bookingItems,
}: {
  sessionId: string;
  userId: string;
  trip: {
    id: number;
    title: string;
    cardImageUrl: string;
    slug: string;
  };
  tripDate: {
    id: number;
    startDate: Date;
    endDate: Date;
  };
  bookingItems: Record<string, BookingItemInput>;
}): BookingPayload {
  const items = Object.values(bookingItems);

  if (items.length === 0) {
    throw new Error("Cannot prepare booking: no items selected.");
  }

  // ── Seats & money ──────────────────────────────────────────────────────────
  const totalSeats = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.subtotal, 0);
  const gst = Math.round(subtotal * GST_RATE);
  const tcs = Math.round(subtotal * TCS_RATE);
  const totalAmount = subtotal + gst + tcs;

  return {
    sessionId,
    userId,
    tripId: trip.id,
    tripDateId: tripDate.id,

    // Snapshots — frozen so historical bookings always show correct data
    trip: {
      title: trip.title,
      cardImageUrl: trip.cardImageUrl,
      slug: trip.slug,
    },
    tripDate: {
      startDate: tripDate.startDate,
      endDate: tripDate.endDate,
    },

    // Items shaped exactly like BookingItem model
    items: items.map((i) => ({
      sharingType: i.sharingType,
      quantity: i.quantity,
      pricePerPerson: i.price,
      subtotal: i.subtotal,
    })),

    totalSeats,
    subtotal,
    gst,
    tcs,
    totalAmount,
  };
}

// ── Display helper ───────────────────────────────────────────────────────────
// Turns the payload into a human-readable receipt object for UI / confirmation screen

export function formatBookingReceipt(payload: BookingPayload) {
  return {
    session: payload.sessionId,
    destination: payload.trip.title,
    travel: {
      from: payload.tripDate.startDate.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      to: payload.tripDate.endDate.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    },
    guests: payload.items.map((i) => ({
      type: `${i.sharingType}`,
      count: i.quantity,
      ratePerPerson: `${i.pricePerPerson}`,
      lineTotal: `${i.subtotal}`,
    })),
    breakdown: {
      subtotal: `${payload.subtotal}`,
      gst: `${payload.gst}`,
      tcs: `${payload.tcs}`,
      total: `${payload.totalAmount}`,
    },
    totalSeats: payload.totalSeats,
  };
}
