/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgtColor': '#749B3F',
        'bgHColor': '#212337',
        'bgPColor': '#4A4A52',
        'bgBColor': '#FF6A1A',
        'btColor': '#A6A6A6',
        'LogColor': '#E5E5E5',
        
      },
      fontFamily: {
        'rub': ["Rubik"], 
        'qus': ["Questrial"], 
      },  
        backgroundImage: {
          'bannerImg': "url('../src/assets/Bg.png')",
          'NavImg': "url('../src/assets/Header.png')",
          'Footer': "url('../src/assets/Footer Section.png')",
          
        },
        maxWidth: {
          'laptopContainer': '978px',
          'tapletContainer': '748px',
          'androidContainer': '556px',
          'mobileContainer': '',
        },
        Width:{
          'LogoW': '30%',
          'MenuW': '70%',
          'CatW': '20%',
          'SearchW': '70%',
          'UserW': '20%',
          
        },
    
    screens: {
      'laptop': {'min': '992px', 'max': '1199.98px',},
      // => @media (min-width: 992px) { ... }

      'taplet': {'min': '768px', 'max': '991.98px',},
      // => @media (min-width: 768px) { ... }

      'android': {'min': '576px', 'max': '767.98px',},
      // => @media (min-width: 576px) { ... }

      'mobile': {'min': '320px', 'max': '575.98px',},
      // => @media (min-width: 320px) { ... }
    },
    }
  },
  plugins: [
    require('daisyui'),
  ],
}



