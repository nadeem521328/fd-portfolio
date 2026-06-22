import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function detectResumePlugin() {
  return {
    name: 'detect-resume',
    buildStart() {
      const publicDir = path.resolve(__dirname, 'public')
      let pdfFile = ''
      
      if (fs.existsSync(publicDir)) {
        const files = fs.readdirSync(publicDir)
        pdfFile = files.find(file => file.endsWith('.pdf')) || ''
      }
      
      const resumeData = {
        filename: pdfFile
      }
      
      const outputPath = path.resolve(__dirname, 'src/data/resume.json')
      
      // Ensure directory exists
      const dir = path.dirname(outputPath)
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
      }
      
      fs.writeFileSync(outputPath, JSON.stringify(resumeData, null, 2))
      console.log(`[detect-resume] Auto-detected PDF: ${pdfFile || 'None'}`)
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), detectResumePlugin()],
})
