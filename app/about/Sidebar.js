import { Home, FileText, Users, LogOut } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-100 p-5">
      <h1 className="text-xl font-bold text-blue-600 mb-6">🌐 Acme</h1>
      <nav className="space-y-4">
        <a href="#" className="flex items-center gap-2 text-gray-700">
          <Home size={20} /> Home
        </a>
        <a href="#" className="flex items-center gap-2 text-gray-700">
          <FileText size={20} /> Invoices
        </a>
        <a href="#" className="flex items-center gap-2 text-gray-700">
          <Users size={20} /> Customers
        </a>
      </nav>
      <button className="mt-20 text-red-500 flex items-center gap-2">
        <LogOut size={20} /> Sign Out
      </button>
    </aside>
  );
}
