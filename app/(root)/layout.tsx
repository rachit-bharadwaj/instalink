import { ReactNode } from "react";

// components
import { Navbar } from "@/components/shared";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
