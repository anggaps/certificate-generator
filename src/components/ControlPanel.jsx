import { useState, useRef } from 'react'
import { Download, FileImage, FileText, Settings, Type, Palette, User, Calendar, Award } from 'lucide-react'
import './ControlPanel.css'

const ControlPanel = ({ certData, updateField, setCustomLogo, certificateRef }) => {
  const [activeTab, setActiveTab] = useState('content')
  const fileInputRef = useRef(null)

  const templates = [
    { id: 'classic', name: 'Classic', icon: '✦' },
    { id: 'modern', name: 'Modern', icon: '◆' },
    { id: 'elegant', name: 'Elegant', icon: '❦' },
    { id: 'minimal', name: 'Minimal', icon: '▪' }
  ]

  const fonts = [
    { value: "'Great Vibes', cursive", label: 'Great Vibes (Script)' },
    { value: "'Playfair Display', serif", label: 'Playfair Display' },
    { value: "'Cinzel', serif", label: 'Cinzel (Formal)' },
    { value: "'Lato', sans-serif", label: 'Lato (Simple)' }
  ]

  const handleLogoUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setCustomLogo(event.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const downloadPNG = async () => {
    if (!certificateRef.current) return
    
    const html2canvas = (await import('html2canvas')).default
    const canvas = await html2canvas(certificateRef.current, {
      scale: 2,
      backgroundColor: null,
      logging: false
    })
    
    const link = document.createElement('a')
    link.download = `sertifikat-${certData.recipientName.replace(/\s+/g, '_')}.png`
    link.href = canvas.toDataURL('image/png')
    link.click()
  }

  const downloadPDF = async () => {
    if (!certificateRef.current) return
    
    const html2canvas = (await import('html2canvas')).default
    const { jsPDF } = await import('jspdf')
    
    const canvas = await html2canvas(certificateRef.current, {
      scale: 2,
      backgroundColor: null,
      logging: false
    })
    
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [800, 566]
    })
    
    pdf.addImage(imgData, 'PNG', 0, 0, 800, 566)
    pdf.save(`sertifikat-${certData.recipientName.replace(/\s+/g, '_')}.pdf`)
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'content':
        return (
          <>
            <section className="control-section">
              <h3><Type size={16} /> Informasi Sertifikat</h3>
              <div className="form-group">
                <label>Nama Penerima</label>
                <input
                  type="text"
                  value={certData.recipientName}
                  onChange={(e) => updateField('recipientName', e.target.value)}
                  placeholder="Contoh: Budi Santoso"
                />
              </div>
              <div className="form-group">
                <label>Judul Sertifikat</label>
                <input
                  type="text"
                  value={certData.certTitle}
                  onChange={(e) => updateField('certTitle', e.target.value)}
                  placeholder="Contoh: Sertifikat Penghargaan"
                />
              </div>
              <div className="form-group">
                <label>Deskripsi</label>
                <textarea
                  value={certData.description}
                  onChange={(e) => updateField('description', e.target.value)}
                  rows="3"
                  placeholder="Diberikan kepada..."
                />
              </div>
              <div className="form-group">
                <label>Nama Event/Program</label>
                <input
                  type="text"
                  value={certData.eventName}
                  onChange={(e) => updateField('eventName', e.target.value)}
                  placeholder="Contoh: Workshop AI 2024"
                />
              </div>
              <div className="form-group">
                <label>Tanggal</label>
                <input
                  type="date"
                  value={certData.date}
                  onChange={(e) => updateField('date', e.target.value)}
                />
              </div>
            </section>

            <section className="control-section">
              <h3><User size={16} /> Tanda Tangan</h3>
              <div className="form-group">
                <label>Nama Penandatangan 1</label>
                <input
                  type="text"
                  value={certData.signer1Name}
                  onChange={(e) => updateField('signer1Name', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Jabatan 1</label>
                <input
                  type="text"
                  value={certData.signer1Title}
                  onChange={(e) => updateField('signer1Title', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Nama Penandatangan 2 (Opsional)</label>
                <input
                  type="text"
                  value={certData.signer2Name}
                  onChange={(e) => updateField('signer2Name', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Jabatan 2</label>
                <input
                  type="text"
                  value={certData.signer2Title}
                  onChange={(e) => updateField('signer2Title', e.target.value)}
                />
              </div>
            </section>
          </>
        )

      case 'design':
        return (
          <>
            <section className="control-section">
              <h3><Palette size={16} /> Kustomisasi Tampilan</h3>
              <div className="form-group">
                <label>Warna Utama</label>
                <div className="color-picker-wrapper">
                  <input
                    type="color"
                    value={certData.primaryColor}
                    onChange={(e) => updateField('primaryColor', e.target.value)}
                  />
                  <span className="color-value">{certData.primaryColor}</span>
                </div>
              </div>
              <div className="form-group">
                <label>Warna Sekunder</label>
                <div className="color-picker-wrapper">
                  <input
                    type="color"
                    value={certData.secondaryColor}
                    onChange={(e) => updateField('secondaryColor', e.target.value)}
                  />
                  <span className="color-value">{certData.secondaryColor}</span>
                </div>
              </div>
              <div className="form-group">
                <label>Font Nama</label>
                <select
                  value={certData.nameFont}
                  onChange={(e) => updateField('nameFont', e.target.value)}
                >
                  {fonts.map((font) => (
                    <option key={font.value} value={font.value}>{font.label}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Ukuran Font Nama: {certData.nameFontSize}px</label>
                <input
                  type="range"
                  min="32"
                  max="72"
                  value={certData.nameFontSize}
                  onChange={(e) => updateField('nameFontSize', parseInt(e.target.value))}
                />
              </div>
              <div className="form-group checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    checked={certData.showBorder}
                    onChange={(e) => updateField('showBorder', e.target.checked)}
                  />
                  Tampilkan Border
                </label>
              </div>
              <div className="form-group checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    checked={certData.showLogo}
                    onChange={(e) => updateField('showLogo', e.target.checked)}
                  />
                  Tampilkan Logo
                </label>
              </div>
            </section>

            <section className="control-section">
              <h3><Award size={16} /> Logo Kustom</h3>
              <div className="form-group">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleLogoUpload}
                  accept="image/*"
                  className="file-input"
                />
                <small>Upload logo Anda (PNG/JPG/SVG)</small>
              </div>
            </section>
          </>
        )

      default:
        return null
    }
  }

  return (
    <aside className="controls-panel">
      <h1>🏆 Certificate Generator</h1>

      <section className="control-section">
        <h3><Settings size={16} /> Template</h3>
        <div className="template-options">
          {templates.map((template) => (
            <button
              key={template.id}
              className={`template-btn ${certData.template === template.id ? 'active' : ''}`}
              onClick={() => updateField('template', template.id)}
            >
              <span className="template-icon">{template.icon}</span>
              <span className="template-name">{template.name}</span>
            </button>
          ))}
        </div>
      </section>

      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === 'content' ? 'active' : ''}`}
          onClick={() => setActiveTab('content')}
        >
          <Type size={14} /> Konten
        </button>
        <button
          className={`tab-btn ${activeTab === 'design' ? 'active' : ''}`}
          onClick={() => setActiveTab('design')}
        >
          <Palette size={14} /> Desain
        </button>
      </div>

      <div className="tab-content">
        {renderTabContent()}
      </div>

      <div className="export-buttons">
        <button onClick={downloadPNG} className="btn btn-primary">
          <FileImage size={18} /> Download PNG
        </button>
        <button onClick={downloadPDF} className="btn btn-secondary">
          <FileText size={18} /> Download PDF
        </button>
      </div>
    </aside>
  )
}

export default ControlPanel