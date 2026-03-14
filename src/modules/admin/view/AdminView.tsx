"use client";

import React, { Suspense, useState } from "react";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery, useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import {
  LayoutDashboard, Map, Mountain, CalendarDays, Users, Settings, Plus,
  Trash2, Pencil, Eye, ChevronLeft, ChevronRight, Star, MessageSquare,
  BookOpen, Tag, HelpCircle, LogOut, Loader2, ShieldAlert, List, Clock, Film,
  Menu, X,
} from "lucide-react";
import ImageUpload from "../component/ImageUpload";
import dynamic from "next/dynamic";
import { useAuth } from "@/context/AuthContext";

const RichTextEditor = dynamic(() => import("../component/RichTextEditor"), { ssr: false });

// ── Error Boundary ─────────────────────────────────────────────────────
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="flex items-center justify-center h-64">
          <div className="text-center space-y-3">
            <ShieldAlert className="mx-auto h-12 w-12 text-red-400" />
            <p className="text-slate-600 font-medium">Access denied or data unavailable</p>
            <p className="text-sm text-slate-400">{this.state.error?.message}</p>
            <Button variant="outline" onClick={() => this.setState({ hasError: false })}>
              Try Again
            </Button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function TabSkeleton() {
  return (
    <div className="space-y-4 p-4">
      <Skeleton className="h-8 w-48 bg-gray-200" />
      <Skeleton className="h-64 w-full rounded-xl bg-gray-200" />
    </div>
  );
}

// ── Main Admin View ────────────────────────────────────────────────────
export default function AdminView() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, loading } = useAuth();

  const navItems = [
    { value: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { value: "tours", label: "Tours", icon: Map },
    { value: "trips", label: "Trips", icon: Mountain },
    { value: "itinerary", label: "Itinerary", icon: List },
    { value: "faqs", label: "FAQs", icon: HelpCircle },
    { value: "bookings", label: "Bookings", icon: CalendarDays },
    { value: "sessions", label: "Sessions", icon: Clock },
    { value: "users", label: "Users", icon: Users },
    { value: "vibes", label: "Vibe UI", icon: Film },
    { value: "settings", label: "Settings", icon: Settings },
  ];

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-50">
        <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-50">
        <div className="text-center space-y-4">
          <ShieldAlert className="mx-auto h-16 w-16 text-slate-300" />
          <h2 className="text-2xl font-bold text-slate-800">Admin Access Required</h2>
          <p className="text-slate-500">Please log in with an admin account to continue.</p>
          <Button onClick={() => window.location.href = "/"}>Go to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 text-white flex flex-col transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <div className="p-6 border-b border-slate-700 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold tracking-tight">Admin Panel</h1>
            <p className="text-xs text-slate-400 mt-1">Stranger Together</p>
          </div>
          <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => { setActiveTab(item.value); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === item.value
                  ? "bg-white/10 text-white"
                  : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-700">
          <a href="/" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
            <LogOut size={16} /> Back to Site
          </a>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto w-full">
        {/* Mobile header */}
        <div className="sticky top-0 z-20 bg-slate-900 text-white px-4 py-3 flex items-center gap-3 md:hidden">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu size={22} />
          </button>
          <span className="font-semibold text-sm">Admin Panel</span>
        </div>
        <div className="p-4 md:p-8 max-w-7xl mx-auto">
          <ErrorBoundary>
            <Suspense fallback={<TabSkeleton />}>
              {activeTab === "dashboard" && <DashboardTab />}
              {activeTab === "tours" && <ToursTab />}
              {activeTab === "trips" && <TripsTab />}
              {activeTab === "itinerary" && <ItineraryTab />}
              {activeTab === "faqs" && <FaqTab />}
              {activeTab === "bookings" && <BookingsTab />}
              {activeTab === "sessions" && <BookingSessionsTab />}
              {activeTab === "users" && <UsersTab />}
              {activeTab === "vibes" && <VibesTab />}
              {activeTab === "settings" && <SettingsTab />}
            </Suspense>
          </ErrorBoundary>
        </div>
      </main>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// ── DASHBOARD TAB ──────────────────────────────────────────────────
// ══════════════════════════════════════════════════════════════════════
function DashboardTab() {
  const trpc = useTRPC();
  const { data: stats } = useSuspenseQuery(trpc.admin.getStats.queryOptions());

  const cards = [
    { title: "Total Users", value: stats.users, icon: Users, color: "bg-blue-500" },
    { title: "Total Tours", value: stats.tours, icon: Map, color: "bg-emerald-500" },
    { title: "Total Trips", value: stats.trips, icon: Mountain, color: "bg-purple-500" },
    { title: "Bookings", value: stats.bookings, icon: CalendarDays, color: "bg-amber-500" },
    { title: "Pending", value: stats.pendingBookings, icon: BookOpen, color: "bg-red-500" },
  ];

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {cards.map((card) => (
          <Card key={card.title} className="border-0 shadow-sm">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">{card.title}</p>
                  <p className="text-3xl font-black text-slate-800 mt-1">{card.value}</p>
                </div>
                <div className={`${card.color} p-3 rounded-xl text-white`}>
                  <card.icon size={20} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// ── TOURS TAB ──────────────────────────────────────────────────────
// ══════════════════════════════════════════════════════════════════════
function ToursTab() {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data: tours } = useSuspenseQuery(trpc.admin.getAllTours.queryOptions());
  const { data: tourTypes } = useSuspenseQuery(trpc.admin.getAllTourTypes.queryOptions());
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editTour, setEditTour] = useState<any>(null);

  const createMut = useMutation(trpc.admin.createTour.mutationOptions({
    onSuccess: () => { queryClient.invalidateQueries(); setDialogOpen(false); toast.success("Tour created!"); },
    onError: (e) => toast.error(e.message),
  }));

  const updateMut = useMutation(trpc.admin.updateTour.mutationOptions({
    onSuccess: () => { queryClient.invalidateQueries(); setDialogOpen(false); setEditTour(null); toast.success("Tour updated!"); },
    onError: (e) => toast.error(e.message),
  }));

  const deleteMut = useMutation(trpc.admin.deleteTour.mutationOptions({
    onSuccess: () => { queryClient.invalidateQueries(); toast.success("Tour deactivated!"); },
  }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload: any = {
      title: fd.get("title") as string,
      slug: fd.get("slug") as string,
      about: fd.get("about") as string,
      thumbnailImageUrl: fd.get("thumbnailImageUrl") as string,
      thumbnailVideoUrl: (fd.get("thumbnailVideoUrl") as string) || "",
      cardImageUrl: fd.get("cardImageUrl") as string,
      tourTypeId: Number(fd.get("tourTypeId")),
      isActive: fd.get("isActive") === "on",
      isFeatured: fd.get("isFeatured") === "on",
    };
    if (editTour) {
      updateMut.mutate({ id: editTour.id, ...payload });
    } else {
      createMut.mutate(payload);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800">Tours</h2>
        <Dialog open={dialogOpen} onOpenChange={(o) => { setDialogOpen(o); if (!o) setEditTour(null); }}>
          <DialogTrigger asChild>
            <Button className="gap-2"><Plus size={16} /> Add Tour</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editTour ? "Edit Tour" : "Create Tour"}</DialogTitle>
            </DialogHeader>
            <TourFormContent
              tourTypes={tourTypes}
              editTour={editTour}
              onSubmit={handleSubmit}
              loading={createMut.isPending || updateMut.isPending}
            />
          </DialogContent>
        </Dialog>
      </div>

      <Card className="border-0 shadow-sm">
        <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Trips</TableHead>
              <TableHead>Reviews</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tours.map((tour) => (
              <TableRow key={tour.id}>
                <TableCell className="font-medium">{tour.title}</TableCell>
                <TableCell><Badge variant="outline">{tour.tourType.title}</Badge></TableCell>
                <TableCell>{tour._count.trips}</TableCell>
                <TableCell>{tour._count.reviews}</TableCell>
                <TableCell>
                  <Badge className={tour.isActive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}>
                    {tour.isActive ? "Active" : "Inactive"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right space-x-2">
                  <Button size="sm" variant="ghost" onClick={() => { setEditTour(tour); setDialogOpen(true); }}>
                    <Pencil size={14} />
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button size="sm" variant="ghost" className="text-red-500"><Trash2 size={14} /></Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Deactivate "{tour.title}"?</AlertDialogTitle>
                        <AlertDialogDescription>This will hide the tour from the public site.</AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => deleteMut.mutate({ id: tour.id })}>Deactivate</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      </Card>
    </div>
  );
}

function TourFormContent({ tourTypes, editTour, onSubmit, loading }: any) {
  const [about, setAbout] = useState(editTour?.about || "");
  const [thumbnailImageUrl, setThumbnailImageUrl] = useState(editTour?.thumbnailImageUrl || "");
  const [thumbnailVideoUrl, setThumbnailVideoUrl] = useState(editTour?.thumbnailVideoUrl || "");
  const [cardImageUrl, setCardImageUrl] = useState(editTour?.cardImageUrl || "");

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Title</Label>
          <Input name="title" defaultValue={editTour?.title} required />
        </div>
        <div className="space-y-2">
          <Label>Slug</Label>
          <Input name="slug" defaultValue={editTour?.slug} required />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Tour Type</Label>
        <Select name="tourTypeId" defaultValue={editTour?.tourTypeId?.toString()}>
          <SelectTrigger><SelectValue placeholder="Select tour type" /></SelectTrigger>
          <SelectContent>
            {tourTypes.map((t: any) => (
              <SelectItem key={t.id} value={t.id.toString()}>{t.title}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>About</Label>
        <input type="hidden" name="about" value={about} />
        <RichTextEditor value={about} onChange={setAbout} placeholder="Write about this tour..." />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input type="hidden" name="thumbnailImageUrl" value={thumbnailImageUrl} />
          <ImageUpload label="Thumbnail Image" value={thumbnailImageUrl} onChange={setThumbnailImageUrl} accept="image/*" />
        </div>
        <div>
          <input type="hidden" name="cardImageUrl" value={cardImageUrl} />
          <ImageUpload label="Card Image" value={cardImageUrl} onChange={setCardImageUrl} accept="image/*" />
        </div>
      </div>

      <div>
        <input type="hidden" name="thumbnailVideoUrl" value={thumbnailVideoUrl} />
        <ImageUpload label="Thumbnail Video (optional)" value={thumbnailVideoUrl} onChange={setThumbnailVideoUrl} accept="video/*" />
      </div>

      <div className="flex items-center gap-6">
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="isActive" defaultChecked={editTour?.isActive ?? true} /> Active</label>
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="isFeatured" defaultChecked={editTour?.isFeatured ?? false} /> Featured</label>
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Saving..." : editTour ? "Update Tour" : "Create Tour"}
      </Button>
    </form>
  );
}

// ══════════════════════════════════════════════════════════════════════
// ── TRIPS TAB ──────────────────────────────────────────────────────
// ══════════════════════════════════════════════════════════════════════
function TripsTab() {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data: trips } = useSuspenseQuery(trpc.admin.getAllTrips.queryOptions());
  const { data: tours } = useSuspenseQuery(trpc.admin.getAllTours.queryOptions());
  const { data: categories } = useSuspenseQuery(trpc.admin.getAllCategories.queryOptions());
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editTrip, setEditTrip] = useState<any>(null);
  const [datesDialogTrip, setDatesDialogTrip] = useState<any>(null);

  const createMut = useMutation(trpc.admin.createTrip.mutationOptions({
    onSuccess: () => { queryClient.invalidateQueries(); setDialogOpen(false); toast.success("Trip created!"); },
    onError: (e) => toast.error(e.message),
  }));

  const updateMut = useMutation(trpc.admin.updateTrip.mutationOptions({
    onSuccess: () => { queryClient.invalidateQueries(); setDialogOpen(false); setEditTrip(null); toast.success("Trip updated!"); },
    onError: (e) => toast.error(e.message),
  }));

  const deleteMut = useMutation(trpc.admin.deleteTrip.mutationOptions({
    onSuccess: () => { queryClient.invalidateQueries(); toast.success("Trip deleted!"); },
  }));

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800">Trips</h2>
        <Dialog open={dialogOpen} onOpenChange={(o) => { setDialogOpen(o); if (!o) setEditTrip(null); }}>
          <DialogTrigger asChild>
            <Button className="gap-2"><Plus size={16} /> Add Trip</Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editTrip ? "Edit Trip" : "Create Trip"}</DialogTitle>
            </DialogHeader>
            <TripFormContent
              tours={tours}
              categories={categories}
              editTrip={editTrip}
              createMut={createMut}
              updateMut={updateMut}
            />
          </DialogContent>
        </Dialog>
      </div>

      {/* Trip Dates Dialog */}
      <Dialog open={!!datesDialogTrip} onOpenChange={(o) => { if (!o) setDatesDialogTrip(null); }}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Manage Dates — {datesDialogTrip?.title}</DialogTitle>
          </DialogHeader>
          {datesDialogTrip && <TripDatesManager trip={datesDialogTrip} />}
        </DialogContent>
      </Dialog>

      <Card className="border-0 shadow-sm">
        <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Tour</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Dates</TableHead>
              <TableHead>Bookings</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {trips.map((trip) => (
              <TableRow key={trip.id}>
                <TableCell className="font-medium">{trip.title}</TableCell>
                <TableCell>{trip.tour.title}</TableCell>
                <TableCell><Badge variant="outline">{trip.category.title}</Badge></TableCell>
                <TableCell>₹{trip.startingPrice.toLocaleString()}</TableCell>
                <TableCell>
                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-1 text-xs"
                    onClick={() => setDatesDialogTrip(trip)}
                  >
                    <CalendarDays size={12} />
                    {trip.TripDate.length} dates
                  </Button>
                </TableCell>
                <TableCell>{trip._count.Booking}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button size="sm" variant="ghost" onClick={() => { setEditTrip(trip); setDialogOpen(true); }}>
                    <Pencil size={14} />
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button size="sm" variant="ghost" className="text-red-500"><Trash2 size={14} /></Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete &quot;{trip.title}&quot;?</AlertDialogTitle>
                        <AlertDialogDescription>This will permanently delete the trip and all associated data.</AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction className="bg-red-600" onClick={() => deleteMut.mutate({ id: trip.id })}>Delete</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      </Card>
    </div>
  );
}

// ── Trip Dates + Pricing Manager ───────────────────────────────────────
function TripDatesManager({ trip }: { trip: any }) {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const [showAddForm, setShowAddForm] = useState(false);

  // Local state for the add form
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [singlePrice, setSinglePrice] = useState("");
  const [doublePrice, setDoublePrice] = useState("");
  const [triplePrice, setTriplePrice] = useState("");
  const [quadPrice, setQuadPrice] = useState("");

  const createDateMut = useMutation(trpc.admin.createTripDate.mutationOptions({
    onSuccess: () => {
      queryClient.invalidateQueries();
      setShowAddForm(false);
      setStartDate(""); setEndDate("");
      setSinglePrice(""); setDoublePrice(""); setTriplePrice(""); setQuadPrice("");
      toast.success("Trip date added!");
    },
    onError: (e) => toast.error(e.message),
  }));

  const deleteDateMut = useMutation(trpc.admin.deleteTripDate.mutationOptions({
    onSuccess: () => { queryClient.invalidateQueries(); toast.success("Trip date deleted!"); },
    onError: (e) => toast.error(e.message),
  }));

  const handleAddDate = () => {
    const pricing: { sharing: "SINGLE" | "DOUBLE" | "TRIPLE" | "QUAD"; price: number }[] = [];
    if (singlePrice) pricing.push({ sharing: "SINGLE", price: Number(singlePrice) });
    if (doublePrice) pricing.push({ sharing: "DOUBLE", price: Number(doublePrice) });
    if (triplePrice) pricing.push({ sharing: "TRIPLE", price: Number(triplePrice) });
    if (quadPrice) pricing.push({ sharing: "QUAD", price: Number(quadPrice) });

    if (!startDate || !endDate) {
      toast.error("Please select both start and end dates.");
      return;
    }
    if (pricing.length === 0) {
      toast.error("Please add at least one pricing option.");
      return;
    }

    createDateMut.mutate({
      tripId: trip.id,
      startDate,
      endDate,
      pricing,
    });
  };

  const sharingOrder: string[] = ["SINGLE", "DOUBLE", "TRIPLE", "QUAD"];

  return (
    <div className="space-y-6">
      {/* Existing Trip Dates */}
      {trip.TripDate.length > 0 ? (
        <div className="space-y-3">
          {trip.TripDate.map((td: any) => (
            <div key={td.id} className="border border-slate-200 rounded-xl p-4 bg-white">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <CalendarDays size={16} className="text-slate-400" />
                  <span className="font-medium text-sm text-slate-700">
                    {new Date(td.startDate).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                    {" → "}
                    {new Date(td.endDate).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                  </span>
                </div>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button size="sm" variant="ghost" className="text-red-500 h-7 w-7 p-0">
                      <Trash2 size={13} />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete this date?</AlertDialogTitle>
                      <AlertDialogDescription>This will also delete all pricing and bookings for this date.</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction className="bg-red-600" onClick={() => deleteDateMut.mutate({ id: td.id })}>Delete</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
              {/* Pricing chips */}
              <div className="flex flex-wrap gap-2">
                {td.pricing?.length > 0 ? (
                  [...td.pricing]
                    .sort((a: any, b: any) => sharingOrder.indexOf(a.sharing) - sharingOrder.indexOf(b.sharing))
                    .map((p: any) => (
                      <Badge key={p.id} variant="outline" className="text-xs font-mono px-2.5 py-1">
                        {p.sharing}: ₹{p.price.toLocaleString()}
                      </Badge>
                    ))
                ) : (
                  <span className="text-xs text-slate-400">No pricing set</span>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-slate-400">
          <CalendarDays className="mx-auto h-10 w-10 mb-2" />
          <p className="text-sm">No dates added yet</p>
        </div>
      )}

      {/* Add New Date Form */}
      {showAddForm ? (
        <div className="border-2 border-dashed border-blue-200 rounded-xl p-4 bg-blue-50/50 space-y-4">
          <h4 className="font-semibold text-sm text-slate-700">Add New Date</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label className="text-xs">Start Date</Label>
              <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label className="text-xs">End Date</Label>
              <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </div>
          </div>

          <div>
            <Label className="text-xs font-semibold text-slate-600 mb-2 block">Pricing per Sharing Type</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label className="text-xs text-slate-500">Single Sharing (₹)</Label>
                <Input type="number" placeholder="e.g. 12000" value={singlePrice} onChange={(e) => setSinglePrice(e.target.value)} />
              </div>
              <div className="space-y-1">
                <Label className="text-xs text-slate-500">Double Sharing (₹)</Label>
                <Input type="number" placeholder="e.g. 9000" value={doublePrice} onChange={(e) => setDoublePrice(e.target.value)} />
              </div>
              <div className="space-y-1">
                <Label className="text-xs text-slate-500">Triple Sharing (₹)</Label>
                <Input type="number" placeholder="e.g. 7500" value={triplePrice} onChange={(e) => setTriplePrice(e.target.value)} />
              </div>
              <div className="space-y-1">
                <Label className="text-xs text-slate-500">Quad Sharing (₹)</Label>
                <Input type="number" placeholder="e.g. 6000" value={quadPrice} onChange={(e) => setQuadPrice(e.target.value)} />
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button onClick={handleAddDate} disabled={createDateMut.isPending} className="flex-1">
              {createDateMut.isPending ? "Adding..." : "Add Date"}
            </Button>
            <Button variant="outline" onClick={() => setShowAddForm(false)}>Cancel</Button>
          </div>
        </div>
      ) : (
        <Button variant="outline" className="w-full gap-2" onClick={() => setShowAddForm(true)}>
          <Plus size={14} /> Add New Date & Pricing
        </Button>
      )}
    </div>
  );
}

function TripFormContent({ tours, categories, editTrip, createMut, updateMut }: any) {
  const [about, setAbout] = useState(editTrip?.About || "");
  const [inclusion, setInclusion] = useState(editTrip?.inclusion || "");
  const [exclusion, setExclusion] = useState(editTrip?.exclusion || "");
  const [notes, setNotes] = useState(editTrip?.notes || "");
  const [thumbnailImageUrl, setThumbnailImageUrl] = useState(editTrip?.thumbnailImageUrl || "");
  const [thumbnailVideoUrl, setThumbnailVideoUrl] = useState(editTrip?.thumbnailVideoUrl || "");
  const [cardImageUrl, setCardImageUrl] = useState(editTrip?.cardImageUrl || "");
  const [itineraryImageUrl, setItineraryImageUrl] = useState(editTrip?.ItineraryImageUrl || "");
  const [tourId, setTourId] = useState(editTrip?.tourId?.toString() || "");
  const [categoryId, setCategoryId] = useState(editTrip?.categoryId?.toString() || "");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload: any = {
      title: fd.get("title") as string,
      slug: fd.get("slug") as string,
      tourId: Number(tourId),
      categoryId: Number(categoryId),
      thumbnailImageUrl,
      thumbnailVideoUrl,
      cardImageUrl,
      ItineraryImageUrl: itineraryImageUrl,
      ItineraryLink: (fd.get("ItineraryLink") as string) || "",
      About: about,
      inclusion,
      exclusion,
      notes,
      startingPrice: Number(fd.get("startingPrice")),
      isFeature: fd.get("isFeature") === "on",
    };
    if (editTrip) {
      updateMut.mutate({ id: editTrip.id, ...payload });
    } else {
      createMut.mutate(payload);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Title</Label>
          <Input name="title" defaultValue={editTrip?.title} required />
        </div>
        <div className="space-y-2">
          <Label>Slug</Label>
          <Input name="slug" defaultValue={editTrip?.slug} required />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label>Tour</Label>
          <Select value={tourId} onValueChange={setTourId}>
            <SelectTrigger><SelectValue placeholder="Select tour" /></SelectTrigger>
            <SelectContent>
              {tours.map((t: any) => (
                <SelectItem key={t.id} value={t.id.toString()}>{t.title}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Category</Label>
          <Select value={categoryId} onValueChange={setCategoryId}>
            <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
            <SelectContent>
              {categories.map((c: any) => (
                <SelectItem key={c.id} value={c.id.toString()}>{c.title}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Starting Price</Label>
          <Input name="startingPrice" type="number" defaultValue={editTrip?.startingPrice} required />
        </div>
      </div>

      <div className="space-y-2">
        <Label>About</Label>
        <RichTextEditor value={about} onChange={setAbout} placeholder="About this trip..." />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ImageUpload label="Thumbnail Image" value={thumbnailImageUrl} onChange={setThumbnailImageUrl} accept="image/*" />
        <ImageUpload label="Card Image" value={cardImageUrl} onChange={setCardImageUrl} accept="image/*" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ImageUpload label="Thumbnail Video" value={thumbnailVideoUrl} onChange={setThumbnailVideoUrl} accept="video/*" />
        <ImageUpload label="Itinerary Image" value={itineraryImageUrl} onChange={setItineraryImageUrl} accept="image/*" />
      </div>

      <div className="space-y-2">
        <Label>Itinerary Link</Label>
        <Input name="ItineraryLink" defaultValue={editTrip?.ItineraryLink} />
      </div>

      <div className="space-y-2">
        <Label>Inclusion</Label>
        <RichTextEditor value={inclusion} onChange={setInclusion} placeholder="What's included..." />
      </div>

      <div className="space-y-2">
        <Label>Exclusion</Label>
        <RichTextEditor value={exclusion} onChange={setExclusion} placeholder="What's excluded..." />
      </div>

      <div className="space-y-2">
        <Label>Notes</Label>
        <RichTextEditor value={notes} onChange={setNotes} placeholder="Additional notes..." />
      </div>

      <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="isFeature" defaultChecked={editTrip?.isFeature ?? false} /> Featured Trip</label>

      <Button type="submit" className="w-full" disabled={createMut.isPending || updateMut.isPending}>
        {(createMut.isPending || updateMut.isPending) ? "Saving..." : editTrip ? "Update Trip" : "Create Trip"}
      </Button>
    </form>
  );
}


// ══════════════════════════════════════════════════════════════════════
// ── BOOKINGS TAB ───────────────────────────────────────────────────
// ══════════════════════════════════════════════════════════════════════
function BookingsTab() {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data: bookings } = useSuspenseQuery(trpc.admin.getAllBookings.queryOptions());

  const statusMut = useMutation(trpc.admin.updateBookingStatus.mutationOptions({
    onSuccess: () => { queryClient.invalidateQueries(); toast.success("Status updated!"); },
  }));

  const statusColor: Record<string, string> = {
    PENDING: "bg-yellow-100 text-yellow-700",
    CONFIRMED: "bg-green-100 text-green-700",
    CANCELLED: "bg-red-100 text-red-700",
  };

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-6">Bookings</h2>
      <Card className="border-0 shadow-sm">
        <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Trip</TableHead>
              <TableHead>Seats</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((b) => (
              <TableRow key={b.id}>
                <TableCell className="font-mono text-xs">#{b.id}</TableCell>
                <TableCell>{b.user.name || b.user.email}</TableCell>
                <TableCell>{b.trip.title}</TableCell>
                <TableCell>{b.totalSeats}</TableCell>
                <TableCell className="font-medium">₹{b.totalAmount.toLocaleString()}</TableCell>
                <TableCell>
                  <Badge className={statusColor[b.status]}>{b.status}</Badge>
                </TableCell>
                <TableCell className="text-xs text-slate-500">{new Date(b.createdAt).toLocaleDateString()}</TableCell>
                <TableCell className="text-right">
                  <Select
                    value={b.status}
                    onValueChange={(val) => statusMut.mutate({ id: b.id, status: val as any })}
                  >
                    <SelectTrigger className="w-28 h-8 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="PENDING">Pending</SelectItem>
                      <SelectItem value="CONFIRMED">Confirmed</SelectItem>
                      <SelectItem value="CANCELLED">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      </Card>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// ── USERS TAB ──────────────────────────────────────────────────────
// ══════════════════════════════════════════════════════════════════════
function UsersTab() {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data: users } = useSuspenseQuery(trpc.admin.getAllUsers.queryOptions());

  const roleMut = useMutation(trpc.admin.updateUserRole.mutationOptions({
    onSuccess: () => { queryClient.invalidateQueries(); toast.success("Role updated!"); },
  }));

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-6">Users</h2>
      <Card className="border-0 shadow-sm">
        <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Bookings</TableHead>
              <TableHead>Reviews</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead className="text-right">Role Toggle</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name || "—"}</TableCell>
                <TableCell className="text-sm">{user.email}</TableCell>
                <TableCell className="text-sm">{user.phone || "—"}</TableCell>
                <TableCell>
                  <Badge className={user.role === "ADMIN" ? "bg-purple-100 text-purple-700" : "bg-slate-100 text-slate-700"}>
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell>{user._count.bookings}</TableCell>
                <TableCell>{user._count.reviews}</TableCell>
                <TableCell className="text-xs text-slate-500">{new Date(user.createdAt).toLocaleDateString()}</TableCell>
                <TableCell className="text-right">
                  <Switch
                    checked={user.role === "ADMIN"}
                    onCheckedChange={(checked) =>
                      roleMut.mutate({ id: user.id, role: checked ? "ADMIN" : "USER" })
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      </Card>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// ── SETTINGS TAB ───────────────────────────────────────────────────
// ══════════════════════════════════════════════════════════════════════
function SettingsTab() {
  const [settingsTab, setSettingsTab] = useState("tourTypes");

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-6">Settings</h2>
      <Tabs value={settingsTab} onValueChange={setSettingsTab}>
        <TabsList className="flex-wrap h-auto">
          <TabsTrigger value="tourTypes" className="gap-1"><Tag size={14} /> Tour Types</TabsTrigger>
          <TabsTrigger value="categories" className="gap-1"><Mountain size={14} /> Categories</TabsTrigger>
          <TabsTrigger value="faqs" className="gap-1"><HelpCircle size={14} /> FAQs</TabsTrigger>
          <TabsTrigger value="reviews" className="gap-1"><Star size={14} /> Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="tourTypes"><TourTypesSection /></TabsContent>
        <TabsContent value="categories"><CategoriesSection /></TabsContent>
        <TabsContent value="faqs"><FaqsSection /></TabsContent>
        <TabsContent value="reviews"><ReviewsSection /></TabsContent>
      </Tabs>
    </div>
  );
}

function TourTypesSection() {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data: types } = useSuspenseQuery(trpc.admin.getAllTourTypes.queryOptions());
  const [dialogOpen, setDialogOpen] = useState(false);

  const createMut = useMutation(trpc.admin.createTourType.mutationOptions({
    onSuccess: () => { queryClient.invalidateQueries(); setDialogOpen(false); toast.success("Tour type created!"); },
    onError: (e) => toast.error(e.message),
  }));

  const deleteMut = useMutation(trpc.admin.deleteTourType.mutationOptions({
    onSuccess: () => { queryClient.invalidateQueries(); toast.success("Tour type deleted!"); },
  }));

  return (
    <div className="mt-4">
      <div className="flex justify-end mb-4">
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button size="sm" className="gap-2"><Plus size={14} /> Add Type</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>Create Tour Type</DialogTitle></DialogHeader>
            <form onSubmit={(e) => { e.preventDefault(); const fd = new FormData(e.currentTarget); createMut.mutate({ title: fd.get("title") as string, slug: fd.get("slug") as string, description: fd.get("description") as string, priority: Number(fd.get("priority") || 0) }); }} className="space-y-4">
              <div className="space-y-2"><Label>Title</Label><Input name="title" required /></div>
              <div className="space-y-2"><Label>Slug</Label><Input name="slug" required /></div>
              <div className="space-y-2"><Label>Description</Label><Textarea name="description" /></div>
              <div className="space-y-2"><Label>Priority</Label><Input name="priority" type="number" defaultValue={0} /></div>
              <Button type="submit" className="w-full" disabled={createMut.isPending}>{createMut.isPending ? "Creating..." : "Create"}</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <Card className="border-0 shadow-sm">
        <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow><TableHead>Title</TableHead><TableHead>Slug</TableHead><TableHead>Tours</TableHead><TableHead>Priority</TableHead><TableHead className="text-right">Actions</TableHead></TableRow>
          </TableHeader>
          <TableBody>
            {types.map((t) => (
              <TableRow key={t.id}>
                <TableCell className="font-medium">{t.title}</TableCell>
                <TableCell className="text-sm text-slate-500">{t.slug}</TableCell>
                <TableCell>{t._count.tours}</TableCell>
                <TableCell>{t.priority}</TableCell>
                <TableCell className="text-right">
                  <Button size="sm" variant="ghost" className="text-red-500" onClick={() => deleteMut.mutate({ id: t.id })}><Trash2 size={14} /></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      </Card>
    </div>
  );
}

function CategoriesSection() {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data: cats } = useSuspenseQuery(trpc.admin.getAllCategories.queryOptions());
  const [dialogOpen, setDialogOpen] = useState(false);

  const createMut = useMutation(trpc.admin.createCategory.mutationOptions({
    onSuccess: () => { queryClient.invalidateQueries(); setDialogOpen(false); toast.success("Category created!"); },
    onError: (e) => toast.error(e.message),
  }));

  const deleteMut = useMutation(trpc.admin.deleteCategory.mutationOptions({
    onSuccess: () => { queryClient.invalidateQueries(); toast.success("Category deleted!"); },
  }));

  return (
    <div className="mt-4">
      <div className="flex justify-end mb-4">
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button size="sm" className="gap-2"><Plus size={14} /> Add Category</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>Create Category</DialogTitle></DialogHeader>
            <form onSubmit={(e) => { e.preventDefault(); const fd = new FormData(e.currentTarget); createMut.mutate({ title: fd.get("title") as string, slug: fd.get("slug") as string }); }} className="space-y-4">
              <div className="space-y-2"><Label>Title</Label><Input name="title" required /></div>
              <div className="space-y-2"><Label>Slug</Label><Input name="slug" required /></div>
              <Button type="submit" className="w-full" disabled={createMut.isPending}>{createMut.isPending ? "Creating..." : "Create"}</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <Card className="border-0 shadow-sm">
        <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow><TableHead>Title</TableHead><TableHead>Slug</TableHead><TableHead>Trips</TableHead><TableHead className="text-right">Actions</TableHead></TableRow>
          </TableHeader>
          <TableBody>
            {cats.map((c) => (
              <TableRow key={c.id}>
                <TableCell className="font-medium">{c.title}</TableCell>
                <TableCell className="text-sm text-slate-500">{c.slug}</TableCell>
                <TableCell>{c._count.trip}</TableCell>
                <TableCell className="text-right">
                  <Button size="sm" variant="ghost" className="text-red-500" onClick={() => deleteMut.mutate({ id: c.id })}><Trash2 size={14} /></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      </Card>
    </div>
  );
}

function FaqsSection() {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data: faqs } = useSuspenseQuery(trpc.admin.getAllFaqs.queryOptions());
  const { data: tours } = useSuspenseQuery(trpc.admin.getAllTours.queryOptions());
  const [dialogOpen, setDialogOpen] = useState(false);

  const createMut = useMutation(trpc.admin.createFaq.mutationOptions({
    onSuccess: () => { queryClient.invalidateQueries(); setDialogOpen(false); toast.success("FAQ created!"); },
    onError: (e) => toast.error(e.message),
  }));

  const deleteMut = useMutation(trpc.admin.deleteFaq.mutationOptions({
    onSuccess: () => { queryClient.invalidateQueries(); toast.success("FAQ deleted!"); },
  }));

  return (
    <div className="mt-4">
      <div className="flex justify-end mb-4">
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button size="sm" className="gap-2"><Plus size={14} /> Add FAQ</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>Create FAQ</DialogTitle></DialogHeader>
            <form onSubmit={(e) => { e.preventDefault(); const fd = new FormData(e.currentTarget); createMut.mutate({ tourId: Number(fd.get("tourId")), question: fd.get("question") as string, answer: fd.get("answer") as string }); }} className="space-y-4">
              <div className="space-y-2">
                <Label>Tour</Label>
                <Select name="tourId">
                  <SelectTrigger><SelectValue placeholder="Select tour" /></SelectTrigger>
                  <SelectContent>
                    {tours.map((t: any) => (
                      <SelectItem key={t.id} value={t.id.toString()}>{t.title}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2"><Label>Question</Label><Input name="question" required /></div>
              <div className="space-y-2"><Label>Answer</Label><Textarea name="answer" required /></div>
              <Button type="submit" className="w-full" disabled={createMut.isPending}>{createMut.isPending ? "Creating..." : "Create"}</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <Card className="border-0 shadow-sm">
        <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow><TableHead>Question</TableHead><TableHead>Tour</TableHead><TableHead className="text-right">Actions</TableHead></TableRow>
          </TableHeader>
          <TableBody>
            {faqs.map((f) => (
              <TableRow key={f.id}>
                <TableCell className="font-medium max-w-md truncate">{f.question}</TableCell>
                <TableCell><Badge variant="outline">{f.tour.title}</Badge></TableCell>
                <TableCell className="text-right">
                  <Button size="sm" variant="ghost" className="text-red-500" onClick={() => deleteMut.mutate({ id: f.id })}><Trash2 size={14} /></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      </Card>
    </div>
  );
}

function ReviewsSection() {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data: reviews } = useSuspenseQuery(trpc.admin.getAllReviews.queryOptions());

  const deleteMut = useMutation(trpc.admin.deleteReview.mutationOptions({
    onSuccess: () => { queryClient.invalidateQueries(); toast.success("Review deleted!"); },
  }));

  return (
    <div className="mt-4">
      <Card className="border-0 shadow-sm">
        <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow><TableHead>User</TableHead><TableHead>Tour</TableHead><TableHead>Rating</TableHead><TableHead>Review</TableHead><TableHead className="text-right">Actions</TableHead></TableRow>
          </TableHeader>
          <TableBody>
            {reviews.map((r) => (
              <TableRow key={r.id}>
                <TableCell className="font-medium">{r.user.name || r.user.email}</TableCell>
                <TableCell><Badge variant="outline">{r.tour.title}</Badge></TableCell>
                <TableCell>
                  <div className="flex gap-0.5">
                    {[...Array(r.rating)].map((_, i) => <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />)}
                  </div>
                </TableCell>
                <TableCell className="max-w-xs truncate text-sm text-slate-500">{r.review}</TableCell>
                <TableCell className="text-right">
                  <Button size="sm" variant="ghost" className="text-red-500" onClick={() => deleteMut.mutate({ id: r.id })}><Trash2 size={14} /></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      </Card>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// ── ITINERARY TAB ──────────────────────────────────────────────────
// ══════════════════════════════════════════════════════════════════════
function ItineraryTab() {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data: trips } = useSuspenseQuery(trpc.admin.getAllTrips.queryOptions());
  const [selectedTripId, setSelectedTripId] = useState<string>("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editItem, setEditItem] = useState<any>(null);
  const [description, setDescription] = useState("");

  const { data: itineraries, isLoading } = useQuery({
    ...trpc.admin.getItinerariesByTrip.queryOptions({ tripId: Number(selectedTripId) }),
    enabled: !!selectedTripId,
  });

  const createMut = useMutation(trpc.admin.createItinerary.mutationOptions({
    onSuccess: () => { queryClient.invalidateQueries(); setDialogOpen(false); toast.success("Itinerary day created!"); },
    onError: (e) => toast.error(e.message),
  }));

  const updateMut = useMutation(trpc.admin.updateItinerary.mutationOptions({
    onSuccess: () => { queryClient.invalidateQueries(); setDialogOpen(false); setEditItem(null); toast.success("Itinerary updated!"); },
    onError: (e) => toast.error(e.message),
  }));

  const deleteMut = useMutation(trpc.admin.deleteItinerary.mutationOptions({
    onSuccess: () => { queryClient.invalidateQueries(); toast.success("Itinerary day deleted!"); },
  }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (editItem) {
      updateMut.mutate({
        id: editItem.id,
        title: fd.get("title") as string,
        description,
        dayNumber: Number(fd.get("dayNumber")),
      });
    } else {
      createMut.mutate({
        tripId: Number(selectedTripId),
        title: fd.get("title") as string,
        description,
        dayNumber: Number(fd.get("dayNumber")),
      });
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800">Itinerary</h2>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <Select value={selectedTripId} onValueChange={setSelectedTripId}>
            <SelectTrigger className="w-full md:w-64">
              <SelectValue placeholder="Select a trip" />
            </SelectTrigger>
            <SelectContent>
              {trips.map((t) => (
                <SelectItem key={t.id} value={t.id.toString()}>{t.title}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {selectedTripId && (
            <Dialog open={dialogOpen} onOpenChange={(o) => { setDialogOpen(o); if (!o) { setEditItem(null); setDescription(""); } }}>
              <DialogTrigger asChild>
                <Button className="gap-2" onClick={() => setDescription("")}><Plus size={16} /> Add Day</Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>{editItem ? "Edit Itinerary Day" : "Add Itinerary Day"}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label>Day Number</Label>
                    <Input name="dayNumber" type="number" min={1} defaultValue={editItem?.dayNumber || (itineraries?.length ? itineraries.length + 1 : 1)} required />
                  </div>
                  <div className="space-y-2">
                    <Label>Title</Label>
                    <Input name="title" defaultValue={editItem?.title} placeholder="e.g. Arrival & Check-in" required />
                  </div>
                  <div className="space-y-2">
                    <Label>Description</Label>
                    <RichTextEditor value={description} onChange={setDescription} placeholder="Describe the day's activities..." />
                  </div>
                  <Button type="submit" className="w-full" disabled={createMut.isPending || updateMut.isPending}>
                    {(createMut.isPending || updateMut.isPending) ? "Saving..." : editItem ? "Update" : "Create"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>

      {!selectedTripId ? (
        <div className="text-center py-16 text-slate-400">
          <List className="mx-auto h-12 w-12 mb-3" />
          <p className="font-medium">Select a trip to manage its itinerary</p>
        </div>
      ) : isLoading ? (
        <div className="space-y-3">
          <Skeleton className="h-20 w-full rounded-xl bg-gray-200" />
          <Skeleton className="h-20 w-full rounded-xl bg-gray-200" />
        </div>
      ) : itineraries && itineraries.length > 0 ? (
        <div className="space-y-3">
          {itineraries.map((item) => (
            <Card key={item.id} className="border-0 shadow-sm">
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className="bg-blue-100 text-blue-700">Day {item.dayNumber}</Badge>
                      <h4 className="font-semibold text-slate-800">{item.title}</h4>
                    </div>
                    <p className="text-sm text-slate-500 whitespace-pre-line">{item.description}</p>
                  </div>
                  <div className="flex items-center gap-1 ml-4">
                    <Button size="sm" variant="ghost" onClick={() => { setEditItem(item); setDescription(item.description); setDialogOpen(true); }}>
                      <Pencil size={14} />
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button size="sm" variant="ghost" className="text-red-500"><Trash2 size={14} /></Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete Day {item.dayNumber}?</AlertDialogTitle>
                          <AlertDialogDescription>This will permanently delete this itinerary day.</AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction className="bg-red-600" onClick={() => deleteMut.mutate({ id: item.id })}>Delete</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-slate-400">
          <List className="mx-auto h-10 w-10 mb-2" />
          <p className="text-sm">No itinerary days added yet</p>
        </div>
      )}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// ── FAQ TAB (Standalone) ───────────────────────────────────────────
// ══════════════════════════════════════════════════════════════════════
function FaqTab() {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data: faqs } = useSuspenseQuery(trpc.admin.getAllFaqs.queryOptions());
  const { data: tours } = useSuspenseQuery(trpc.admin.getAllTours.queryOptions());
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editFaq, setEditFaq] = useState<any>(null);

  const createMut = useMutation(trpc.admin.createFaq.mutationOptions({
    onSuccess: () => { queryClient.invalidateQueries(); setDialogOpen(false); toast.success("FAQ created!"); },
    onError: (e) => toast.error(e.message),
  }));

  const updateMut = useMutation(trpc.admin.updateFaq.mutationOptions({
    onSuccess: () => { queryClient.invalidateQueries(); setDialogOpen(false); setEditFaq(null); toast.success("FAQ updated!"); },
    onError: (e) => toast.error(e.message),
  }));

  const deleteMut = useMutation(trpc.admin.deleteFaq.mutationOptions({
    onSuccess: () => { queryClient.invalidateQueries(); toast.success("FAQ deleted!"); },
  }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (editFaq) {
      updateMut.mutate({
        id: editFaq.id,
        question: fd.get("question") as string,
        answer: fd.get("answer") as string,
      });
    } else {
      createMut.mutate({
        tourId: Number(fd.get("tourId")),
        question: fd.get("question") as string,
        answer: fd.get("answer") as string,
      });
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800">FAQs</h2>
        <Dialog open={dialogOpen} onOpenChange={(o) => { setDialogOpen(o); if (!o) setEditFaq(null); }}>
          <DialogTrigger asChild>
            <Button className="gap-2"><Plus size={16} /> Add FAQ</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editFaq ? "Edit FAQ" : "Create FAQ"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!editFaq && (
                <div className="space-y-2">
                  <Label>Tour</Label>
                  <Select name="tourId" defaultValue={editFaq?.tourId?.toString()}>
                    <SelectTrigger><SelectValue placeholder="Select tour" /></SelectTrigger>
                    <SelectContent>
                      {tours.map((t: any) => (
                        <SelectItem key={t.id} value={t.id.toString()}>{t.title}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
              <div className="space-y-2">
                <Label>Question</Label>
                <Input name="question" defaultValue={editFaq?.question} required />
              </div>
              <div className="space-y-2">
                <Label>Answer</Label>
                <Textarea name="answer" defaultValue={editFaq?.answer} rows={4} required />
              </div>
              <Button type="submit" className="w-full" disabled={createMut.isPending || updateMut.isPending}>
                {(createMut.isPending || updateMut.isPending) ? "Saving..." : editFaq ? "Update FAQ" : "Create FAQ"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="border-0 shadow-sm">
        <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Question</TableHead>
              <TableHead>Answer</TableHead>
              <TableHead>Tour</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {faqs.map((f) => (
              <TableRow key={f.id}>
                <TableCell className="font-medium max-w-xs">{f.question}</TableCell>
                <TableCell className="max-w-sm truncate text-sm text-slate-500">{f.answer}</TableCell>
                <TableCell><Badge variant="outline">{f.tour.title}</Badge></TableCell>
                <TableCell className="text-right space-x-2">
                  <Button size="sm" variant="ghost" onClick={() => { setEditFaq(f); setDialogOpen(true); }}>
                    <Pencil size={14} />
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button size="sm" variant="ghost" className="text-red-500"><Trash2 size={14} /></Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete this FAQ?</AlertDialogTitle>
                        <AlertDialogDescription>This will permanently delete this FAQ entry.</AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction className="bg-red-600" onClick={() => deleteMut.mutate({ id: f.id })}>Delete</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      </Card>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// ── BOOKING SESSIONS TAB ───────────────────────────────────────────
// ══════════════════════════════════════════════════════════════════════
function BookingSessionsTab() {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data: sessions } = useSuspenseQuery(trpc.admin.getAllBookingSessions.queryOptions());

  const statusMut = useMutation(trpc.admin.updateBookingSessionStatus.mutationOptions({
    onSuccess: () => { queryClient.invalidateQueries(); toast.success("Session status updated!"); },
    onError: (e) => toast.error(e.message),
  }));

  const statusColor: Record<string, string> = {
    PENDING: "bg-yellow-100 text-yellow-700",
    PAID: "bg-green-100 text-green-700",
    FAILED: "bg-red-100 text-red-700",
    EXPIRED: "bg-slate-100 text-slate-500",
    CANCELLED: "bg-red-100 text-red-600",
    REFUNDED: "bg-blue-100 text-blue-700",
  };

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-6">Booking Sessions</h2>
      <Card className="border-0 shadow-sm">
        <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Trip</TableHead>
              <TableHead>Trip Date</TableHead>
              <TableHead>Seats</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Expires</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sessions.map((s) => (
              <TableRow key={s.id}>
                <TableCell className="font-mono text-xs max-w-[100px] truncate">{s.id.slice(0, 8)}…</TableCell>
                <TableCell>{s.user.name || s.user.email}</TableCell>
                <TableCell>{s.trip.title}</TableCell>
                <TableCell className="text-xs text-slate-500">
                  {new Date(s.tripDate.startDate).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
                  {" → "}
                  {new Date(s.tripDate.endDate).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
                </TableCell>
                <TableCell>{s.seatCount}</TableCell>
                <TableCell>
                  <Badge className={statusColor[s.status] || "bg-slate-100 text-slate-600"}>{s.status}</Badge>
                </TableCell>
                <TableCell className="text-xs text-slate-500">
                  {new Date(s.expiresAt).toLocaleString("en-IN", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}
                </TableCell>
                <TableCell className="text-xs text-slate-500">
                  {new Date(s.createdAt).toLocaleDateString("en-IN")}
                </TableCell>
                <TableCell className="text-right">
                  <Select
                    value={s.status}
                    onValueChange={(val) => statusMut.mutate({ id: s.id, status: val as any })}
                  >
                    <SelectTrigger className="w-32 h-8 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="PENDING">Pending</SelectItem>
                      <SelectItem value="PAID">Paid</SelectItem>
                      <SelectItem value="FAILED">Failed</SelectItem>
                      <SelectItem value="EXPIRED">Expired</SelectItem>
                      <SelectItem value="CANCELLED">Cancelled</SelectItem>
                      <SelectItem value="REFUNDED">Refunded</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      </Card>
    </div>
  );
}
// ══════════════════════════════════════════════════════════════════════
// ── VIBES TAB ──────────────────────────────────────────────────────
// ══════════════════════════════════════════════════════════════════════
function VibesTab() {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data: vibes } = useSuspenseQuery(trpc.admin.getAllVibes.queryOptions());
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editVibe, setEditVibe] = useState<any>(null);

  const createMut = useMutation(trpc.admin.createVibe.mutationOptions({
    onSuccess: () => { queryClient.invalidateQueries(); setDialogOpen(false); toast.success("Vibe added!"); },
    onError: (e) => toast.error(e.message),
  }));

  const updateMut = useMutation(trpc.admin.updateVibe.mutationOptions({
    onSuccess: () => { queryClient.invalidateQueries(); setDialogOpen(false); setEditVibe(null); toast.success("Vibe updated!"); },
    onError: (e) => toast.error(e.message),
  }));

  const deleteMut = useMutation(trpc.admin.deleteVibe.mutationOptions({
    onSuccess: () => { queryClient.invalidateQueries(); toast.success("Vibe deleted!"); },
  }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      title: fd.get("title") as string,
      url: fd.get("url") as string,
      order: fd.get("order") ? Number(fd.get("order")) : undefined,
    };
    if (editVibe) {
      updateMut.mutate({ id: editVibe.id, ...payload });
    } else {
      createMut.mutate(payload);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800">Vibes</h2>
        <Dialog open={dialogOpen} onOpenChange={(o) => { setDialogOpen(o); if (!o) setEditVibe(null); }}>
          <DialogTrigger asChild>
            <Button className="gap-2"><Plus size={16} /> Add Vibe</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editVibe ? "Edit Vibe" : "Add Vibe"}</DialogTitle>
            </DialogHeader>
            <VibeFormContent
              editVibe={editVibe}
              onSubmit={handleSubmit}
              loading={createMut.isPending || updateMut.isPending}
            />
          </DialogContent>
        </Dialog>
      </div>

      <Card className="border-0 shadow-sm">
        <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Video</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Order</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vibes.map((vibe) => (
              <TableRow key={vibe.id}>
                <TableCell>
                  <video src={vibe.url} className="w-16 h-16 object-cover rounded-lg bg-slate-100" muted loop playsInline />
                </TableCell>
                <TableCell className="font-medium">{vibe.title || "—"}</TableCell>
                <TableCell>{vibe.order}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button size="sm" variant="ghost" onClick={() => { setEditVibe(vibe); setDialogOpen(true); }}>
                    <Pencil size={14} />
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button size="sm" variant="ghost" className="text-red-500"><Trash2 size={14} /></Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete Vibe?</AlertDialogTitle>
                        <AlertDialogDescription>This will permanently delete it from the system.</AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction className="bg-red-600" onClick={() => deleteMut.mutate({ id: vibe.id })}>Delete</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      </Card>
    </div>
  );
}

function VibeFormContent({ editVibe, onSubmit, loading }: any) {
  const [url, setUrl] = useState(editVibe?.url || "");

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label>Title</Label>
        <Input name="title" defaultValue={editVibe?.title || ""} placeholder="E.g. Spiti Valley Adventure" />
      </div>
      <div>
        <input type="hidden" name="url" value={url} required />
        <ImageUpload label="Video File" value={url} onChange={setUrl} accept="video/*" />
      </div>
      <div className="space-y-2">
        <Label>Order</Label>
        <Input name="order" type="number" defaultValue={editVibe?.order || 0} />
      </div>
      <Button type="submit" className="w-full" disabled={loading || !url}>
        {loading ? "Saving..." : editVibe ? "Update Vibe" : "Add Vibe"}
      </Button>
    </form>
  );
}
