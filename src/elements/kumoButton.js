import React from 'react'
import { withMedia } from 'react-media-query-hoc';
import { fc } from '../app/fontController';

const KumoButton = props => {
  const { type, text, onClick, className, style, nominwidth, icon, media, iconPlace } = props
  const defaultStyle = { background: 'linear-gradient(to left, #0f0c29 0%,#24243e 100%)', padding: 2, height: '40px' }
  const userStyle = style === undefined ? {} : style

  return (
    <div style={{ minwidth: nominwidth ? null : 200 }}>
      <button
        type={type === undefined ? 'button' : type}
        onClick={onClick}
        className={`btn btn-block ${className} text-center`}
        style={{ ...defaultStyle, ...userStyle }}
      >
        {
          iconPlace !== undefined || iconPlace
            ? <div className='d-flex justify-content-center' >
              <span>{icon}</span>

              <span style={{ color: '#fff', fontFamily: 'Nunito, sans-serif', fontSize: fc(media, 16) }}>{text}</span>
            </div>
            : <div>
              <span style={{ color: '#fff', fontFamily: 'Nunito, sans-serif', fontSize: fc(media, 16), }}>{text}</span>
              <span>{icon}</span>
            </div>

        }
      </button>
    </div>
  )

}
export default withMedia(KumoButton);