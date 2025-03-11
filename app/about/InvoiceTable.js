export default function InvoiceTable() {
    const invoices = [
      { id: "85842ba0...", customer: "Ada Lovelace", email: "ada@lovelace.com", amount: "$157.95", date: "Dec 6, 2022", status: "Pending" },
      { id: "85842ba1...", customer: "Grace Hopper", email: "grace@hopper.com", amount: "$200.50", date: "Dec 7, 2022", status: "Paid" },
    ];
  
    return (
      <div className="mt-5">
        <h2 className="text-xl font-bold mb-3">Invoices</h2>
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="border-b">
                <td className="p-3">{invoice.id}</td>
                <td className="p-3">{invoice.customer}</td>
                <td className="p-3">{invoice.email}</td>
                <td className="p-3">{invoice.amount}</td>
                <td className="p-3">{invoice.date}</td>
                <td className="p-3">
                  <span className={`px-3 py-1 text-sm rounded ${invoice.status === "Paid" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                    {invoice.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  