"use client";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-[calc(100%-72px)] overflow-y-auto-auto p-4 bg-background">
      {children}
    </div>
  );
}
