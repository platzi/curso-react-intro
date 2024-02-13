import imageProfile from '../assets/images/profile.png';
import taskIcon from '../assets/icons/tasks.svg';
import { ItemsAside } from './ItemsAside';


const defaultTodos = [
  {text: 'Aprender React', completed: false},
  {text: 'Aprender Svelte', completed: true},
  {text: 'Aprender API notion', completed: false},
  {text: 'Aprender Backend', completed: true},
]

function App() {
  return (
    <div className="App">
      <section >
        <aside >
          <div className="profile-content" >
            <img src={imageProfile} alt='Profile'/>
            <h2 >Victor Arroyave</h2>
            <p >WorkSpace</p>
          </div>
          <div className='items-list'>
            <ul>
              <ItemsAside icon={taskIcon} title={'Tasks'}/>
            </ul>
          </div>
        </aside>
        <main >
          <header >
            
          </header>
        </main>
      </section>
      <section >
        <section ></section>
        <section ></section>
      </section>
    </div>
  );
}

export default App;
