import { useState, useEffect, createContext, useContext } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface Tenant {
  id: string;
  name: string;
  domain: string;
  subdomain: string | null;
  status: string;
  settings: any;
}

interface TenantContextType {
  tenant: Tenant | null;
  isLoading: boolean;
  error: string | null;
}

const TenantContext = createContext<TenantContextType>({
  tenant: null,
  isLoading: true,
  error: null
});

export const useTenant = () => {
  const context = useContext(TenantContext);
  if (!context) {
    throw new Error('useTenant must be used within a TenantProvider');
  }
  return context;
};

export const TenantProvider = ({ children }: { children: React.ReactNode }) => {
  const [tenant, setTenant] = useState<Tenant | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    detectTenant();
  }, []);

  const detectTenant = async () => {
    try {
      setIsLoading(true);
      
      // Get current domain from window location
      const currentDomain = window.location.host;
      
      // Try to find tenant by domain
      const { data: tenantData, error: tenantError } = await supabase
        .from('tenants')
        .select('*')
        .eq('domain', currentDomain)
        .single();

      if (tenantError && tenantError.code !== 'PGRST116') {
        // If no tenant found by domain, try to get default tenant
        const { data: defaultTenant, error: defaultError } = await supabase
          .from('tenants')
          .select('*')
          .eq('subdomain', 'default')
          .single();

        if (defaultError) {
          throw defaultError;
        }
        
        setTenant(defaultTenant);
      } else if (tenantData) {
        setTenant(tenantData);
      }
    } catch (err) {
      console.error('Error detecting tenant:', err);
      setError(err instanceof Error ? err.message : 'Failed to detect tenant');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TenantContext.Provider value={{ tenant, isLoading, error }}>
      {children}
    </TenantContext.Provider>
  );
};