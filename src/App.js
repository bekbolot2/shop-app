import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="wrapper clear">
      <header className='d-flex justify-between align-center p-40'>
        <div className='d-flex align-center'>
          <img width={40} height={40} src='/img/image 4.svg'alt='img'/>
          <div>
            <h3 className='text-uppercase'>React Sneakers</h3>
            <p className='opacity-5'>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className='d-flex'>
          <li className='mr-30'>
          <img width={18} height={18} src='/img/Vector.svg'alt='img'/>
            <span>1205 руб.</span>
          </li>
          <li>
          <img width={18} height={18} src='/img/Union.svg'alt='img'/>
          </li>
        </ul>
      </header>
      <div className='content p-40'>
        <h1 className='mb-40'>Все кросовки</h1>

      <div className='d-flex'>
      <div className='card'>
          <img width={133} height={112} src='/img/1.jpg.jpg' alt='img'/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
           <div className='d-flex flex-column'>
            <span>Цена:</span>
            <b>12 999 руб.</b>
           </div>
           <button className='button'>
            <img src='/img/Group 91.svg' alt='group'/>
           </button>
          </div>
        </div>
        <div className='card'>
          <img width={133} height={112} src='/img/image 5.jpg' alt='img'/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
           <div className='d-flex flex-column'>
            <span>Цена:</span>
            <b>12 999 руб.</b>
           </div>
           <button className='button'>
            <img src='/img/Group 91.svg' alt='group'/>
           </button>
          </div>
        </div>
        <div className='card'>
          <img width={133} height={112} src='/img/1.jpg.jpg' alt='img'/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
           <div className='d-flex flex-column'>
            <span>Цена:</span>
            <b>12 999 руб.</b>
           </div>
           <button className='button'>
            <img src='/img/Group 91.svg' alt='group'/>
           </button>
          </div>
        </div>
        <div className='card'>
          <img width={133} height={112} src='/img/1.jpg.jpg' alt='img'/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
           <div className='d-flex flex-column'>
            <span>Цена:</span>
            <b>12 999 руб.</b>
           </div>
           <button className='button'>
            <img src='/img/Group 91.svg' alt='group'/>
           </button>
          </div>
        </div>
        
       </div>
      </div>
    </div>
  );
}

export default App;
