import React from 'react';
import { useState, useReducer, useEffect } from 'react';
import moment from 'moment';
import { FC, ReactElement } from 'react';

interface FormatDateProps {
  date: Date;
}
export function formatDate() {
  const dt = moment().format('MMMM Do YYYY, h:mm:ss a');
  console.log('in formatDate ' + dt);
  return <p className="text-lg font-bold m-5"> {dt}</p>;
}
interface ShowTextProps {
  msg: string;
}
export function showText(imsg: ShowTextProps) {
  console.log('in ShowText ' + imsg.msg);
  return <p className="text-lg font-bold m-5"> {imsg.msg}</p>;
}
export function mydemo(): JSX.Element | null {
  console.log('this is an exportable function in TypeScript. !!');
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('You clicked ' + count + ' times wow');
  }, []);

  return (
    <div>
      <p className="text-lg font-bold m-5">You clicked {count} times again</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(count + 1)}
      >
        Click me again
      </button>
    </div>
  );
}
export function myhooks(): JSX.Element | null {
  const [count, setCount] = useState(0);
  let myObj = { msg: 'Current Message from hooks' };

  return (
    <div>
      {showText(myObj)}
      {formatDate()}
      <p className="text-lg font-bold m-15"> testing </p>

      <p className="text-lg font-bold m-5">You clicked {count} times first</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </div>
  );
}

/*
  function myhooks(): JSX.Element | null {

    const [count, setCount] = useState(0);
    let myObj = { msg: 'Current Message from hooks' };

    return (
      <div>
        {showText(myObj)}
        {formatDate()}
        <p className="text-lg font-bold m-15"> testing </p>

        <p className="text-lg font-bold m-5">You clicked {count} times first</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount(count + 1)}
        >
          Click me
        </button>
      </div>
    );
  };

  

   //if (show) {
  console.log('in ShowText ' + msg);
  return <p style={{ color: 'blue' }}>{msg}</p>;
  //}
  //return null;
  //const App = ({ message }: AppProps): JSX.Element => <div>{message}</div>;

interface FooProp {
  name: string;
  X: number;
  Y: number;
}
declare function AnotherComponent(prop: { name: string });
function ComponentFoo(prop: FooProp) {
  return <AnotherComponent name={prop.name} />;
}
const Button = (prop: { value: string }, context: { color: string }) => (
  <button />
);

test
<p style={{ color: 'blue' }}>You clicked {count} times again</p>
      <button onClick={() => setCount(count + 1)}>Click me again</button>

      const MyComponent: FC = () => { <>...</> }
*/
