import { useState } from "react";
import Form from "../components/Form";
import Table from "../components/Table";
import Title from "../components/Title";
import Pagination from "../components/Pagination";
import Spinner from '../components/Spinner'
import '../style/_table.scss'
import { UserList as List } from '../App'
interface Props {
    listUser : List['items'],
    setListUser:  React.Dispatch<React.SetStateAction<List['items']>>,
    loading : boolean
}
const TableScreen: React.FC<Props> = (props) => {
    const { listUser , loading , setListUser} = props
    const [currentPage , setCurrentPage ] = useState(1);
    const [userPerPage ] = useState(5);
    const page = Math.ceil(listUser.length / userPerPage)
    const indexOfLastUser = currentPage * userPerPage;
    const indexOfFirstUser = indexOfLastUser - userPerPage
    const currentUser = listUser.slice(indexOfFirstUser , indexOfLastUser)
    const onChangePage = (index: number) : void => {
        if(index < 1 || index > page) return
        setCurrentPage(index)
    }
    console.log(loading)
    return (
        <div className="table-screen">
            <div className="container">
                <Title title="list user"/>
                { loading ? ( 
                    <Spinner />
                 ) : (
                    <div className="main">
                        <Form items={ listUser } setListUser={setListUser}/>
                        <Table items={ currentUser }/>
                        <Pagination 
                            totalUser={ page } 
                            onChangePage={onChangePage}
                            currentPage ={currentPage}
                        />
                    </div>
                 ) }
            </div>
        </div>
    );
}

export default TableScreen;

