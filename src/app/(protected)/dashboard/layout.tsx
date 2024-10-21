"use client";

import Sidebar from "@components/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-[calc(100%-72px)] overflow-y-auto-auto bg-background">
      <div className="grid grid-cols-12">
        <div className="col-span-2 bg-background border border-l-red-600 w-full">
          <Sidebar />
        </div>
        <div className="col-span-10 p-4 bg-background h-[calc(100vh-72px)] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
