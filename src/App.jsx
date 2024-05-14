import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <>
      <header className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="h-10" alt="Logo" />
          </a>
        </div>
        <nav>
          <ul className="flex space-x-4 text-white">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#  " className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow flex-col justify-center items-center">
        <section id="home" className="text-center py-20 wave-bg">
          <h1 className="text-5xl font-bold mb-4">Digital Bisnis</h1>
          <p className="text-xl mb-8">Ujian Tengah Semester</p>
        </section>
        <section id="about" className="text-center py-40 bg-white w-full">
          <h2 className="text-4xl font-bold mb-4">Anggota Kelompok</h2>
          <ul>
            <li>21.11.xxxx </li>
            <li>21.11.xxxx </li>
            <li>21.11.xxxx </li>
          </ul>
        </section>
      </main>
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2024 Digital Business</p>
      </footer>
    </>
  );
}

export default App;
