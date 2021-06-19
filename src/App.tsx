import { useEffect, useState } from 'react';
import { Switch , Route, Redirect, HashRouter as Router } from 'react-router-dom'
import Header from './components/Header';
import CounterScreen from './pages/CounterScreen';
import TableScreen from './pages/TableScreen';
import './style/_app.scss'

export interface UserList {
    items : {
        id : number,
        name : string,
        email : string,
        position : string,
    }[] 
}
function App() {
    const [listUser , setListUser] = useState<UserList["items"]>([]);
    const [loading , setLoading] = useState(false);   
    useEffect(() => {
        async function fetchUser() {
            setLoading(true)
            try {
                const url = 'https://60cc7d5371b73400171f7e06.mockapi.io/users'
                const result = await fetch(url)
                const data = await result.json()
                setLoading(false)
                setListUser(data)
            } catch (error: any) {
                console.log('error' , error.message)
            }
        }
        fetchUser();
    }, [])
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Redirect from="/home" to="/" exact/>
                    <Route path="/"exact>
                        <TableScreen listUser={listUser} loading={loading} setListUser={setListUser}/>
                    </Route>
                    <Route path="/counter" component ={ CounterScreen } exact/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
