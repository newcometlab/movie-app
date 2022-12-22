/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 👇 app color
        primary: 'var(--primary)', // text color
        secondary: 'var(--secondary)',

        'style-color-cyan': 'var(--style-color-cyan)',
        'style-color-indigo': 'var(--style-color-indigo)',
        'style-color-rose': 'var(--style-color-rose)',
        'style-color-rose-800': 'var(--style-color-rose-800)',
        'style-color-slate': 'var(--style-color-slate)',
        'style-color-gray': 'var(--style-color-gray)',
        'style-color-gray-800': 'var(--style-color-gray-800)',
        'style-color-blue': 'var(--style-color-blue)',
        'style-color-orange': 'var(--style-color-orange)',
      },
      fontSize: {
        '2xs': '0.625rem',
        xlp: '1.375rem',
        '4xlp': '2.5rem',
      },
      spacing: {
        4.5: '1.125rem',
        7.5: '1.875rem',
      },
      backgroundImage: {
        'dyf-bg': 'linear-gradient(180deg, #27273C 29.44%, #8B46FF 100%)',
        'xlines-bg':
          'linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 0px, transparent)',
        'ylines-bg':
          'linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 0px, transparent)',
        'role-card-bg':
          'linear-gradient(180deg, #27273C -33.33%, #8B46FF 100%)',
        'role-card-left-rect':
          'linear-gradient(152deg, #4C2889, #4C2889 32%, transparent 0%, transparent)',
        'role-card-right-rect':
          'linear-gradient(208deg, #6336AE, #6336AE 32%, transparent 0%, transparent)',
      },
      backgroundSize: {
        'xlines-size': '50px 100%',
        'ylines-size': '100% 50px',
        'half-width-size': '50% 100%',
      },
    },
  },
  plugins: [],
}
