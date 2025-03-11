import Sidebar from "@/components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="p-10 flex-1">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <div className="mt-5 bg-white p-5 rounded-lg shadow">
          <h3 className="text-lg">💰 Collected</h3>
          <p className="text-3xl font-bold">$2,689.26</p>
        </div>
      </main>
    </div>
  );
}
