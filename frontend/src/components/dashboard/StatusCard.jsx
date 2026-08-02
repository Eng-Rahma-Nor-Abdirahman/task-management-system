import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const StatusCard = ({ title, value, icon: Icon }) => {
    return (
        <Card className="shadow-sm">
            <CardContent className="p-4">
                <div className="flex items-center justify-between">

                    <div>
                        <p className="text-sm text-muted-foreground">
                            {title}
                        </p>

                        <h2 className="text-2xl font-bold">
                            {value}
                        </h2>
                    </div>

                    <Icon className="h-6 w-6 text-primary" />

                </div>
            </CardContent>
        </Card>
    );
};

export default StatusCard;