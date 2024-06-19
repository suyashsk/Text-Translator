import { useCallback, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const[source,setSource] = useState("en");
  const[targets, setTraget] = useState("hi");
  const[text,setText] = useState("");
  const[result,setResult] = useState("");

  async function handleTextTranslator(e){
    e.preventDefault();
    if(source === targets){
      alert("Source and Target Language cannot be same");
    }
    const data = new FormData();
    data.append('source_language', source);
    data.append('target_language', targets);
    data.append('text', text);

    const options = {
      method: 'POST',
      url: 'https://text-translator2.p.rapidapi.com/translate',
      headers: {
        'x-rapidapi-key': 'f51d4f4046msh81e25e82e26b3a5p13c8fbjsnfe54366e3bcf',
        'x-rapidapi-host': 'text-translator2.p.rapidapi.com'
      },
      data: data
    };
    try{
      const response = await axios.request(options);
	    console.log(response.data);
      setResult(response.data.data.translatedText)
    }
    catch(error){
      console.error(error);
    }
  }

  return (
    
     <div className='main '>
      <div className='inputfields'>
      <form onSubmit={handleTextTranslator}>
        <label >Source : </label>
        <select
        className=''
        name='source'
        value={source}
        onChange={(e)=>setSource(e.currentTarget.value)}>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="bn">Bengali</option>
            <option value="ml">Malayalam</option>
            <option value="ta">Tamil</option>

            <option value="mr">marathi</option>
            <option value="gu">Gujarati</option>
            <option value="ja">Japanese</option>
            <option value="ur">Urdu</option>
            <option value="la">Latin</option>
        </select>
        <label className='text-bold font-sans text-center'>Target : </label>
        <select
        
        name="target"
        value={targets}
        onChange={(e)=>setTraget(e.currentTarget.value)}>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="bn">Bengali</option>
            <option value="ml">Malayalam</option>
            <option value="ta">Tamil</option>

            <option value="mr">marathi</option>
            <option value="gu">Gujarati</option>
            <option value="ja">Japanese</option>
            <option value="ur">Urdu</option>
            <option value="la">Latin</option>
        </select>
        <div className='input mb-3'>
          <input className='input_holder' type='text' placeholder='Enter the Text to be translated' value={text} onChange={(e)=>setText(e.currentTarget.value  )} />
        </div>
        <button type='submit' className=' px-4 py-2  rounded-md bg-blue-500 text-white'>Translate</button>
      </form>
      </div>
      <div
      className='result_container bg-slate-100 p-2 mt-2 '>
        <p style={{ textAlign: "center" }}>{result}</p>
      </div>
     </div>
    
  )
}

export default App
