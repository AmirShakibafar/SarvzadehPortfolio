import os

ALLOWED_EXTENSIONS = ('.js', '.jsx', '.ts', '.tsx', '.css')
OUTPUT_FILE = 'frontend_audit_context.md'
IGNORE_DIRS = {'node_modules', '.next', '.git', 'dist', 'build', 'public', 'assets'}

# Dictionary of risky patterns mapped to their audit category
SEARCH_PATTERNS = {
    "Framer Motion & Render Loops": [
        'framer-motion', 'useScroll', 'useMotionValueEvent', 
        'AnimatePresence', 'layoutId', 'useTransform'
    ],
    "Hydration & SSR Mismatches": [
        'useMediaQuery', 'typeof window', 'window.innerWidth', 
        'matchMedia', 'navigator.userAgent', 'isMobile'
    ],
    "CSS & GPU Overload (WebKit)": [
        'backdrop-filter', 'glass', 'h-screen', '100vh', 
        '100dvh', 'will-change'
    ]
}

def extract_audit_context():
    matched_files = 0
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as out_file:
        out_file.write("# Frontend Deep Audit Context\n\n")
        
        for root, dirs, files in os.walk('.'):
            # Prune ignored directories
            dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]
            
            for file in files:
                if not file.endswith(ALLOWED_EXTENSIONS):
                    continue
                    
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                        
                    # Determine which risk categories this file triggers
                    matched_categories = []
                    for category, terms in SEARCH_PATTERNS.items():
                        if any(term in content for term in terms):
                            matched_categories.append(category)
                            
                    # If it hits any risky patterns, write it to the output
                    if matched_categories:
                        out_file.write(f"### File: {filepath}\n")
                        out_file.write(f"**Risk Flags:** {', '.join(matched_categories)}\n\n")
                        out_file.write(f"```{filepath.split('.')[-1]}\n")
                        out_file.write(content)
                        out_file.write("\n```\n\n---\n\n")
                        matched_files += 1
                except Exception as e:
                    print(f"Error reading {filepath}: {e}")
                    
    print(f"Extracted {matched_files} flagged files to {OUTPUT_FILE}")

if __name__ == "__main__":
    extract_audit_context()