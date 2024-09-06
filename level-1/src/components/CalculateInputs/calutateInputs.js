import React, {useState} from 'react';

export default function CalculateInputs() {

    // user inputs
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);

    // operations
    const [initialOperation, setInitialOperation] = useState('add');

    // results
    const [operationResults, setOperationResults] = useState(null);


    const handleResults = () => {
        // convert inputs to string, then floats
        const pfInput1 = parseFloat(input1);
        const pfInput2 = parseFloat(input2);

        if( isNaN(pfInput1) || isNaN(pfInput2) ) {
            setOperationResults('please enter a number');
            return;
        };

        let sum;
        switch(initialOperation){
            case 'add':
                sum = pfInput1 + pfInput2;
                break;
            case 'sub':
                sum = pfInput1 - pfInput2;
                break;
            case 'multiply':
                sum = pfInput1 * pfInput2;
                break;
            case "divide":
                sum = pfInput2 !== 0 ? pfInput1/pfInput2 : 'You can"t divide by zero';
                break;
        }
        setOperationResults(sum)
    };

    return (
        <div className='container'>
        <div className='wrapper'>

        <input name='input1' type='number' className='input1' placeholder=' Enter a number'  onChange={(event) => setInput1(event.target.value)}></input>
        
        <select value={initialOperation} onChange={(event) => setInitialOperation(event.target.value)} >
            <option id='add' value="add">+</option>
            <option id='sub' value="subtract">-</option>
            <option id='multiply' value="multiply">x</option>
            <option id='divide' value="divide"><b>/</b> </option>
        </select>

        <input name='input2' type='number' className='input2' placeholder='Enter a number' onChange={(event) => setInput2(event.target.value)}></input>
         {/* <span><b><i>=</i></b></span> */}
        

        </div>
        <div className='results'>
            {operationResults !== null && <span><b><i>{operationResults}</i></b></span>}</div>

        <div className='button-div'>
            <button type='button' onClick={handleResults}>Click for results</button>
        </div>
        </div>
    )
}