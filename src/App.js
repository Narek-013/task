import ActionPlanner from './components/ActionPlanner/ActionPlanner';
import ModalResponse from './components/ModalResponse/ModalResponse';
import { useSelector } from 'react-redux';
import { selectModal } from './store/slices/modalSlice/modalSlice';
import './App.css';

function App() {
  const {isModal} = useSelector(selectModal)
  return (
    <div className={isModal ? "App" : ""}>
      <ActionPlanner/>
      {isModal && <ModalResponse/>}
    </div>
  );
}

export default App;
