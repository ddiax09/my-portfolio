"use client";

import * as React from "react";
import { ThemeProvider as ShadCNThemeProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof ShadCNThemeProvider>) {
  return (
    <ShadCNThemeProvider {...props} attribute="class" defaultTheme="light">
      {children}
    </ShadCNThemeProvider>
  );
}
