import './App.css';
import Sidebar from './components/sidebar/sidebar'
import Topbar from './components/topbar/topbar'
import DiagTool from './components/diag-tool/diag'
function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <Sidebar></Sidebar>
      <DiagTool></DiagTool>
    </div>
  );
}

export default App;
