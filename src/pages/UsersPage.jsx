import React, { useState } from 'react';
import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";
import { useUsers } from "../hooks/useUsers";

export const UsersPage = () => {
    const {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm, 
        handlerOpenForm,
        handlerCloseForm,
    } = useUsers();

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredUsers = users.filter(user => {
        return user.username.toLowerCase().includes(searchTerm.toLowerCase()) || 
               user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
               user.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
               user.rfc.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <>
            {!visibleForm || 
                <UserModalForm 
                userSelected={userSelected} 
                initialUserForm={initialUserForm} 
                handlerAddUser={handlerAddUser}
                handlerCloseForm={handlerCloseForm} />
            }

            <div className="container my-4">
                <div className='card'>
                <h2>Sistema Usuarios</h2>
                <div className="row">
                    {!visibleForm || <div className="col"></div>}
                    <div className="col">
                        {visibleForm || <button 
                        className="btn-purple"
                        onClick={handlerOpenForm}>
                            Nuevo Usuario
                        </button>}
                        <form className="d-flex">
                            <input 
                                className="form-control me-2" 
                                type="search" 
                                placeholder="Escriba la busqueda aqui..." 
                                aria-label="Search"
                                onChange={handleSearchChange} 
                            />
                            <label 
                                className="btn btn-outline-success" 
                                >
                                Buscar
                            </label>
                        </form>
                        
                        { 
                        users.length === 0
                        ? <div className="alert alert-warning">No hay usuarios en el sistema!</div>
                        : <UsersList 
                            handlerUserSelectedForm={handlerUserSelectedForm}
                            handlerRemoveUser={handlerRemoveUser}
                            users={filteredUsers}
                          />
                        }

                   
                </div>
                </div>
            </div>
            </div>
        </>
    );
};
