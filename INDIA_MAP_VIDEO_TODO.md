
NOTE: India map video implementation

The page.tsx now includes a video element for the India map:
<video autoPlay loop muted playsInline>
  <source src="/india_map.mp4" type="video/mp4" />
</video>

To complete this:
1. You need to create or obtain an animated India map video
2. Save it as public/india_map.mp4
3. The current code has a fallback to india_map_3d.jpg if video doesn't load

Alternative: You can convert the existing static image to a simple zoom/pan video
using video editing tools, or create an animated SVG-based map.
