import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';

const Dashboard = () => {
  return (
    <div>
      Dashboard page
      <UserButton afterSignOutUrl='/'/>
    </div>
  );
}

export default Dashboard;