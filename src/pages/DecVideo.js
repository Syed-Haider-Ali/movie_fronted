import { useState, useEffect } from 'react';
    import { decrypt } from 'crypto-js';

const DecVideo = () => {
    
    
      const [videoUrl, setVideoUrl] = useState('');
    
      useEffect(() => {
        const fetchVideo = async () => {
          const response = await fetch('/path/to/encrypted.mp4');
          const encryptedVideo = await response.arrayBuffer();
    
          const key = '...'; // Get the key from the server-side
          const iv = '...'; // Get the IV from the server-side
    
          const decryptedVideo = decrypt(
            { ciphertext: new Uint8Array(encryptedVideo) },
            key,
            { iv: iv }
          );
    
          const url = URL.createObjectURL(
            new Blob([decryptedVideo.toString(CryptoJS.enc.Latin1)], { type: 'video/mp4' })
          );
    
          setVideoUrl(url);
        };
    
        fetchVideo();
      }, []);
    
      return (
        <video src={videoUrl} controls />
      );
    
}

export default DecVideo