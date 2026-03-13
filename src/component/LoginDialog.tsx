"use client";
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import MobileLoginForm from "./MobileLoginForm";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { supabase } from "@/utils/supabase";

export function LoginDialog() {
  const { user, loading, openLogin, setOpenLogin } = useAuth();
  const [mode, setMode] = useState<"login" | "signup">("login");

  // Reset to login mode whenever dialog opens
  useEffect(() => {
    if (openLogin) setMode("login");
  }, [openLogin]);

  const handleGoogleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    console.log(data, "check");
    
    if (error) console.error(error);
  };

  return (
    <Dialog open={openLogin} onOpenChange={(e) => setOpenLogin(e)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">
            {mode === "login" ? "Welcome back" : "Create an account"}
          </DialogTitle>
          <DialogDescription className="text-center">
            {mode === "login" 
              ? "Sign in to continue your journey. It only takes a moment."
              : "Join us to discover your next adventure."}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-6">
          <MobileLoginForm mode={mode} />
          <div className="flex flex-col gap-3">
            <Button
              onClick={handleGoogleLogin}
              className="w-full cursor-pointer"
              variant={"secondary"}
            >
              <Image
                alt="google"
                className="size-4"
                height={100}
                width={100}
                src={"/icon/google.png"}
              />
              <span>Google</span>
            </Button>
            
            <div className="text-center text-sm text-gray-500 mt-2">
              {mode === "login" ? (
                <>
                  Don't have an account?{" "}
                  <button onClick={() => setMode("signup")} className="text-[#003022] font-semibold hover:underline">
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button onClick={() => setMode("login")} className="text-[#003022] font-semibold hover:underline">
                    Log in
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

