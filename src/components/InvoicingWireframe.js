import { useState } from "react";
import { FaHome, FaFileInvoice, FaUsers, FaSignOutAlt } from "react-icons/fa";

export default function Dashboard() {
  const [activePage, setActivePage] = useState("Dashboard");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-5 flex flex-col">
        <h1 className="text-2xl font-bold text-blue-600">Acme</h1>
        <nav className="mt-5 space-y-2">
          <SidebarItem icon={<FaHome />} text="Home" onClick={() => setActivePage("Dashboard")} active={activePage === "Dashboard"} />
          <SidebarItem icon={<FaFileInvoice />} text="Invoices" onClick={() => setActivePage("Invoices")} active={activePage === "Invoices"} />
          <SidebarItem icon={<FaUsers />} text="Customers" onClick={() => setActivePage("Customers")} active={activePage === "Customers"} />
        </nav>
        <div className="mt-auto">
          <SidebarItem icon={<FaSignOutAlt />} text="Sign Out" />
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-5">
        {activePage === "Dashboard" && <DashboardPage />}
        {activePage === "Invoices" && <InvoicesPage />}
        {activePage === "Customers" && <CustomersPage />}
      </div>
    </div>
  );
}

function SidebarItem({ icon, text, onClick, active }) {
  return (
    <button 
      onClick={onClick} 
      className={`flex items-center space-x-2 p-2 rounded-lg w-full ${active ? "bg-blue-100 text-blue-600" : "hover:bg-gray-200"}`}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}

function DashboardPage() {
  return <h2 className="text-xl font-bold">Dashboard Overview</h2>;
}

function InvoicesPage() {
  return <h2 className="text-xl font-bold">Invoices Management</h2>;
}

function CustomersPage() {
  return <h2 className="text-xl font-bold">Customer List</h2>;
}
