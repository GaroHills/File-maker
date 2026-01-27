// icons.js
const toolIcons = {
    "reduce_image_size": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="14" rx="2" ry="2" stroke="#0070f3" stroke-width="2"/><circle cx="8" cy="9" r="1.5" fill="#0070f3"/><path d="M5 16l4-4 3 3 4-4 3 5H5z" fill="#0070f3"/><path d="M9 21l-2-2h1v-2h2v2h1l-2 2z" fill="#0070f3"/><path d="M15 21l2-2h-1v-2h-2v2h-1l2 2z" fill="#0070f3"/></svg>`,
    
    "increase_img_size": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
  <!-- Image frame -->
  <rect x="3" y="3" width="14" height="14" rx="2"
        stroke="#1e88e5" stroke-width="2"/>

  <!-- Mountain -->
  <path d="M5 13l3-3 3 3 2-2 2 2"
        stroke="#1e88e5" stroke-width="2" fill="none"/>

  <!-- Sun -->
  <circle cx="8" cy="7" r="1.5" fill="#1e88e5"/>

  <!-- Increase / Zoom icon -->
  <circle cx="17" cy="17" r="4"
          stroke="#1e88e5" stroke-width="2"/>
  <path d="M17 15v4M15 17h4"
        stroke="#1e88e5" stroke-width="2"/>
</svg>`,

    "join_image": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="4" width="9" height="10" rx="1.5" fill="none" stroke="#0070f3" stroke-width="2"/><circle cx="5" cy="7" r="1" fill="#0070f3"/><path d="M3.5 12l2.5-3 2 2 2-2 1.5 3H3.5z" fill="#0070f3"/><rect x="13" y="4" width="9" height="10" rx="1.5" fill="none" stroke="#0070f3" stroke-width="2"/><circle cx="16" cy="7" r="1" fill="#0070f3"/><path d="M14.5 12l2.5-3 2 2 2-2 1.5 3h-8.5z" fill="#0070f3"/><path d="M8 18l4 3 4-3h-3v-3h-2v3h-3z" fill="#0070f3"/></svg>`,
    
    "img_to_pdf": `<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 26 26"
  width="30"
  height="30"
>
  <!-- PDF file shape -->
  <path
    d="M10 2h8l4 4v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
    fill="#0070f3"
  />

  <!-- Folded corner -->
  <path
    d="M18 2v4h4"
    fill="#A2E9F6"
  />

  <!-- IMG text -->
  <text
    x="12"
    y="9"
    text-anchor="middle"
    font-size="5"
    fill="#ffffff"
    font-weight="bold"
    font-family="Arial, sans-serif"
  >
    IMG
  </text>

  <!-- Arrow down -->
  <path
    d="M12 11v4"
    stroke="#ffffff"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <path
    d="M10.5 13.5L12 15l1.5-1.5"
    stroke="#ffffff"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    fill="none"
  />

  <!-- PDF text -->
  <text
    x="12"
    y="20"
    text-anchor="middle"
    font-size="5"
    fill="#ffffff"
    font-weight="bold"
    font-family="Arial, sans-serif"
  >
    PDF
  </text>
</svg>`,
    "pdf_to_img": `<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 25 25"
  width="30"
  height="30"
>
  <!-- PDF file shape -->
  <path
    d="M10 2h8l4 4v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
    fill="#0070f3"
  />

  <!-- Folded corner -->
  <path
    d="M18 2v4h4"
    fill="#A2E9F6"
  />

  <!-- PDF text -->
  <text
    x="12"
    y="9"
    text-anchor="middle"
    font-size="5"
    fill="#ffffff"
    font-weight="bold"
    font-family="Arial, sans-serif"
  >
    PDF
  </text>

  <!-- Arrow down -->
  <path
    d="M12 11v4"
    stroke="#ffffff"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <path
    d="M10.5 13.5L12 15l1.5-1.5"
    stroke="#ffffff"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    fill="none"
  />

  <!-- IMG text -->
  <text
    x="12"
    y="20"
    text-anchor="middle"
    font-size="5"
    fill="#ffffff"
    font-weight="bold"
    font-family="Arial, sans-serif"
  >
    IMG
  </text>
</svg>`,

    "photo_free_crop": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">

  <!-- Background -->
  <rect width="512" height="512" rx="110" fill="#1e88ff"/>

  <!-- Photo Area -->
  <rect x="90" y="80" width="332" height="360" rx="18" fill="#8bbcff"/>

  <!-- Dashed Crop Border -->
  <rect x="105" y="95" width="302" height="330" rx="14"
        fill="none"
        stroke="#ffffff"
        stroke-width="10"
        stroke-dasharray="18 12"/>

  <!-- Abstract Avatar Head -->
  <circle cx="256" cy="200" r="60" fill="#ffffff"/>

  <!-- Abstract Avatar Body -->
  <rect x="180" y="270" width="152" height="100" rx="50" fill="#ffffff"/>

  <!-- Scissors Icon -->
  <g transform="translate(350 260)" stroke="#ffffff" stroke-width="10" fill="none" stroke-linecap="round">
    <circle cx="0" cy="30" r="14"/>
    <circle cx="35" cy="30" r="14"/>
    <line x1="0" y1="30" x2="40" y2="0"/>
    <line x1="35" y1="30" x2="5" y2="0"/>
  </g>

  <!-- Year Badge -->
  <path d="M0 0h240v90H0z" fill="#ff2d2d"/>
  <text x="120" y="62"
        font-size="54"
        font-weight="bold"
        text-anchor="middle"
        fill="#ffffff"
        font-family="Arial, Helvetica, sans-serif">
    2026
  </text>

</svg>`,

    "img_resize": `<svg xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 64 64"
     fill="none"
     stroke-linecap="square"
     stroke-linejoin="miter">

  <!-- Width Arrow (Top) -->
  <line x1="18" y1="10" x2="46" y2="10"
        stroke="#2563eb" stroke-width="1.5"/>
  <polyline points="21 8 18 10 21 12"
            stroke="#2563eb" stroke-width="1.5"/>
  <polyline points="43 8 46 10 43 12"
            stroke="#2563eb" stroke-width="1.5"/>

  <!-- Height Arrow (Right) -->
  <line x1="52" y1="18" x2="52" y2="44"
        stroke="#7c3aed" stroke-width="1.5"/>
  <polyline points="50 21 52 18 54 21"
            stroke="#7c3aed" stroke-width="1.5"/>
  <polyline points="50 41 52 44 54 41"
            stroke="#7c3aed" stroke-width="1.5"/>

  <!-- Image Frame (Sharp Corners) -->
  <rect x="14" y="16" width="32" height="24"
        stroke="#111827"
        stroke-width="1.5"/>

  <!-- Small Sun -->
  <circle cx="20" cy="22" r="2"
          stroke="#111827"
          stroke-width="1.5"/>

  <!-- Mountains (Simple Lines) -->
  <polyline points="16 38 26 28 32 34 40 26 46 38"
            stroke="#111827"
            stroke-width="1.5"
            fill="none"/>

</svg>`,

"default": `<svg xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 512 640"
     width="512"
     height="640">

  <defs>
    <linearGradient id="redGlow" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ff5252"/>
      <stop offset="100%" stop-color="#b71c1c"/>
    </linearGradient>

    <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- File Base -->
  <path d="M96 20h256l80 80v460a40 40 0 0 1-40 40H96a40 40 0 0 1-40-40V60a40 40 0 0 1 40-40z"
        fill="#e31c1c"/>

  <!-- Folded Corner -->
  <polygon points="352,20 432,100 352,100"
           fill="#b71c1c"/>

  <!-- Top Label with Glow -->
  <rect x="56" y="60" width="300" height="80"
        rx="6"
        fill="url(#redGlow)"
        filter="url(#glow)"/>

  <text x="206" y="115"
        font-size="46"
        font-weight="bold"
        text-anchor="middle"
        fill="#ffffff"
        font-family="Arial, Helvetica, sans-serif">
    MRB Tools
  </text>

  <!-- Dashed Image Container -->
  <rect x="156" y="200" width="200" height="140"
        fill="none"
        stroke="#ffffff"
        stroke-width="6"
        stroke-dasharray="10 8"/>

  <!-- Gallery Icon (Sun) -->
  <circle cx="205" cy="235" r="10"
          fill="#ffffff"/>

  <!-- Gallery Icon (Mountains) -->
  <polyline points="170 330 230 270 265 305 315 260 345 330"
            fill="none"
            stroke="#ffffff"
            stroke-width="8"
            stroke-linejoin="round"/>

  <!-- Bottom IMG Text -->
  <text x="256" y="520"
        font-size="64"
        font-weight="bold"
        text-anchor="middle"
        fill="#ffffff"
        font-family="Arial, Helvetica, sans-serif">
    IMG
  </text>

</svg>`

"idcard_cropper" '<svg width="128" height="128" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">

  <!-- ID Card Base -->
  <rect x="14" y="20" width="100" height="72" rx="10" ry="10"
        fill="#ffffff" stroke="#1e88e5" stroke-width="4"/>

  <!-- Profile Image Circle -->
  <circle cx="46" cy="48" r="10" fill="#1e88e5"/>

  <!-- Name Lines -->
  <rect x="64" y="42" width="34" height="6" rx="3" fill="#1e88e5"/>
  <rect x="64" y="52" width="24" height="6" rx="3" fill="#90caf9"/>

  <!-- Center Image Icon -->
  <rect x="38" y="58" width="52" height="24" rx="4"
        fill="#e3f2fd" stroke="#1e88e5" stroke-width="2"/>
  <circle cx="52" cy="68" r="4" fill="#1e88e5"/>
  <path d="M46 78l8-8 6 6 10-10 10 12"
        fill="none" stroke="#1e88e5" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round"/>

  <!-- Crop Box (Joined Corner Lines) -->
  <!-- Top Left -->
  <path d="M28 26h10M28 26v10" stroke="#0d47a1" stroke-width="3" stroke-linecap="round"/>
  <!-- Top Right -->
  <path d="M100 26h-10M100 26v10" stroke="#0d47a1" stroke-width="3" stroke-linecap="round"/>
  <!-- Bottom Left -->
  <path d="M28 86h10M28 86v-10" stroke="#0d47a1" stroke-width="3" stroke-linecap="round"/>
  <!-- Bottom Right -->
  <path d="M100 86h-10M100 86v-10" stroke="#0d47a1" stroke-width="3" stroke-linecap="round"/>

</svg>',
    
};
