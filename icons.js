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

    "default": `<svg viewBox="0 0 24 24"><path fill="#0070f3" d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"/></svg>`
};