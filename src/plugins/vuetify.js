// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
// import store from '@/store'

export default createVuetify(
  {
    theme: {
      defaultTheme: 'dark' // Set to true for dark mode, false for light mode
      // themes: {
      //   light: {
      //     primary: '#2196F3', // Blue
      //     secondary: '#FFC107', // Amber
      //     accent: '#9C27B0', // Purple
      //     error: '#FF5252', // Red
      //     warning: '#FFC107', // Amber
      //     info: '#00BCD4', // Cyan
      //     success: '#4CAF50', // Green
      //   },
      //   dark: {
      //     primary: '#1976D2',
      //     secondary: '#FFA000',
      //     accent: '#7B1FA2',
      //     error: '#FF5252',
      //     warning: '#FFC107',
      //     info: '#00BCD4',
      //     success: '#4CAF50',
      //   },
      // },
    },
  }
  
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
)
