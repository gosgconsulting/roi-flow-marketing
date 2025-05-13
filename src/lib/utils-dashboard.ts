
// Utility functions for the dashboard

// Update CSS variable
export const updateCssVariable = (name: string, value: string) => {
  document.documentElement.style.setProperty(name, value);
};

// Load Google Font
export const loadGoogleFont = (fontFamily: string) => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(' ', '+')}:wght@400;500;600;700&display=swap`;
  document.head.appendChild(link);
  return link;
};

// Export settings as JSON
export const exportSettings = (settings: Record<string, any>) => {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(settings, null, 2));
  const downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", "theme-settings.json");
  document.body.appendChild(downloadAnchorNode);
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
};

// Save settings to localStorage
export const saveToLocalStorage = (key: string, data: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error("Error saving to localStorage:", error);
    return false;
  }
};

// Load settings from localStorage
export const loadFromLocalStorage = (key: string) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error("Error loading from localStorage:", error);
    return null;
  }
};

// Generate a theme CSS snippet
export const generateThemeCss = (colors: Record<string, string>, fonts: Record<string, string>) => {
  return `
:root {
  --brand-primary: ${colors.primary};
  --brand-secondary: ${colors.secondary};
  --brand-accent: ${colors.accent};
  --brand-background: ${colors.background};
  --brand-text: ${colors.text};
  
  --font-heading: "${fonts.heading}", sans-serif;
  --font-body: "${fonts.body}", sans-serif;
}

/* Base styles */
body {
  font-family: var(--font-body);
  color: var(--brand-text);
  background-color: var(--brand-background);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
}

/* Button styles */
.button-primary {
  background-color: var(--brand-primary);
  color: white;
}

.button-secondary {
  background-color: var(--brand-secondary);
  color: white;
}

.button-accent {
  background-color: var(--brand-accent);
  color: white;
}
`;
};
