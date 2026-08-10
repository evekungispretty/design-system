import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/site/ThemeProvider";
import { SidebarProvider } from "@/components/site/sidebar-context";
import { TopNav } from "@/components/site/TopNav";
import { Sidebar } from "@/components/site/Sidebar";

export const metadata: Metadata = {
  title: {
    default: "MiLingual Design Library",
    template: "%s — MiLingual Design Library",
  },
  description:
    "Documentation for the MiLingual Design Library: components, patterns, and guidelines.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SidebarProvider>
            <TopNav />
            <div className="mx-auto flex max-w-[1400px]">
              <Sidebar />
              <main className="min-w-0 flex-1 px-4 py-8 md:px-10">
                {children}
              </main>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
