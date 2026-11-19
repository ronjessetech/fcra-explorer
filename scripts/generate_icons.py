import os
from PIL import Image, ImageDraw, ImageFont

os.makedirs('public', exist_ok=True)

def draw_emblem(size):
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Outer rounded rectangle (Navy blue)
    corner_radius = int(size * 0.2)
    draw.rounded_rectangle([0, 0, size, size], radius=corner_radius, fill=(30, 58, 138, 255))
    
    # Gold decorative circular border
    margin = int(size * 0.12)
    line_w = max(2, int(size * 0.04))
    draw.ellipse([margin, margin, size - margin, size - margin], outline=(251, 191, 36, 230), width=line_w)
    
    # Center circle hub
    center = size // 2
    hub_r = max(3, int(size * 0.12))
    draw.ellipse([center - hub_r, center - hub_r, center + hub_r, center + hub_r], fill=(245, 158, 11, 255))
    
    # Chakra spokes (8 spokes)
    import math
    for i in range(8):
        angle = i * (math.pi / 4)
        x1 = center + int(math.cos(angle) * hub_r)
        y1 = center + int(math.sin(angle) * hub_r)
        x2 = center + int(math.cos(angle) * (size // 2 - margin - 2))
        y2 = center + int(math.sin(angle) * (size // 2 - margin - 2))
        draw.line([x1, y1, x2, y2], fill=(251, 191, 36, 180), width=max(1, int(size * 0.025)))
        
    # Center checkmark / shield
    check_w = max(2, int(size * 0.06))
    p1 = (int(size * 0.38), int(size * 0.50))
    p2 = (int(size * 0.47), int(size * 0.60))
    p3 = (int(size * 0.66), int(size * 0.38))
    draw.line([p1, p2], fill=(255, 255, 255, 255), width=check_w)
    draw.line([p2, p3], fill=(255, 255, 255, 255), width=check_w)
    
    return img

print("Generating favicons and PWA icons...")
icon_16 = draw_emblem(16)
icon_32 = draw_emblem(32)
icon_48 = draw_emblem(48)
icon_64 = draw_emblem(64)
icon_180 = draw_emblem(180) # Apple touch icon
icon_192 = draw_emblem(192)
icon_512 = draw_emblem(512)

icon_16.save('public/favicon-16x16.png', format='PNG')
icon_32.save('public/favicon-32x32.png', format='PNG')
icon_180.save('public/apple-touch-icon.png', format='PNG')
icon_192.save('public/pwa-192x192.png', format='PNG')
icon_512.save('public/pwa-512x512.png', format='PNG')

# Multi-layer Windows/Legacy favicon.ico
icon_16.save('public/favicon.ico', format='ICO', sizes=[(16, 16), (32, 32), (48, 48)])
print("Favicons and PWA icons saved successfully!")

# Generate high-resolution Open Graph image (1200x630)
print("Generating 1200x630 Open Graph (OG) social card...")
og_w, og_h = 1200, 630
og = Image.new('RGB', (og_w, og_h), (15, 23, 42)) # Deep slate background #0f172a
og_draw = ImageDraw.Draw(og)

# Background gradient accent
for y in range(og_h):
    r = int(15 + (30 - 15) * (y / og_h))
    g = int(23 + (58 - 23) * (y / og_h))
    b = int(42 + (138 - 42) * (y / og_h))
    og_draw.line([(0, y), (og_w, y)], fill=(r, g, b))

# Subtle top accent bar (Saffron/Gold to Blue)
for x in range(og_w):
    og_draw.line([(x, 0), (x, 6)], fill=(245, 158, 11))

# Embed large emblem (260x260)
emblem_og = draw_emblem(260)
og.paste(emblem_og, (80, (og_h - 260) // 2), emblem_og)

# Draw Title & Description
try:
    font_large = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 50)
    font_med = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 26)
    font_small = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 20)
    font_badge = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 18)
except:
    font_large = ImageFont.load_default()
    font_med = font_large
    font_small = font_large
    font_badge = font_large

# Text block
tx = 380
ty = 130

# Badge: FLUGELSOFT LABS
badge_text = "FLUGELSOFT LABS  •  OFFICIAL PUBLIC DATA EXPLORER"
og_draw.rounded_rectangle([tx, ty - 10, tx + 560, ty + 24], radius=6, fill=(30, 58, 138), outline=(59, 130, 246), width=1)
og_draw.text((tx + 16, ty - 4), badge_text, fill=(219, 234, 254), font=font_badge)

# Main Title
og_draw.text((tx, ty + 46), "FCRA Explorer &", fill=(255, 255, 255), font=font_large)
og_draw.text((tx, ty + 106), "Compliance Tracker", fill=(251, 191, 36), font=font_large)

# Subtitle
sub1 = "Offline-first intelligence and due-diligence platform for"
sub2 = "FCRA-registered organisations across India & North East states."
og_draw.text((tx, ty + 180), sub1, fill=(203, 213, 225), font=font_med)
og_draw.text((tx, ty + 215), sub2, fill=(203, 213, 225), font=font_med)

# Feature Badges
badges = [
    "🌿 8 North East States Verified",
    "🏦 Section 17 SBI NDMB Tracker",
    "⚡ 100% Offline PWA"
]
bx = tx
by = ty + 280
for b in badges:
    w = len(b) * 11 + 24
    og_draw.rounded_rectangle([bx, by, bx + w, by + 34], radius=8, fill=(30, 41, 59), outline=(71, 85, 105), width=1)
    og_draw.text((bx + 12, by + 6), b, fill=(241, 245, 249), font=font_small)
    bx += w + 16

# Domain footer
og_draw.text((tx, og_h - 75), "https://fcra-explorer.flugelsoft.com", fill=(96, 165, 250), font=font_med)

og.save('public/og-image.png', format='PNG')
print("OG Image generated successfully at public/og-image.png!")
