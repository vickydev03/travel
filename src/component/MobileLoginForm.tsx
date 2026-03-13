"use client";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { loginSchema } from "@/utils/schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { sendOtp } from "@/lib/sendOtp";
import { supabase } from "@/utils/supabase";
import { useMutation } from "@tanstack/react-query";
// import { trpc } from "@/trpc/server";
import { useTRPC } from "@/trpc/client";
import { useAuth } from "@/context/AuthContext";

interface Props {
  mode: "login" | "signup";
}

function MobileLoginForm({ mode }: Props) {
  const { setOpenLogin } = useAuth();
  const trpc = useTRPC();
  const loginMutation = useMutation(trpc.user.login.mutationOptions());
  const registerMutation = useMutation(trpc.user.register.mutationOptions());
  
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof loginSchema>) {
    try {
      console.log(data, "final check");
      
      const isLogin = mode === "login";
      const mutation = isLogin ? loginMutation : registerMutation;
      
      const res: any = await mutation.mutateAsync({
        email: data.email,
        password: data.password,
      });

      console.log(res, "data");

      if (res.session) {
        await supabase.auth.setSession(res.session);
        setOpenLogin(false);
      }

      if (res.mode === "register" || res.mode === "signup") {
        toast.success("Account created successfully. Welcome!");
      } else {
        toast.success("Welcome back!");
      }
    } catch (err: any) {
      console.log(err, "error aaya hai");
      form.setError("email", {
        message: err.message,
      });
    }
  }
  return (
    <div className="w-full h-full">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="phone_no">Email</FieldLabel>
                    <div className="group relative flex items-center transition-all duration-200">
                      <Input
                        {...field}
                        id="email"
                        className="
                                    bg-white border-slate-200 text-slate-900 text-sm 
                                    rounded-lg transition-all
                                    
                                    /* Placeholder - Cleaner look since +91 is already there */
                                    placeholder:text-slate-400 placeholder:font-light
                                    
                                    /* Professional Focus States */
                                    focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 
                                    focus-visible:ring-blue-500/10 focus-visible:outline-none
                                    
                                    /* Invalid/Error State */
                                    aria-[invalid=true]:border-red-500 aria-[invalid=true]:focus:ring-red-500/10
                                    
                                    /* Clean Up */
                                    shadow-sm 
                                    "
                        placeholder="Jhon@gmail.com"
                      />
                    </div>
                    {fieldState.invalid && (
                      <FieldError
                        className=" capitalize"
                        errors={[fieldState.error]}
                      />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="phone_no">Password</FieldLabel>
                    <div className="group relative flex items-center transition-all duration-200">
                      <Input
                        {...field}
                        id="phone_no"
                        type="passoword"
                        className="
                                    bg-white border-slate-200 text-slate-900 text-sm 
                                    rounded-lg transition-all
                                    
                                    /* Placeholder - Cleaner look since +91 is already there */
                                    placeholder:text-slate-400 placeholder:font-light
                                    
                                    /* Professional Focus States */
                                    focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 
                                    focus-visible:ring-blue-500/10 focus-visible:outline-none
                                    
                                    /* Invalid/Error State */
                                    aria-[invalid=true]:border-red-500 aria-[invalid=true]:focus:ring-red-500/10
                                    
                                    /* Clean Up */
                                    shadow-sm 
                                    "
                        placeholder="**********"
                      />
                    </div>
                    {fieldState.invalid && (
                      <FieldError
                        className=" capitalize"
                        errors={[fieldState.error]}
                      />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
          </FieldSet>
          <Field orientation="responsive">
            <Button type="submit" disabled={form.formState.isSubmitting} className="w-full">
              {form.formState.isSubmitting 
                ? (mode === "login" ? "Signing in..." : "Signing up...") 
                : (mode === "login" ? "Sign In" : "Sign Up")}
            </Button>
            <Button variant="outline" type="button" onClick={() => setOpenLogin(false)} className="w-full">
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}

export default MobileLoginForm;
