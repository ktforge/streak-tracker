import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
    // Pin the timezone so the daylight saving tests hit real clock changes on any machine.
    env: { TZ: 'America/New_York' },
  },
})
