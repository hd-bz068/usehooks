# a collection of some of the best hooks for react!

---
these are some custom hooks to help you not repeat yourself again, again and maybe again, so help yourself.

---
## hooks
* [useFetch](#useFetch)
* [useInput](#useInput)
* [useForm](#useForm)
* [useToggle](#useToggle)
* [useLocalStorage](#useLocalStorage)
* [useSessionStorage](#useSessionStorage)
* [useIndexedDB](#useIndexedDB)
* [useDarkMode](#useDarkMode)
* [useStack](#useStack)
* [useQueue](#useQueue)
* [useArray](#useArray)
* [useGeoLocation](#useGeoLocation)
* [useTimer](#useTimer)
* [useCountDown](#useCountDown)
* [useIsMounted](#useIsMounted)
* [useIsLoading](#useIsLoading)
* [useDocumentTitle](#useDocumentTitle)
* [useScript](#useScript)
* [useCss](#useCss)
* [useKeyPressed](#useKeyPressed)
* [useWindowSize](#useWindowSize)
* [useOnHover](#useOnHover)
* [usePosition](#usePosition)
* [useSpeak](#useSpeak)
* [useSpeechRecognition](#useSpeechRecognition)
* [useCopyToClipboard](#useCopyToClipboard)

# usage

```
npm i custom-hooks-react
```
----
## useFetch

useFetch uses the fetch api to make the process much easier and simpler when making api callls. 
useFetch returns, 3 attributes, **data , error, loading**

#### get request
for get request just pass one param; the **URL**
```
import React from 'react'

import {useFetch} from 'custom-hooks-react'

export default function App() {
    const URL = 'https://dog.ceo/api/breeds/image/random'
    const [data, error, loading] = useFetch(URL)
    console.log(data, error, loading)
    return (
        <div >
         
        </div>
    )
}

```

### Parameters
1. URL - string
#### post, delete, update request
for post request pass in two params; **URL** & **options**

```
import React from 'react'
import './App.css'


import {useFetch} from 'custom-hooks-react'
export default function App() {
    const [data, error, loading] = useFetch(URL, { answer: 42 })
    console.log(data, error, loading)
    return (
        <div >
         
        </div>
    )
}

```
### Parameters
1. URL - string
2. options - object
---

## useInput
no need to repeat youself updating the state why not let this package handle it for you.

useInput return 2 attributes, **value & bind function**. value holds the value of the state and bind hold the value and onChange function.

#### method 1
pass in the bind object
```
import React from 'react'
import './App.css'

import {useInput} from 'custom-hooks-react'

export default function App() {
    const [firstName, firstNameBind] = useInput('F Name')
    const [lastName, lastNameBind] = useInput('L Name')

    return (
        <div >
            <input {...firstNameBind} type="text" />
            <input {...lastNameBind} type="text" />
        </div>
    )
}

```
#### method 2
just the normal way but still better than the old way.

```
import React from 'react'
import './App.css'

import {useInput} from 'custom-hooks-react'

export default function App() {
    const [firstName, firstNameBind] = useInput('F Name')
    const [lastName, lastNameBind] = useInput('L Name')

    return (
        <div >
            <input value={firstName} onChange={firstNameBind.onChange} type="text" />
            <input value={lastName} onChange={lastNameBind.onChange} type="text" />
        </div>
    )
}

```
### Parameters
1. value - string || number

---
## useForm
useForm hook allows you to keep a record of input values from a form, you dont need to have a state for each input just this one hook is enough.

```
import React from "react";
import "./App.css";

import { useForm } from "custom-hooks-react";

export default function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const [values, setValues] = useForm();
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={values.firstName || ""}
          onChange={setValues}
          name="firstName"
          type="text"
        />

        <input
          value={values.lastName || ""}
          onChange={setValues}
          name="lastName"
          type="text"
        />

        <input
          value={values.age || ""}
          onChange={setValues}
          name="age"
          type="text"
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
}
```

this hook **values** will return object with all input **names** and input values.

```
{firstName: "first", lastName: "last", age: "15"}
```
### EVERY INPUT MUST HAVE **name** ATTRIBUTE.

---

## useToggle
simple toggle hook, it will return true or false based on the set function. This hooks takes in a param; **active**. Active is **Boolean**.
If no params are passed, then on default it is **false**

```
import React from 'react'
import './App.css'

import {useToggle} from 'custom-hooks-react'

export default function App() {
    const [isOn, setIsOn] = useToggle()
    return (
        <div>
           <button onClick={setIsOn}>{`i am ${isOn}`}</button>
        </div>
    )
}

```
### Parameters
1. condition - boolean
----
## useLocalStorage
this hooks lets you write to local storage and retrieve back from local storage within a minute. This hook returns 2 attributes; **value** & **setValue**. **value** hold the information retrieved from local storage and **setValue** lets you add to local storage.

```
import React from "react";
import "./App.css";

import { useInput, useLocalStorage } from "custom-hooks-react";

export default function App() {

  // you can name the destructured attribute names to anything you like!
  // for simplicity i have used value and setValue.

  const [value, setValue] = useLocalStorage('key');
  const [name, nameBind] = useInput('');

  console.log(value);


  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input  type='text' {...nameBind} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
```
*you can name the destructured attribute names to anything you like!
for simplicity i have used value and setValue.*

### Parameters
1. key - string

---
## useSessionStorage
this hooks lets you write to session storage and retrieve back from session storage within seconds. This hook returns 2 attributes; **value** & **setValue**. **value** hold the information retrieved from session storage and **setValue** lets you add to session storage.
```
import React from "react";
import "./App.css";

import { useInput, useSessionStorage } from "custom-hooks-react";

export default function App() {

  const [value, setValue] = useSessionStorage('key');
  const [name, nameBind] = useInput('');

  console.log(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input  type='text' {...nameBind} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
```
### Parameters
1. key - string
---
## useIndexedDB
this hook lets you interact with indexedDB with much simplicity.
```
import React from "react";
import "./App.css";

 import { useIndexedDB } from "custom-hooks-react";

export default function App() {
  const [state, actions] = useIndexedDB("DB", "Table", "PrimaryKey");

  console.log(state.error);
  console.log(state.success);

  // get all items in table
  const getItems = async () => {
    const items = await actions.getAll();
    console.log(items);
  };

  // get all items in table
  const getItem = async () => {
    const item = await actions.getItem(2);
    console.log(item);
  };

  return (
    <div>
      <button
        onClick={() =>
          actions.add({ myKey: Math.floor(Math.random() * 10), name: "dell" })
        }
      >
        add
      </button>

      <button onClick={() => actions.removeItem(7)}>delete</button>

      <button onClick={() => actions.updateItem({ myKey: 6, name: "hp" })}>
        update
      </button>

      <button onClick={getItems}>getItem</button>
    </div>
  );
}
```
This hook takes 3 parameters => **database name**, **table name** and **primary key**.

This hook returns 2 elements => **state** and **actions**  (you can name them anything when destructuring).

### Returns
#### state
1. error - status message
2. success - status message

#### actions
1. getAll() - function 
* no params
2. getItem(primaryKey) - function
* primaryKey - string or number
3. updateItem(new Object) - function
* new Object - updated values - object
4. removeItem(primaryKey)
* primaryKey - string or number


### Parameters
1. Database-Name - string 
2. Table-Name - string
3. PrimaryKey - string or number (string is better choice)
---
## useDarkMode
this hooks makes the process much easier when you want your application to have night mode. JUST useDarkMode.

the hook takes 1 param; a **boolean**, on defualt it is **false**.

```
import React from "react";
import "./App.css";

import { useDarkMode } from "custom-hooks-react";

export default function App() {

  const [mode, setMode] = useDarkMode(true);

  return (
    <div>
      <button onClick={setMode}>{`i am ${mode}`}</button>
    </div>
  );
}
```
*this hook adds a class **dark** to the body if **true** and removes class **dark** if false*
-----
### Parameters
1. MODE - boolean
------
## useStack
ever needed stack? well you no longer need to go through the implementationd level, JUST useStack.

```
import React from "react";
import "./App.css";

import {useStack} from "custom-hooks-react";


export default function App() {

  const [stack, setStack, popStack] = useStack();

  return (
    <div>
      <button onClick={()=> setStack('hi')}>push</button>
      <button onClick={()=> popStack()}>pop</button>

    </div>
  );
}

```
```
["hi", "hi", "hi", "hi", "hi", "hi", "hi", "hi"]
```
### Parameters
1. initialState - array
---
## useQueue
need a queue? just useQueue.

```
import React from "react";
import "./App.css";

import {useQueue} from "custom-hooks-react";

export default function App() {

const [queue, enqueue, dequeue] = useQueue()
console.log(queue);

  return (
    <div>
      <button onClick={()=> enqueue('hey')}>enqueue</button>
      <button onClick={dequeue}>dequeue</button>

    </div>
  );
}

```
### Parameters
1. initialState - array
---
## useArray
using arrays with hooks can never be easier than this, this hook will handle the main functionalities for you. The hook take an **array** as paramter and returns an array with the **array** itself, **setState** and an **object** of **functions**.

```
import React, { useState } from "react";
import "./App.css";

import { useArray } from "custom-hooks-react";

export default function App() {
  const [arr, setArr, actions] = useArray();

  console.log(arr);

  return (
    <div>
      <button onClick={() => actions.add(Math.floor(Math.random() * 20))}>
        add
      </button>

      <button onClick={() => actions.removeAt(2)}>remove at 3</button>
    </div>
  );
}
```
### actions object functions
1. add() - add element to array.
2. clear() - clears array
3. removeById - removes by id - takes id as param
4. removeAt - remove at an index - take index as param
### Parameters
1. initialState - array
2. removeById - id
3. removeAt - index - number

---
## useGeoLocation
to get the users location, then this is the hook for you. this hook returns an **object** containing **latitude** and **longitude**.

```
import React from "react";
import "./App.css";

import {useGeoLocation} from "custom-hooks-react";

export default function App() {
  const [location, error] = useGeoLocation()

  return (
    <div>
        <p>{`${location.latitude} / ${location.longitude}`}</p>
    </div>
  );
}

```
### Parameters
**None**

---
## useTimer
you need a timer, just useTimer.
useTimer hook take 1 parameter and return **two** elements. The first element is the **timer** which is a **string** and second is an **object** with **four** routines (functions) that control the timer.

the functions that control the timer, in the object are:
1. start()
2. stop()
3. resume()
4. reset()

```
import React from "react";
import "./App.css";

import {useTimer} from "custom-hooks-react";

export default function App() {
  const [timer, actions] = useTimer(60000);

  return (
    <div>
        <p>{timer}</p>
        <button onClick={actions.start}>start</button>
        <button onClick={actions.stop}>stop</button>
        <button onClick={actions.reset}>reset</button>
        <button onClick={actions.resume}>resume</button>

    </div>
  );
}
```
### Parameters
1. time in mili-seconds - number
* on default it is 0.

---
## useCountDown
for simple yet complex countdown use this hook, you will save a lot of time.
This hook take **one** parameter which is of type **Date** and returns an array with **four** elements; *[days, hours, minutes, seconds]*.

```
import React from "react";
import "./App.css";

import {useCountDown} from "custom-hooks-react";

export default function App() {
  
  const [days, hours, minutes, seconds] = useCountDown("September 1, 2021 00:00:00");

  return (
    <div>
        <p>{`${days}:${hours}:${minutes}:${seconds}`}</p>
    </div>
  );
}
```
### Parameters
1. full date (date and time) - date
---
## useIsMounted
if you want to check if your component has rendered use this hook.
this hook returns a **boolean**.

```
import React from "react";
import "./App.css";

import {useIsMounted} from "custom-hooks-react";

export default function App() {
    const isMounted = useIsMounted()

  return (
    <div>
        <p>{`${isMounted}`}</p>
    </div>
  );
}
```
### Parameters
NONE

---
## useIsLoading
if you want to check the status of a function, then use this hook. 
This hook takes in an **async** function then returns an **array** which contains the **function** and **loading status** of the function.
```
import React, { useEffect } from "react";
import "./App.css";

import { useIsLoading } from "custom-hooks-react";

const delayFunction = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function App() {
  const fetchDevs = async () => {
    console.log("this might take some Stime....");
    await delayFunction(4000);
    console.log("Done!");
  };

  const [getDevs, isLoading] = useIsLoading(fetchDevs);

  useEffect(() => {
    getDevs();
  }, []);

  return (
    <div>
      <p>{`${isLoading}`}</p>
    </div>
  );
}
```
### Parameters
1. action - function

---
## useDocumentTitle
if you want to update the title of your react page dynamically this is your hook.
in order to change the title, you will need to pass the **title** as parameter to the hook, it will return back the **title** stored in the **useDocumentTitle** state.

```
import React, { useState } from "react";
import "./App.css";

import { useDocumentTitle } from "custom-hooks-react";

export default function App() {
  const [state, setstate] = useState(0);
  const displayTitle = `clicked ${state}`;
  const title = useDocumentTitle(displayTitle);
  return (
    <div>
      <button onClick={() => setstate(state + 1)}>add</button>
    </div>
  );
}
```
### Parameters
1. initialValue - string or number
---
## useScript
this hook takes in a link to any script internal or external, then tries to load it. it will also return the status of loading process and append the script to the index.html

```
import React from "react";
import "./App.css";

import { useScript } from "custom-hooks-react";

export default function App() {
  const status = useScript(
    "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.js"
  );
  console.log(status);

  return <div>REACT</div>;
}
```
### Parameters
1. src - string
---
## useCss
this hook takes in a link to any css href internal or external, then tries to load it. it will also return the status of loading process and append the css href to the index.html
```
import React from "react";
import "./App.css";

import {useCss} from "custom-hooks-react";

export default function App() {
  const status = useCss(
    "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.0/css/bootstrap-grid.min.css"
  );

  console.log(status);

  return <div>REACT</div>;
}
```
### Parameters
1. src - string
---
### useKeyPressed
this hook allow you to keep track of the keys that are pressed on the keyboard by the user.
```
import React from "react";
import "./App.css";

import { useKeyPressed } from "custom-hooks-react";

export default function App() {
  const key = useKeyPressed("w");
  const keyTwo = useKeyPressed("i");
  const keyThree = useKeyPressed("n");

  console.log(key);
  console.log(keyTwo);
  console.log(keyThree);

  return <div>REACT</div>;
}
```
### Parameters
1. src - string
* if you're checking for a number add it as a **string** not **int**; '1' or "1".
---
### useWindowSize
this hook returns the size of window as it resizes.
```
import React from "react";
import "./App.css";

import { useWindowSize } from "custom-hooks-react";

export default function App() {
  const [height, width] = useWindowSize();

  console.log({ height, width });

  return <div>REACT</div>;
}
```
### Parameters
NONE

---
## useOnHover
this hook returns if mouse is hovered on top of an element.
```
import React from "react";
import "./App.css";

import { useOnHover } from "custom-hooks-react";

export default function App() {
  const [reference, status] = useOnHover();

  console.log(status);

  return (
    <div>
      <button
        ref={reference}
        style={{ backgroundColor: status ? "red" : "black" }}
      >
        submit
      </button>
    </div>
  );
}
```
### Parameters
NONE

---
## usePosition
this hook returns the **X** and **Y** position of mouse click on an element. It returns an array with object which holds **positionX** & **positionY** and a **function** which trigers the position.
```
import React from "react";
import "./App.css";

import {usePosition} from "custom-hooks-react";

export default function App() {
  const [position, handlePosition] = usePosition();

  console.log(position);

  return <div onClick={handlePosition}>REACT</div>;
}
```
### Parameters
NONE

---
## useSpeak
this hook read out loud the text that is paased as parameter.
```
import React from "react";
import "./App.css";

import {useSpeak} from "custom-hooks-react";

export default function App() {
  const [state, setState, speak] = useSpeak("hello how are you");

  return <div onClick={() => speak()}>REACT</div>;
}
```
### Parameters
1. text - string

---
## useSpeechRecognition
this hook changes speech into text, simply talk into microphone and it will return the text. This hook returns an array with **text** & **status** & **start** function which starts the recognition.
```
import React from "react";
import "./App.css";

import {useSpeechRecognition} from "custom-hooks-react";

export default function App() {
  const [state, status, start] = useSpeechRecognition();

  return (
    <>
      <div onClick={() => start()}>START</div>
      <p>{status ? status : state}</p>
    </>
  );
}
```
### Parameters
NONE

---
## useCopyToClipboard
this hook allows you to copy text to clip board by inserting the text into the **copy** function as **params**.
```
import React from "react";
import "./App.css";

import {useCopyToClipboard} from "custom-hooks-react";

export default function App() {
  const [text, copy] = useCopyToClipboard();

  console.log(text);

  return (
    <>
      <div onClick={() => copy("hello world")}>COPY</div>
    </>
  );
}
```
### Parameters
NONE
