module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",  // pages 폴더 내의 모든 파일을 포함
    "./components/**/*.{js,ts,jsx,tsx}", // components 폴더 내의 모든 파일을 포함
  ],
  theme: {
    extend: {
      screens: {
        's': '480px',    // 's'는 480px 이상에서 적용
        'm': '768px',    // 'm'은 768px 이상에서 적용
        'l': '1440px',   // 'l'은 1440px 이상에서 적용
      },
      fontFamily: {
        'custom': ['Pretendard-Regular'],
      },
      fontWeight: {
        '100': 100,  // 100번 weight 추가
        '200': 200,  // 200번 weight 추가
        '300': 300,  // 300번 weight 추가
        '400': 400,  // 400번 weight 추가
        '500': 500,  // 500번 weight 추가
        '600': 600,  // 600번 weight 추가
        '700': 700,  // 700번 weight 추가
        '800': 800,  // 800번 weight 추가
        '900': 900,  // 900번 weight 추가
      },
      fontSize: {
        '13': '0.8125rem',  // 13px -> 0.8125rem
        '14': '0.875rem',   // 14px -> 0.875rem
        '16': '1rem',       // 16px -> 1rem
        '18': '1.125rem',   // 18px -> 1.125rem
        '24': '1.5rem',     // 24px -> 1.5rem
        '28': '1.75rem',    // 28px -> 1.75rem
      },
      colors: {
        // Primary 색상 (1~10 범위 사용)
        primary: {
          1: '#EAEEFD',
          '2': '#CED5FB',
          '3': '#A6B4F8',
          '4': '#7D91F4',
          '5': '#5670F1',
          '6': '#3150EE',
          '7': '#2A44CA',
          '8': '#2339A9',
          '9': '#1C2E88',
          '10': '#16246B',
        },

        // GrayScale 색상 (1~10 범위 사용)
        grayscale: {
          '1': '#FFFFFF',
          '2': '#FCFCFC',
          '3': '#F5F5F5',
          '4': '#F0F0F0',
          '5': '#D9D9D9',
          '6': '#BFBFBF',
          '7': '#8C8C8C',
          '8': '#595959',
          '9': '#454545',
          '10': '#262626',
          '11': '#1F1F1F',
          '12': '#141414',
          '13': '#000000',
        },
      },
      borderRadius: {
        'xs': '0.25rem',   // 4px → 0.25rem
        'sm': '0.375rem',  // 6px → 0.375rem
        'md': '0.5rem',    // 8px → 0.5rem
        'lg': '0.75rem',   // 12px → 0.75rem
      },
      spacing: {
        '1': '0.25rem',   // 4px → 0.25rem
        '2': '0.375rem',  // 6px → 0.375rem
        '3': '0.5rem',    // 8px → 0.5rem
        '4': '0.625rem',  // 10px → 0.625rem
        '5': '0.75rem',   // 12px → 0.75rem
      },
    },
  },
  plugins: [],
};
