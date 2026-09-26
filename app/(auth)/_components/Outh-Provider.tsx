"use client"

import { GitHub, Google } from "@/components/shared/icons";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";
import { authClient } from "@/lib/auth-client";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export function OAuthProviderPage() {
        const router = useRouter();
 const [isPendingGoogle, startGoogleTransition] = useTransition();
  const [isPendingGithub, startGithubTransition] = useTransition();
  
  function handleGoogleAuth() {
    startGoogleTransition(async () => {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
        fetchOptions: {
          onSuccess: () => {
            toast.add({
              type: "success",
              title: "Account Access Successfully",
            });
            router.push("/");
          },
          onError: () => {
            toast.add({
              type: "error",
              title: "Invalide OAuth Error..!",
            });
          },
        },
      });
    });
  }

  function handleGithub() {
    startGithubTransition(async () => {
      await authClient.signIn.social({
        provider: "github",
        callbackURL: "/",
        fetchOptions: {
          onSuccess: () => {
            toast.add({
              type: "success",
              title: "Account Access Successfully",
            });
            router.push("/");
          },
          onError: () => {
            toast.add({
              type: "error",
              title: "Invalide OAuth Error..!",
            });
          },
        },
      });
    });
  }

  return (
    <div className="mt-5 space-y-4 flex flex-col items-center justify-center mx-auto">
      <div className="relative flex items-center">
        <div className="grow border-t border-white/10" />
        <span className="mx-4 text-xs text-gray-500">OR CONTINUE WITH</span>
        <div className="grow border-t border-white/10" />
      </div>

      <div className="grid grid-cols-1 gap-3">
        {/* Google */}
        <Button
          type="button"
          disabled={isPendingGoogle}
          variant="outline"
          className="px-14 py-6 rounded-xl border-white/10 bg-[#15171e] text-gray-200 hover:bg-white/5 hover:text-white"
          onClick={handleGoogleAuth}
        >
          {isPendingGoogle ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              <span>Loading...</span>
            </>
          ) : (
            <>
              <Google className="size-4" />
              <span>Google</span>
            </>
          )}
        </Button>

        {/* GitHub */}
        <Button
          type="button"
          disabled={isPendingGithub}
          variant="outline"
          className="h-12 rounded-xl border-white/10 bg-[#15171e] text-gray-200 hover:bg-white/5 hover:text-white"
          onClick={handleGithub}
        >
          {isPendingGithub ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              <span>Loading...</span>
            </>
          ) : (
            <>
              <GitHub className="size-4" />
              <span>GitHub</span>
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
