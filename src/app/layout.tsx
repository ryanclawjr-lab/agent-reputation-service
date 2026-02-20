import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AgentRep - Reputation & Verification",
  description: "Agent-to-agent reputation verification on Base",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
