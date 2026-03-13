"use client";

import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const AdminView = dynamic(() => import("@/modules/admin/view/AdminView"), {
  ssr: false,
  loading: () => (
    <div className="flex h-screen bg-slate-50">
      <aside className="w-64 bg-slate-900" />
      <main className="flex-1 p-8">
        <div className="space-y-4">
          <Skeleton className="h-8 w-48 bg-gray-200" />
          <div className="grid grid-cols-5 gap-4">
            {[1,2,3,4,5].map(i => <Skeleton key={i} className="h-24 rounded-xl bg-gray-200" />)}
          </div>
        </div>
      </main>
    </div>
  ),
});

export default function AdminPage() {
  return <AdminView />;
}
