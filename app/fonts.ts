import localFont from 'next/font/local'

export const bounded = localFont({
  src: [
    {
      path: '../Bounded/Bounded-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../Bounded/Bounded-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
  ],
  variable: '--font-bounded',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
})

