"use client";

import { createContext, useEffect, useState, useContext } from "react";
import { supabase } from "@/utils/supabase";
import { User } from "@supabase/supabase-js";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery } from "@tanstack/react-query";
type AuthContextType = {
  user: User | null;
  loading: boolean;
  openLogin: boolean;
  setOpenLogin: (open: boolean) => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  openLogin: false,
  setOpenLogin: () => {},
});

export function AuthProvider({ children }: React.PropsWithChildren) {
  const trpc = useTRPC();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [openLogin, setOpenLogin] = useState(false);
  const mutate = useMutation(trpc.user.upsert.mutationOptions());
  
  const { data: userData } = useQuery(
    trpc.user.profile.queryOptions(
      undefined,
      {
        enabled: !!user?.email,
      }
    )
  );
  console.log(userData,"user data")

  useEffect(() => {
    try {
      supabase.auth.getUser().then(async ({ data }) => {
        setUser(data.user ?? null);
        if (data?.user) {
          await mutate.mutateAsync();
        }
        setLoading(false);
      });
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange(async (_event, session) => {
        setUser(session?.user ?? null);
        if (session?.user) {
          await mutate.mutateAsync();
        }
      });

      return () => subscription.unsubscribe();
    } catch (error) {
      console.log(error, "testtesttest");
    }
  }, []);
  // console.log(user,789456123)
  return (
    <AuthContext.Provider value={{ user, loading, openLogin, setOpenLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
