import UserTable from "./users/page";
import DashboardCard from "./components/DashboardCard";
import { FolderOpenIcon, UserGroupIcon, DocumentIcon, SparklesIcon } from "@heroicons/react/24/solid";

export default function DashboardPage() {

  return (
    <div>
      <div className="flex flex-grow">
        <DashboardCard title="Teams" value="123" icon={UserGroupIcon}/>
        <DashboardCard title="Boards" value="2.3k" icon={FolderOpenIcon}/>
        <DashboardCard title="Tasks" value="22" icon={DocumentIcon}/>
        <DashboardCard title="Approved" value="28" icon={SparklesIcon}/>
      </div>
      <UserTable />
    </div>
  );
}