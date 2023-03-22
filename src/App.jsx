import icon1 from './img/icon1.png';
import icon2 from './img/icon2.png';
import icon3 from './img/icon3.png';
import icon4 from './img/icon4.png';
import menuTop from './img/menu-top.svg'
import ironhackLogo from './img/ironhack-logo.svg'
import reactLogo from './img/react-logo.svg'
import './App.css';


function App() {
  return (
  <section>
    <section className='rectangleHeader'>
      <nav className='topMenu'>
        <div>
          <img src={ironhackLogo} alt="no-logo" />
        </div>
        <div>
          <img src={menuTop} alt="svg1TopMenu" />
        </div>
      </nav> 

      <div className='belowMenu'>
        <article className='firstPart'>
          <h1>Say Hello to ReactJS</h1>
          <p>You will learn how to use the most popular frontend library and become
          a super ninja developer.
          </p>
          <button>
            Awesome!
          </button>
        </article>
        <aside>
          <img src={reactLogo} alt="nologo" />
        </aside>
      </div>
    </section>

    <section className='sectionTwo'>
      <article>
        <img src={icon1} alt="" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs</p>
      </article>
      <article>
        <img src={icon2} alt="" />
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
      </article>
      <article>
        <img src={icon3} alt="" />
        <h3>Single Way</h3>
        <p>A set of immutable values are passed to the component's.</p>
      </article>
      <article>
        <img src={icon4} alt="" />
        <h3>JSX</h3>
        <p>Statically-typed designed to run on modern browsers.</p>
      </article>
    </section>
  </section>
  );
}

export default App;
