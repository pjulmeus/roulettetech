import './App.css';
import Header from './Header';
import Navbar from './Navbar'
import CreateStudentForm from './CreateStudentForm';
import CreateTeacherForm from './CreateTeacherForm';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
        <Routes>
          <Route path="/studentsform" element={<CreateStudentForm />} />
          <Route path="/teachersform" element={<CreateTeacherForm />} />
        </Routes>
      <header className="App-header">
      </header>
    
   </div>  
  );
}

export default App;
