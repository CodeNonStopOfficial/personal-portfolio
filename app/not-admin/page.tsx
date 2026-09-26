import Link from "next/link";
import { ShieldX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotAdmin() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md rounded-lg border p-8 text-center shadow-sm">
        <ShieldX className="mx-auto mb-4 h-12 w-12 text-red-500" />

        <h1 className="text-2xl font-bold">
          Access Denied
        </h1>

        <p className="mt-3 text-muted-foreground">
          You do not have permission to access this page.
          Only administrators can view this content.
        </p>

        <div className="mt-6">
          <Button>
            <Link href="/">
              Go Back Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}