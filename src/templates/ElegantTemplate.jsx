import './ElegantTemplate.css'

const ElegantTemplate = ({ certData, customLogo }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('id-ID', options)
  }

  return (
    <div 
      className="template elegant"
      style={{
        '--primary-color': certData.primaryColor,
        '--secondary-color': certData.secondaryColor,
        '--name-font': certData.nameFont,
        '--name-size': `${certData.nameFontSize}px`
      }}
    >
      <div className="elegant-frame" style={{ display: certData.showBorder ? 'block' : 'none' }}>
        <div className="elegant-corner top-left">❦</div>
        <div className="elegant-corner top-right">❦</div>
        <div className="elegant-corner bottom-left">❦</div>
        <div className="elegant-corner bottom-right">❦</div>
      </div>
      
      <div className="elegant-content">
        <div className="elegant-header">
          <div className="elegant-ornament">❧</div>
          <h2 className="elegant-title">{certData.certTitle}</h2>
          <div className="elegant-ornament">❧</div>
        </div>
        
        <p className="elegant-prefix">Dengan hormat diberikan kepada</p>
        <h1 className="elegant-name">{certData.recipientName}</h1>
        <div className="elegant-divider">
          <span>◆</span>
          <div className="elegant-line"></div>
          <span>◆</span>
        </div>
        <p className="elegant-description">{certData.description}</p>
        <p className="elegant-event">{certData.eventName}</p>
        
        <div className="elegant-footer">
          <div className="elegant-signature">
            <div className="elegant-sign-line"></div>
            <p className="elegant-sign-name">{certData.signer1Name}</p>
            <p className="elegant-sign-title">{certData.signer1Title}</p>
          </div>
          <div className="elegant-seal">
            <div className="elegant-seal-ring">
              <span>✓</span>
            </div>
          </div>
          {certData.signer2Name && (
            <div className="elegant-signature">
              <div className="elegant-sign-line"></div>
              <p className="elegant-sign-name">{certData.signer2Name}</p>
              <p className="elegant-sign-title">{certData.signer2Title}</p>
            </div>
          )}
        </div>
        <div className="elegant-date">{formatDate(certData.date)}</div>
      </div>
    </div>
  )
}

export default ElegantTemplate