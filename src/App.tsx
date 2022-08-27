import React, { useState, useTransition } from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from './Contacts/Contacts';
import Contact from './Contacts/Contact';
import Child from './Others/Child';
import { PayPalButton } from 'react-paypal-button-v2';

type ContactType = {
  id?: string,
  name: string,
  email: string

}

function App() {
  const [isPending,startTransition] = useTransition();
  const [lists, setLists] = useState<ContactType []>([]);
  const [selected, setSelected] = useState<ContactType>({} as ContactType)
  const obj = {
    name: 'Test',
    email: 't@t.com'
  }

  let count = 0;
  console.log(isPending);
  

  const handleSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
      startTransition(()=>{
        console.log('hit');
        
        setSelected({
          ...selected, [e.target.name]: e.target.value
        })
      })
    

  }

  const handleClick = () => {
    count++;
    setLists([...lists, {...selected, id: `${selected?.name}-${count}`} ])
    setSelected({name:'', email:''})
  }

  const handleDelete = (email:String) => {
    setLists(lists.filter(list=>list.email !== email))

  }
  return (
    <div className="App">
      <input value={selected?.name} onChange={handleSelected} name="name"/>
      <input value={selected?.email} onChange={handleSelected} name="email"/>
      {isPending ? <p>Loading.....</p>:''}
      <button onClick={handleClick} > Click </button>
      <Contacts name={obj?.name} email={obj?.email}/>
      <Contacts name={obj?.name} />
      {
        lists?.map(list=><Contact selectedName={list?.name} selectedEmail={list?.email} handleDelete={handleDelete} />)
      }
      <Child name='App'>
        <h1>I am children of</h1>
      </Child>
      <div className="App">
      <PayPalButton
        shippingPreference="NO_SHIPPING"
        amount="0.01"
        options={{
          clientId:
            "AVkMvey7sHge6cgNc6XQBX94w6r9YijRegcRGGFYwdaA42wczk3Ip4ovSKojkYo5i4vzmDOv6l1mPlDt"
        }}
        onSuccess={(details:any, data: any) => {
          console.log("Details---------->", details);
          console.log("Data------------->", data);
        }}
      />
    </div>
    </div>
  );
}

export default App;
