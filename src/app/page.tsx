import dynamic from 'next/dynamic';

const Dashboard = dynamic(() => import('dashboard/Dashboard'), { ssr: false });
const Expenses = dynamic(() => import('expenses/Expenses'), { ssr: false });
// Ensure you have configured Module Federation in your webpack configuration for both the host and remote applications.
// The imports below assume that the remote modules are exposed correctly in their respective repositories.

export default function Home() {
  return (
    <div>
      <h1>Expense Management System</h1>
      <Dashboard />
      <Expenses />
    </div>
  );
}