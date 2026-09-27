import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserUpdateFrom } from "../_components/UserUpdateForm";
import { getCurrentUser } from "@/app/data/admin/get-current-user";

export default async function UserProfileCreationPage() {
  const user = await getCurrentUser();
  if (!user) {
    return null;
  }
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold tracking-tight">
            Update Information
          </CardTitle>
          <CardDescription className="text-[16px] font-medium">
            <p className="text-sm text-muted-foreground">
              Update your profile information, bio, and social links.
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent className="mb-12">
          <UserUpdateFrom user={user} />
        </CardContent>
      </Card>
    </>
  );
}
