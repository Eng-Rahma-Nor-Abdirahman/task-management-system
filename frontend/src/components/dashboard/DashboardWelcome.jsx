import React from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StatusCard from "./StatusCard";

import {
    ClipboardList,
    Clock,
    Loader,
    CheckCircle
} from "lucide-react";

const DashboardWelcome = ({ 
    onCreateTask, 
    showCreateForm,
    stats
}) => {
  return (
    <Card className="border-0 shadow-sm bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2 flex flex-col items-start">
            <CardTitle className="text-2xl">Welcome back!</CardTitle>
            <CardDescription className="text-base">
              Here's what's happening with your tasks today.
            </CardDescription>
          </div>
          {/* TODO: create new task */}
          <Button onClick={onCreateTask}>Create New Task</Button>
        </div>
      </CardHeader>

      <CardContent className="p-6">

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        <StatusCard
            title="Total Tasks"
            value={stats.total}
            icon={ClipboardList}
        />

        <StatusCard
            title="Pending"
            value={stats.pending}
            icon={Clock}
        />

        <StatusCard
            title="In Progress"
            value={stats.inProgress}
            icon={Loader}
        />

        <StatusCard
            title="Completed"
            value={stats.completed}
            icon={CheckCircle}
        />

    </div>

</CardContent>
    </Card>
  );
};

export default DashboardWelcome;
