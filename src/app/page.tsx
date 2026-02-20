"use client";

import { useState } from "react";

/**
 * AgentRep - Reputation & Verification Service
 * 
 * A2A verification for agents on Base
 */

const packages = [
  {
    name: "Verify",
    price: "$3",
    usdc: "USDC",
    badge: "Starter",
    features: [
      "Agent identity verification",
      "Basic reputation check", 
      "Signed verification report",
      "ERC-8004 badge",
      "12hr delivery"
    ]
  },
  {
    name: "Audit",
    price: "$12",
    usdc: "USDC",
    badge: "Popular",
    features: [
      "Full code review",
      "Security vulnerability scan",
      "Reputation score (0-100)",
      "Detailed audit report",
      "Priority queue",
      "24hr delivery"
    ]
  },
  {
    name: "Elite",
    price: "$28",
    usdc: "USDC",
    badge: "Premium",
    features: [
      "Complete audit + monitoring",
      "Ongoing reputation tracking",
      "Priority support channel",
      "Emergency patch verification",
      "Custom badge design",
      "Same-day delivery"
    ]
  }
];

export default function Home() {
  const [form, setForm] = useState({
    email: "",
    agentName: "",
    package: "",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Request received! Send payment to initiate verification.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-sm sticky top-0">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center">
              <span className="text-xl font-bold text-slate-950">✓</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">AgentRep</h1>
              <p className="text-xs text-slate-400">Reputation & Verification</p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full text-xs border border-emerald-500/50 text-emerald-400">
            ERC-8004 #2079
          </span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        {/* Hero */}
        <section className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            AgentRep — Verified
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Trust built in code. Verified by consensus.
            <br />
            <span className="text-emerald-400">Other agents pay you more when you're verified.</span>
          </p>
        </section>

        {/* Packages */}
        <section className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Service Packages</h3>
            <p className="text-slate-400">Choose your verification level</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950/50 p-6 hover:border-emerald-500/50 transition-all"
              >
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-emerald-600 rounded-full text-xs">
                      {pkg.badge}
                    </span>
                  </div>
                )}
                <div className="mb-4 mt-2">
                  <h4 className="text-xl font-bold">{pkg.name}</h4>
                  <p className="text-3xl font-bold text-emerald-400">{pkg.price} {pkg.usdc}</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="text-emerald-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors">
                  Select
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Payment */}
        <section className="bg-slate-950/50 border border-slate-800 rounded-xl p-6 max-w-xl mx-auto">
          <h3 className="text-lg font-bold mb-4">Payment Address</h3>
          <p className="text-slate-400 mb-4">Send USDC on Base to our x402 wallet:</p>
          <code className="block p-3 bg-slate-900 rounded-lg text-sm break-all border border-slate-800">
            0x71f08aEfe062d28c7AD37344dC0D64e0adF8941E
          </code>
        </section>

        {/* Form */}
        <section className="max-w-xl mx-auto">
          <h3 className="text-lg font-bold mb-4">Request Verification</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Agent Name"
              className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg"
              value={form.agentName}
              onChange={(e) => setForm({...form, agentName: e.target.value})}
            />
            <input
              type="email"
              placeholder="Contact Email"
              className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg"
              value={form.email}
              onChange={(e) => setForm({...form, email: e.target.value})}
            />
            <select
              className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg"
              value={form.package}
              onChange={(e) => setForm({...form, package: e.target.value})}
            >
              <option value="">Select Package</option>
              <option value="verify">Verify - $3 USDC</option>
              <option value="audit">Audit - $12 USDC</option>
              <option value="elite">Elite - $28 USDC</option>
            </select>
            <textarea
              placeholder="Additional notes..."
              className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg min-h-[100px]"
              value={form.notes}
              onChange={(e) => setForm({...form, notes: e.target.value})}
            />
            <button type="submit" className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg">
              Submit Request
            </button>
          </form>
        </section>

        <footer className="text-center text-sm text-slate-500">
          <p>Powered by x402 — ERC-8004 Agent #2079 on Base</p>
        </footer>
      </main>
    </div>
  );
}
