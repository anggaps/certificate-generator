import { useState, useRef } from 'react'
import CertificatePreview from './components/CertificatePreview'
import ControlPanel from './components/ControlPanel'
import './App.css'

function App() {
  const [certData, setCertData] = useState({
    recipientName: 'Budi Santoso',
    certTitle: 'Sertifikat Penghargaan',
    description: 'Diberikan kepada atas dedikasi dan kontribusi luar biasa dalam bidang teknologi informasi.',
    eventName: 'Workshop AI 2024',
    date: '2024-12-20',
    signer1Name: 'Dr. Ahmad Wijaya',
    signer1Title: 'Direktur Utama',
    signer2Name: 'Prof. Siti Rahayu',
    signer2Title: 'Kepala Divisi IT',
    primaryColor: '#1a365d',
    secondaryColor: '#d69e2e',
    nameFont: "'Great Vibes', cursive",
    nameFontSize: 48,
    showBorder: true,
    showLogo: true,
    template: 'classic'
  })

  const [customLogo, setCustomLogo] = useState(null)
  const certificateRef = useRef(null)

  const updateField = (field, value) => {
    setCertData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="app-container">
      <ControlPanel 
        certData={certData} 
        updateField={updateField}
        setCustomLogo={setCustomLogo}
        certificateRef={certificateRef}
      />
      <main className="preview-area">
        <CertificatePreview 
          certData={certData} 
          customLogo={customLogo}
          ref={certificateRef}
        />
      </main>
    </div>
  )
}

export default App