import { useRef, useState } from 'react';
import './App.css';
import { uploadFile } from './services/api';

function App() {
  const fileInputRef = useRef();
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onUploadClick = async () => {
    if (file) {
      const data = new FormData();
      data.append('name', file.name);
      data.append('file', file);

      try {
        let response = await uploadFile(data);
        setResult(response.path);
      } catch (error) {
        // Handle error
        console.error('Error uploading file:', error);
      }
    }
  };

  const logo =
    'https://img.freepik.com/free-vector/cloud-network-system-background-vector-social-media-banner_53876-111845.jpg?w=740&t=st=1704007560~exp=1704008160~hmac=1f19e1187bd937b329294fe0512f9d6d64e5a6955b7ba836299ee267a12771c5';

  return (
    <div className="container">
      <div className="img">
        <img src={logo} alt="banner" />
      </div>

      <div className="wrapper">
        <h2 style={{ marginTop: 42 }}>📂 Simple File Sharing </h2>
        <p style={{ marginTop: 17, fontSize: 20 }}>Upload and share the download link</p>

        <input
          type="file"
          ref={fileInputRef}
          onChange={onFileChange}
          style={{ marginTop: 35, alignItems: 'center' }}
        />

        <button onClick={onUploadClick} style={{ marginTop: 20 }}>
          Upload
        </button>
        <br />
        <a href={result} target="_blank" rel="noreferrer">
          {result}
        </a>
      </div>
    </div>
  );
}

export default App;
