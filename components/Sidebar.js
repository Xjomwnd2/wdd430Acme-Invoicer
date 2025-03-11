export function Sidebar({ setActivePage }) {
    return (
      <div className="w-64 bg-white p-4 border-r">
        <h2 className="text-xl font-bold mb-4">Acme</h2>
        <ul>
          <li className="p-2 cursor-pointer" onClick={() => setActivePage("dashboard")}>
            Home
          </li>
          <li className="p-2 cursor-pointer" onClick={() => setActivePage("invoices")}>
            Invoices
          </li>
          <li className="p-2 cursor-pointer" onClick={() => setActivePage("customers")}>
            Customers
          </li>
        </ul>
      </div>
    );
  }