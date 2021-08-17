# make your life easier for sure!

---
these are some custom hooks to help you not repeat yourself again, again and maybe again, so help yourself.

---
## hooks
1. useFetch
2. useInput
3. useForm
4. useToggle
5. useLocalStorage
6. useDarkMode

# usage

```
npm i custom-hooks-for-react
```
----
## useFetch

useFetch uses the fetch api to make the process much easier and simpler when making api callls. 
useFetch returns, 3 attributes, **data , error, loading**

#### get request
for get request just pass one param; the **URL**
```
import React from 'react'

import {useFetch} from 'custom-hooks-for-react'

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
#### post request
for post request pass in two params; **URL** & **opions**

```
import React from 'react'
import './App.css'


import {useFetch} from 'custom-hooks-for-react'
export default function App() {
    const [data, error, loading] = useFetch(URL, { answer: 42 })
    console.log(data, error, loading)
    return (
        <div >
         
        </div>
    )
}

```
---

## useInput
no need to repeat youself updating the state why not let this package handle it for you.

useInput return 2 attributes, **value & bind function**. value holds the value of the state and bind hold the value and onChange function.

#### method 1
pass in the bind object
```
import React from 'react'
import './App.css'

import {useInput} from 'custom-hooks-for-react'

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

import {useInput} from 'custom-hooks-for-react'

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
---
## useForm
useForm hook allows you to keep a record of input values from a form, you dont need to have a state for each input just this one hook is enough.

```
import React from "react";
import "./App.css";

import { useForm } from "custom-hooks-for-react";

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

import {useToggle} from 'custom-hooks-for-react'

export default function App() {
    const [isOn, setIsOn] = useToggle()
    return (
        <div>
           <button onClick={setIsOn}>{`i am ${isOn}`}</button>
        </div>
    )
}

```
----
## useLocalStorage
this hooks lets you write to local storage and retrieve back from local storage within a minute. This hook returns 2 attributes; **value** & **setValue**. **value** hold the information retrieved from local storage and **setValue** lets you add to local storage.

```
import React from "react";
import "./App.css";

import { useInput, useLocalStorage } from "custom-hooks-for-react";

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

---
## useDarkMode
this hooks makes the process much easier when you want your application to have night mode. JUST useDarkMode.

the hook takes 1 param; a **boolean**, on defualt it is **false**.

```
import React from "react";
import "./App.css";

import { useDarkMode } from "custom-hooks-for-react";

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

------