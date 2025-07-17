-- Create tenant management tables
CREATE TABLE public.tenants (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    domain TEXT UNIQUE NOT NULL,
    subdomain TEXT UNIQUE,
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'suspended')),
    settings JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create user profiles table (tenant-scoped)
CREATE TABLE public.user_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    tenant_id UUID NOT NULL REFERENCES public.tenants(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    role TEXT DEFAULT 'user' CHECK (role IN ('admin', 'editor', 'user')),
    first_name TEXT,
    last_name TEXT,
    avatar_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, tenant_id)
);

-- Create contact forms table (tenant-scoped)
CREATE TABLE public.contact_forms (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL REFERENCES public.tenants(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    form_type TEXT DEFAULT 'contact',
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create blog categories table (tenant-scoped)
CREATE TABLE public.blog_categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL REFERENCES public.tenants(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    slug TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(tenant_id, slug)
);

-- Create blog tags table (tenant-scoped)
CREATE TABLE public.blog_tags (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL REFERENCES public.tenants(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    slug TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(tenant_id, slug)
);

-- Create blog posts table (tenant-scoped)
CREATE TABLE public.blog_posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL REFERENCES public.tenants(id) ON DELETE CASCADE,
    author_id UUID REFERENCES public.user_profiles(id) ON DELETE SET NULL,
    title TEXT NOT NULL,
    slug TEXT NOT NULL,
    content TEXT,
    excerpt TEXT,
    featured_image TEXT,
    status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
    meta_title TEXT,
    meta_description TEXT,
    meta_keywords TEXT,
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(tenant_id, slug)
);

-- Create blog post categories junction table
CREATE TABLE public.blog_post_categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    post_id UUID NOT NULL REFERENCES public.blog_posts(id) ON DELETE CASCADE,
    category_id UUID NOT NULL REFERENCES public.blog_categories(id) ON DELETE CASCADE,
    UNIQUE(post_id, category_id)
);

-- Create blog post tags junction table
CREATE TABLE public.blog_post_tags (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    post_id UUID NOT NULL REFERENCES public.blog_posts(id) ON DELETE CASCADE,
    tag_id UUID NOT NULL REFERENCES public.blog_tags(id) ON DELETE CASCADE,
    UNIQUE(post_id, tag_id)
);

-- Enable RLS on all tables
ALTER TABLE public.tenants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_post_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_post_tags ENABLE ROW LEVEL SECURITY;

-- Create function to get current user's tenant
CREATE OR REPLACE FUNCTION public.get_current_tenant_id()
RETURNS UUID AS $$
DECLARE
    tenant_id UUID;
BEGIN
    SELECT up.tenant_id INTO tenant_id
    FROM public.user_profiles up
    WHERE up.user_id = auth.uid()
    LIMIT 1;
    
    RETURN tenant_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE;

-- Create function to check if user has role
CREATE OR REPLACE FUNCTION public.user_has_role(required_role TEXT)
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.user_profiles
        WHERE user_id = auth.uid() 
        AND tenant_id = public.get_current_tenant_id()
        AND role = required_role
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE;

-- RLS Policies for tenants (admins can see all tenants)
CREATE POLICY "Users can view their tenant" ON public.tenants
    FOR SELECT USING (id = public.get_current_tenant_id());

CREATE POLICY "Admins can manage tenants" ON public.tenants
    FOR ALL USING (public.user_has_role('admin'));

-- RLS Policies for user_profiles
CREATE POLICY "Users can view profiles in their tenant" ON public.user_profiles
    FOR SELECT USING (tenant_id = public.get_current_tenant_id());

CREATE POLICY "Users can update their own profile" ON public.user_profiles
    FOR UPDATE USING (user_id = auth.uid() AND tenant_id = public.get_current_tenant_id());

CREATE POLICY "Admins can manage profiles in their tenant" ON public.user_profiles
    FOR ALL USING (tenant_id = public.get_current_tenant_id() AND public.user_has_role('admin'));

-- RLS Policies for contact_forms
CREATE POLICY "Users can view contact forms in their tenant" ON public.contact_forms
    FOR SELECT USING (tenant_id = public.get_current_tenant_id());

CREATE POLICY "Anyone can insert contact forms" ON public.contact_forms
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can manage contact forms in their tenant" ON public.contact_forms
    FOR ALL USING (tenant_id = public.get_current_tenant_id() AND public.user_has_role('admin'));

-- RLS Policies for blog_categories
CREATE POLICY "Users can view categories in their tenant" ON public.blog_categories
    FOR SELECT USING (tenant_id = public.get_current_tenant_id());

CREATE POLICY "Editors can manage categories in their tenant" ON public.blog_categories
    FOR ALL USING (tenant_id = public.get_current_tenant_id() AND (public.user_has_role('admin') OR public.user_has_role('editor')));

-- RLS Policies for blog_tags
CREATE POLICY "Users can view tags in their tenant" ON public.blog_tags
    FOR SELECT USING (tenant_id = public.get_current_tenant_id());

CREATE POLICY "Editors can manage tags in their tenant" ON public.blog_tags
    FOR ALL USING (tenant_id = public.get_current_tenant_id() AND (public.user_has_role('admin') OR public.user_has_role('editor')));

-- RLS Policies for blog_posts
CREATE POLICY "Anyone can view published posts" ON public.blog_posts
    FOR SELECT USING (status = 'published');

CREATE POLICY "Users can view all posts in their tenant" ON public.blog_posts
    FOR SELECT USING (tenant_id = public.get_current_tenant_id() AND auth.uid() IS NOT NULL);

CREATE POLICY "Editors can manage posts in their tenant" ON public.blog_posts
    FOR ALL USING (tenant_id = public.get_current_tenant_id() AND (public.user_has_role('admin') OR public.user_has_role('editor')));

-- RLS Policies for junction tables
CREATE POLICY "Users can view post categories in their tenant" ON public.blog_post_categories
    FOR SELECT USING (EXISTS (
        SELECT 1 FROM public.blog_posts bp 
        WHERE bp.id = post_id AND bp.tenant_id = public.get_current_tenant_id()
    ));

CREATE POLICY "Editors can manage post categories in their tenant" ON public.blog_post_categories
    FOR ALL USING (EXISTS (
        SELECT 1 FROM public.blog_posts bp 
        WHERE bp.id = post_id AND bp.tenant_id = public.get_current_tenant_id() 
        AND (public.user_has_role('admin') OR public.user_has_role('editor'))
    ));

CREATE POLICY "Users can view post tags in their tenant" ON public.blog_post_tags
    FOR SELECT USING (EXISTS (
        SELECT 1 FROM public.blog_posts bp 
        WHERE bp.id = post_id AND bp.tenant_id = public.get_current_tenant_id()
    ));

CREATE POLICY "Editors can manage post tags in their tenant" ON public.blog_post_tags
    FOR ALL USING (EXISTS (
        SELECT 1 FROM public.blog_posts bp 
        WHERE bp.id = post_id AND bp.tenant_id = public.get_current_tenant_id() 
        AND (public.user_has_role('admin') OR public.user_has_role('editor'))
    ));

-- Create triggers for updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_tenants_updated_at BEFORE UPDATE ON public.tenants
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_user_profiles_updated_at BEFORE UPDATE ON public.user_profiles
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON public.blog_posts
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Insert a default tenant for this website
INSERT INTO public.tenants (name, domain, subdomain) 
VALUES ('Default Website', 'localhost:5173', 'default');