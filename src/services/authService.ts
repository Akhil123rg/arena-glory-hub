
import { supabase } from "@/integrations/supabase/client";
import { useState, useEffect } from "react";
import { Session, User } from "@supabase/supabase-js";
import { toast } from "sonner";

export interface AuthState {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
}

// Login with email and password
export const loginWithEmail = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw error;
    }

    return { session: data.session, user: data.user };
  } catch (error: any) {
    toast.error(`Login failed: ${error.message}`);
    throw error;
  }
};

// Sign up with email and password
export const signUpWithEmail = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      throw error;
    }

    // If signUp succeeded but user is not confirmed, handle it
    if (data.user && !data.session) {
      toast.info("Please check your email for confirmation link");
    }
    
    return { session: data.session, user: data.user };
  } catch (error: any) {
    toast.error(`Signup failed: ${error.message}`);
    throw error;
  }
};

// Sign out
export const logout = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw error;
    }
  } catch (error: any) {
    toast.error(`Logout failed: ${error.message}`);
    throw error;
  }
};

// Hook to get and monitor authentication state
export const useAuth = (): AuthState => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    session: null,
    isLoading: true,
  });

  useEffect(() => {
    // Set up the auth state listener first
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setAuthState({
        session,
        user: session?.user ?? null,
        isLoading: false,
      });
      
      if (event === 'SIGNED_IN') {
        toast.success("Logged in successfully");
      } else if (event === 'SIGNED_OUT') {
        toast.info("Logged out successfully");
      }
    });

    // Then check for the current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setAuthState({
        session,
        user: session?.user ?? null,
        isLoading: false,
      });
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return authState;
};
