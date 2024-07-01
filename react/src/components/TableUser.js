import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers, deleteUserRedux } from '../action/actions';

const TableUser = (props) => {

    // const [listUsers, setListUser] = useState();

    const dispatch = useDispatch();
    const listUsers = useSelector((state) => state.user.listUsers);

    const isLoading = useSelector((state) => state.user.isLoading);
    const isError = useSelector((state) => state.user.isError);


    // const fetchAllUser = async () => {
    //     const res = await axios.get("http://localhost:8080/users/all");
    //     const data = res && res.data ? res.data : []
    //     setListUser(data)
    // }

    useEffect(() => {
        dispatch(fetchAllUsers());
        // fetchAllUser();
    }, []) //mảng rỗng để nó chạy duy nhất đúng 1 lần thôi

    const handleDeleteUser = (user) => {
        dispatch(deleteUserRedux(user.id));
    }

    if (isError === false && isLoading === true) {
        return (
            <Container>
                <hr />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <>Loading data...</>
                    </tbody>
                </Table>
            </Container>
        )
    }

    if (isError === false && isLoading === false) {
        return (
            <Container>
                <hr />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers && listUsers.length > 0 &&
                            listUsers.map((item, index) => {
                                return (
                                    <tr key={`users-${index}`}>
                                        <td>{index + 1}</td>
                                        <td>{item.email}</td>
                                        <td>{item.username}</td>
                                        <td>
                                            <button
                                                onClick={() => handleDeleteUser(item)}
                                                className='btn btn-danger'>Delete

                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </Table>
            </Container>
        )
    }

    if (isError === true && isLoading === false) {
        return (
            <Container>
                <hr />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <div>Something wrong, please try agian...</div>
                    </tbody>
                </Table>
            </Container>
        )
    }



    // return (
    //     <Container>
    //         <hr />
    //         <Table striped bordered hover>
    //             <thead>
    //                 <tr>
    //                     <th>#</th>
    //                     <th>Email</th>
    //                     <th>Username</th>
    //                     <th>Actions</th>
    //                 </tr>
    //             </thead>
    //             <tbody>

    //                 {isError === true ?
    //                     <>
    //                         <div>Something wrong, please try agian...</div>
    //                     </>
    //                     :
    //                     <>

    //                         {isLoading === true ?
    //                             <>Loading data...</>
    //                             :
    //                             <>
    //                                 {listUsers && listUsers.length > 0 &&
    //                                     listUsers.map((item, index) => {
    //                                         return (
    //                                             <tr key={`users-${index}`}>
    //                                                 <td>{index + 1}</td>
    //                                                 <td>{item.email}</td>
    //                                                 <td>{item.username}</td>
    //                                                 <td>
    //                                                     <button
    //                                                         onClick={() => handleDeleteUser(item)}
    //                                                         className='btn btn-danger'>Delete

    //                                                     </button>
    //                                                 </td>
    //                                             </tr>
    //                                         )
    //                                     })}
    //                             </>}

    //                     </>
    //                 }




    //             </tbody>
    //         </Table>
    //     </Container>
    // )
}

export default TableUser;