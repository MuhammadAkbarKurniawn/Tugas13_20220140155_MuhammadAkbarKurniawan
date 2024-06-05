  import React from 'react';
  import logo from './logo.svg';
  import './App.css'; // Import your custom CSS for styling
  import reactImage from './images/react.png';
  import nodeImage from './images/node.png';
  import nodereactImage from './images/nodereact.png'

  function App() {
    return (
      <div className="App">
        <header className="App-header d-flex align-items-center justify-content-between">
          {/* Logo and Title */}
          <div className="d-flex align-items-center">
            <img src={logo} className="App-logo mr-2" alt="logo" />
            <h1 className="App-title">My React App</h1>
          </div>

          {/* Learn React Link */}
          <a
            className="btn btn-primary"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        {/* Main Content Area */}
        <div className="main-content">
          <p>
          React adalah pustaka JavaScript yang digunakan untuk membangun antarmuka pengguna (UI). React dibuat oleh Facebook dan sekarang dikelola oleh komunitas open source. Fokus utama React adalah membangun UI yang efisien dan dapat dikelola dengan baik melalui konsep komponen
          </p>
          <p>
          Node.js adalah runtime JavaScript yang dibangun di atas mesin V8 milik Chrome. Node.js memungkinkan Anda untuk menjalankan JavaScript di server-side. Ini berarti Anda bisa menggunakan JavaScript untuk pengembangan back-end, yang sebelumnya hanya bisa dilakukan dengan bahasa seperti PHP, Ruby, atau Python.
          </p>
        </div>
        {/* Content Section 1 */}
        <div className="section">
            <h2>Section 1: Introduction to React</h2>
            <p>
              React memungkinkan Anda untuk membangun antarmuka pengguna yang kompleks dari potongan kecil dan terisolasi yang disebut "komponen". Ini membuat kode Anda lebih mudah untuk dikelola dan di-debug.
            </p>
            <img src={reactImage} alt="React" />
          </div>

          {/* Content Section 2 */}
          <div className="section">
            <h2>Section 2: Introduction to Node.js</h2>
            <p>
              Node.js menggunakan model I/O non-blocking dan berbasis event, yang membuatnya sangat efisien dan cocok untuk aplikasi yang membutuhkan skala besar dan koneksi simultan.
            </p>
            <img src={nodeImage} alt="Node." />
          </div>

          {/* Content Section 3 */}
          <div className="section">
            <h2>Section 3: Combining React and Node.js</h2>
            <p>
              Dengan menggunakan React di front-end dan Node.js di back-end, Anda bisa membangun aplikasi full-stack dengan JavaScript di kedua sisi, yang dapat meningkatkan efisiensi dan konsistensi dalam pengembangan aplikasi.
            </p>
            <img src={nodereactImage} alt="nodereact"/>
          </div>

          {/* Footer */}
          <footer className="App-footer">
           <p>Copyright © 2024 My React App. All rights reserved.<br/>Powered By Muhammad Akbar Kurniawan</p>
          </footer>
      </div>
    );
  }

  export default App;
