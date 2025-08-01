"use client";


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { BetaApplication } from "@/types/beta-application";
import { BetaApplicationCard } from "./beta-application-card";

interface BetaApplicationsTableProps {
    applications: BetaApplication[];
    total: number;
    isLoading: boolean;
}

export function BetaApplicationsTable({ applications, total, isLoading }: BetaApplicationsTableProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Applications ({total})</CardTitle>
                <CardDescription>
                    Review applications and grant beta access
                </CardDescription>
            </CardHeader>
            <CardContent>
                {isLoading ? (
                    <div className="text-center py-8">
                        <p>Loading applications...</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {applications.map((app) => (
                            <BetaApplicationCard key={app.id} application={app} />
                        ))}

                        {applications.length === 0 && (
                            <div className="text-center py-8">
                                <p className="text-muted-foreground">No applications found</p>
                            </div>
                        )}
                    </div>
                )}
            </CardContent>
        </Card>
    );
} 