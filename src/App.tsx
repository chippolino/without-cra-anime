import { Header } from './components/Header/Header';
import { useRef, useState } from 'react';
import cn from 'classnames';

export function App() {
  const [isActive, setIsActive] = useState(false);
  const timerRef = useRef<any>(null);
  const sendMessage = (e: any) => {
    e.preventDefault();
    timerRef.current = setTimeout(() => setIsActive(false), 1000);
  };

  return (
    <div className='App'>
      <Header />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button
        onClick={(e) => {
          navigator.clipboard.writeText('Moscow').then(function () {
            setIsActive(true);
            sendMessage(e);
          });
        }}
      >
        test
      </button>
    </div>
  );
}
