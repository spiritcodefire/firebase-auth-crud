import React from 'react';
import firebase from '../../utils/firebaseConfig'
import Create from '../Create/Create';
import Read from '../Read/Read'

const Main = () => {
    return (
        <main>
            <nav>

                <h1>React Crud</h1>

                <h4>
                    Bonjour {firebase.auth().currentUser.displayName} 
                </h4>

                <div style={{background : ""}} onClick={() => firebase.auth().signOut() }>Se déconnecter</div>

            </nav>
            <Create />
            <Read />
        </main>
    )
}

export default Main
