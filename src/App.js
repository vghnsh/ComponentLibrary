import "./styles.css";
import Button from './Components/Button'

export default function App() {
  return (
    <div className="App">

      <Button text='Default'></Button>
      <pre>{'<Button variant="default">'}</pre>
      <hr/>

      <Button text='Outline' variant='outline'></Button>
      <pre>{'<Button variant="Outline">'}</pre>
      <hr/>
      
      <Button text='text' variant='text'></Button>
      <pre>{'<Button variant="text">'}</pre>
      <hr/>
      
      <Button text='Default' disableShadow></Button>
      <pre>{'<Button disableShadow>'}</pre>
      <hr/>

      <section className='wrapper'>
        <span>
          <Button text='Disabled' disabled ></Button>
          <pre>{'<Button disabled>'}</pre>
        </span>
        <span>
          <Button disabled text='Disabled' variant='text' ></Button>
          <pre>{'<Button variant="text" disabled>'}</pre>
        </span>
      </section> 
      <hr/>
      
      <section className='wrapper'>
        <span>
          <Button text='Small' size='sm'></Button>
          <pre>{'<Button size="sm">'}</pre>
        </span>
        <span>
          <Button text='Medium' size='md'></Button>
          <pre>{'<Button size="md">'}</pre>
        </span>
        <span>
          <Button text='Large' size='lg'></Button>
          <pre>{'<Button size="lg">'}</pre>
        </span>
      </section>
      <hr/>

      <section className='wrapper'>
        <span>
          <Button text='Default' ></Button>
          <pre>{'<Button color="default">'}</pre>
        </span>
        <span>
          <Button text='Primary' color='primary'></Button>
          <pre>{"<Button color='primary'>"}</pre>
        </span>
        <span>
          <Button text='Secondary' color='secondary'></Button>
          <pre>{'<Button color="secondary">'}</pre>
        </span>
        <span>
          <Button text='Danger' color='danger'></Button>
          <pre>{'<Button color="secondary">'}</pre>
        </span>
      </section>
     
    </div>
  );
}

