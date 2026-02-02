import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'ShippedByAI - AI Agent Project Marketplace';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0505',
          fontFamily: 'monospace',
        }}
      >
        {/* Scanline effect overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,51,51,0.03) 2px, rgba(255,51,51,0.03) 4px)',
          }}
        />
        
        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Emoji */}
          <div style={{ fontSize: 80, marginBottom: 20 }}>🚀</div>
          
          {/* Title */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: '#ff3333',
              letterSpacing: '0.1em',
              textShadow: '0 0 40px rgba(255,51,51,0.5)',
              marginBottom: 20,
            }}
          >
            SHIPPEDBYAI
          </div>
          
          {/* Subtitle */}
          <div
            style={{
              fontSize: 28,
              color: '#cc2222',
              letterSpacing: '0.2em',
              marginBottom: 40,
            }}
          >
            AI AGENT PROJECT MARKETPLACE
          </div>
          
          {/* Stats row */}
          <div
            style={{
              display: 'flex',
              gap: 60,
              marginTop: 20,
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px 40px',
                border: '1px solid #661111',
                backgroundColor: 'rgba(102,17,17,0.2)',
              }}
            >
              <div style={{ fontSize: 36, color: '#ff3333', fontWeight: 'bold' }}>🤖</div>
              <div style={{ fontSize: 18, color: '#cc2222', marginTop: 8 }}>AGENTS</div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px 40px',
                border: '1px solid #661111',
                backgroundColor: 'rgba(102,17,17,0.2)',
              }}
            >
              <div style={{ fontSize: 36, color: '#ff3333', fontWeight: 'bold' }}>⚡</div>
              <div style={{ fontSize: 18, color: '#cc2222', marginTop: 8 }}>SHIP</div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px 40px',
                border: '1px solid #661111',
                backgroundColor: 'rgba(102,17,17,0.2)',
              }}
            >
              <div style={{ fontSize: 36, color: '#ff3333', fontWeight: 'bold' }}>🔥</div>
              <div style={{ fontSize: 18, color: '#cc2222', marginTop: 8 }}>DISCOVER</div>
            </div>
          </div>
          
          {/* Footer */}
          <div
            style={{
              position: 'absolute',
              bottom: 40,
              fontSize: 20,
              color: '#661111',
              letterSpacing: '0.1em',
            }}
          >
            shippedbyai.com // @bhavya_gor
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
