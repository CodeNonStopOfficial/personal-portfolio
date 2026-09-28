import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectForm } from "./_components/ProjectFrom";

export default function AdminProjectPage(){
     return (
        <Card>
          <CardHeader>
               <CardTitle className="text-2xl font-bold">Create Project</CardTitle>
               <CardDescription className="text-muted-foreground">please add your project and show case in the public page</CardDescription>
          </CardHeader>
          <CardContent>
                <ProjectForm/>
          </CardContent>
        </Card>
     )
}