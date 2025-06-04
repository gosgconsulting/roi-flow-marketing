
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from '@/integrations/supabase/client';
import { useToast } from "@/hooks/use-toast";

const AdminCreator = () => {
  const [email, setEmail] = useState('contact@gosgconsulting.com');
  const [password, setPassword] = useState('Sparti2025!');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const createAdminAccount = async () => {
    setIsLoading(true);
    try {
      // Sign up the user
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/`
        }
      });

      if (error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
        return;
      }

      if (data.user) {
        // Update the user role to admin in the users table
        const { error: updateError } = await supabase
          .from('users')
          .update({ role: 'admin' })
          .eq('id', data.user.id);

        if (updateError) {
          toast({
            title: "Warning",
            description: "Account created but role update failed. Please update manually.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Success",
            description: "Admin account created successfully!",
          });
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create admin account",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-8">
      <CardHeader>
        <CardTitle>Create Admin Account</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="admin-email">Admin Email</Label>
          <Input
            id="admin-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="admin-password">Password</Label>
          <Input
            id="admin-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button 
          onClick={createAdminAccount} 
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? 'Creating...' : 'Create Admin Account'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default AdminCreator;
