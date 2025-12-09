import React from 'react';

interface DetailBoxProps {
  label: string;
  value: string | number;
}

export const DetailBox: React.FC<DetailBoxProps> = ({ label, value }) => (
  <div
    style={{
      background: '#f8f9fa',
      padding: '15px',
      borderRadius: '12px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid #eee',
    }}
  >
    <span
      style={{
        fontSize: '11px',
        color: '#888',
        textTransform: 'uppercase',
        marginBottom: '4px',
        letterSpacing: '0.5px',
      }}
    >
      {label}
    </span>
    <span
      style={{
        fontWeight: 'bold',
        color: '#333',
        fontSize: '15px',
      }}
    >
      {value}
    </span>
  </div>
);
