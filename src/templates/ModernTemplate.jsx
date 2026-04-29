import './ModernTemplate.css'

const ModernTemplate = ({ certData, customLogo }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('id-ID', options)
  }

  return (
    <div 
      className="template modern"
      style={{
        '--primary-color': certData.primaryColor,
        '--secondary-color': certData.secondaryColor,
        '--name-font': certData.nameFont,
        '--name-size': `${certData.nameFontSize}px`
      }}
    >
      <div className="modern-accent-top"></div>
      <div className="modern-accent-bottom"></div>
      <div className="cert-content">
        <div className="modern-header">
          <div className="modern-logo" style={{ display: certData.showLogo ? 'block' : 'none' }}>
            {customLogo ? <img src={customLogo} alt="Logo" className="custom-logo" /> : '🏛️'}
          </div>
          <div className="modern-badge">SERTIFIKAT</div>
        </div>

        <div className="modern-body">
          <p className="modern-prefix">This certificate is proudly presented to</p>
          <h1 className="modern-name">{certData.recipientName}</h1>
          <div className="modern-divider">
            <span></span>
            <span>★</span>
            <span></span>
          </div>
          <p className="modern-description">{certData.description}</p>
          <p className="modern-event">{certData.eventName}</p>
        </div>

        <div className="modern-footer">
          <div className="modern-signature">
            <div className="modern-line"></div>
            <p className="modern-sign-name">{certData.signer1Name}</p>
            <p className="modern-sign-title">{certData.signer1Title}</p>
          </div>
          <div className="modern-seal">
            <div className="modern-seal-inner">
              <span>✓</span>
              <small>VERIFIED</small>
            </div>
          </div>
          {certData.signer2Name && (
            <div className="modern-signature">
              <div className="modern-line"></div>
              <p className="modern-sign-name">{certData.signer2Name}</p>
              <p className="modern-sign-title">{certData.signer2Title}</p>
            </div>
          )}
        </div>
        <div className="modern-date">{formatDate(certData.date)}</div>
      </div>
    </div>
  )
}

export default ModernTemplate