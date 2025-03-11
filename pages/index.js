import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Dashboard } from "@/components/Dashboard";
import { Invoices } from "@/components/Invoices";
import { Customers } from "@/components/Customers";

export default function Home() {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="flex h-screen">
      <Sidebar setActivePage={setActivePage} />
      <main className="flex-1 p-6 bg-gray-100">
        {activePage === "dashboard" && <Dashboard />}
        {activePage === "invoices" && <Invoices />}
        {activePage === "customers" && <Customers />}
      </main>
    </div>
  );
}