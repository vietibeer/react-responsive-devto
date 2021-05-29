import './App.scss';
import Navigation from './components/Navigation';
import LeftSidebar from './components/LeftSidebar';
import Content from './components/Content';
import RightSidebar from './components/RightSidebar';
import {useState} from 'react';
// import { useRecoilValue } from 'recoil';
// import {newListState, inprogressListState, completedListState} from './recoil/selector';

// // NewList, InProgressList và CompletedList
// const NewList = () => {
//   const newList = useRecoilValue(newListState);
//   return (
//     <div className="col">
//       <h3>New</h3>
//       <ul>
//         {newList.map((item) => (
//           <li key={item.id}>
//             {item.content}
//             <button>In-Progress</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const InProgressList = () => {
//   const newList = useRecoilValue(inprogressListState);
//   return (
//     <div className="col">
//       <h3>In-Progress</h3>
//       <ul>
//         {newList.map((item) => (
//           <li key={item.id}>
//             {item.content}
//             <button>Completed</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// const CompletedList = () => {
//   const newList = useRecoilValue(completedListState);
//   return (
//     <div className="col">
//       <h3>Completed</h3>
//       <ul>
//         {newList.map((item) => (
//           <li key={item.id}>
//             {item.content}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

function App() {
  const [menu, setMenu] = useState(false);

  const toggle = () => setMenu(!menu);
  return (
    <div className="App">
      <Navigation openMenu={toggle}/>

      <main className="main-container">
        <LeftSidebar burgerMenu={menu} closeMenu={toggle} />
        <Content />
        <RightSidebar />
      </main>
    </div>
  );
}

export default App;
