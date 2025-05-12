
# WordPress Theme Conversion Guide

This document outlines how to convert this React site to a WordPress theme.

## Theme Structure

Create the following WordPress theme structure:

```
theme-name/
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
├── inc/
│   ├── custom-post-types.php
│   ├── acf-fields.php
│   ├── theme-options.php
│   └── enqueue.php
├── template-parts/
│   ├── home/
│   │   ├── hero.php
│   │   ├── services.php
│   │   ├── why-choose-us.php
│   │   └── ...
│   ├── services/
│   │   ├── hero.php
│   │   ├── features.php
│   │   └── ...
│   └── ...
├── functions.php
├── index.php
├── header.php
├── footer.php
├── front-page.php
├── page.php
├── single.php
├── 404.php
├── archive.php
├── page-contact.php
└── style.css
```

## Component Conversion Map

| React Component | WordPress Template |
|-----------------|-------------------|
| Header.tsx | header.php |
| Footer.tsx | footer.php |
| Index.tsx | front-page.php |
| Contact.tsx | page-contact.php |
| ServiceHero.tsx | template-parts/services/hero.php |
| HeroSection.tsx | template-parts/home/hero.php |
| WhyChooseUsSection.tsx | template-parts/home/why-choose-us.php |
| ServiceFeatures.tsx | template-parts/services/features.php |
| ServiceCaseStudies.tsx | template-parts/services/case-studies.php |

## Custom Post Types

Create the following custom post types:

1. **Services**
   - For individual service pages
   - Fields: title, content, features, case studies, etc.

2. **Case Studies**
   - For portfolio and success stories
   - Fields: title, content, client, industry, results, etc.

3. **Testimonials**
   - For client reviews
   - Fields: quote, author, company, rating, etc.

## Advanced Custom Fields (ACF)

Set up ACF for page-specific content:

1. **Home Page Fields**
   - Hero section content
   - Services section content
   - Why Choose Us content
   - etc.

2. **Service Page Fields**
   - Hero content
   - Features list
   - Benefits
   - Case studies
   - etc.

3. **Theme Options**
   - Contact information
   - Social media links
   - Global CTA buttons
   - Brand colors

## Animation Handling

1. Replace Framer Motion animations with:
   - CSS animations
   - AOS (Animate On Scroll) library
   - Simple jQuery animations

## Tailwind CSS Integration

1. Either:
   - Use a WordPress Tailwind integration plugin
   - Compile Tailwind CSS to static CSS for the WordPress theme
   - Use WordPress Block Editor styles with Tailwind classes

## Responsive Images

1. Replace static image paths with:
   - `wp_get_attachment_image()`
   - Featured images using `the_post_thumbnail()`
   - Image sizes using `add_image_size()`

## Navigation Menus

1. Replace hardcoded navigation links with:
   - `wp_nav_menu()` with custom walker classes
   - Register menu locations in `functions.php`

## Form Handling

1. Replace React forms with:
   - Contact Form 7 plugin
   - Gravity Forms plugin
   - Custom WordPress form handling

## Final Steps

1. Add WordPress theme header to style.css
2. Create screenshot.png for theme preview
3. Test thoroughly on a staging environment
4. Implement SEO best practices
5. Ensure performance optimization

## Notes

- All React state management will be replaced with server-side rendering
- Client-side interactivity that requires JavaScript should be implemented with vanilla JS or jQuery
- Consider integrating with WordPress REST API for any dynamic content loading
