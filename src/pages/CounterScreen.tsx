import React from 'react'
import '../style/_counter.scss';
import Counter from '../components/Counter'
const  CounterScreen: React.FC = () => {
    return (
        <div className="counter">
            <div className="container">
                <div className="main">
                   <Counter>
                       { (count , setCount) => (
                           <div>
                               <p className="number">{ count }</p>
                               <button className="btn btn-success mr-3" onClick={() => setCount(count + 1)}>Counter + 1</button>
                               <button className="btn btn-danger" onClick={() => setCount(0)}>Reset Counter</button>
                           </div>
                       )}
                   </Counter>
                </div>
            </div>
        </div>
    );
}

export default CounterScreen;