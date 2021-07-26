import React, {useState, useContext} from 'react'
import firebase from '../../utils/firebaseConfig'
import { UidContext } from '../../hooks/UidContext/UidContext'

//  item est envoyé dans le component Read dans les props
const UpdateDelete = ({ item }) => {

    const uid = useContext(UidContext) ;

    // ce state servira lorsqu'on sera en train de faire une mise à jour, donc de base, il est false car on n'en fait pas 
    const [update, setUpdate] = useState(false) ;
    const [authorUpdate, setAuthorUpdate] =  useState(null); 
    const [textUpdate, setTextUpdate] =  useState(null); 

    const authorCheck = () => {
        if (item.uid === uid) {
            return true ;
        }else{
            return false ;
        }
    }

    authorCheck() ;

    const updateItem = () => {
        // quote representera une citation dans la bd, qui aura matché avec le item.id
        let quote = firebase.database().ref('quotesDB').child(item.id)

        // on checkera toujours si il n'y a pas d'éléments null
        if (authorUpdate !== null) {
            quote.update({
                author : authorUpdate
            });
            
        }

        if (textUpdate !== null) {
            quote.update({
                text : textUpdate
            });
            
        }
        setUpdate(false)
    }

    const deleteItem = () => {
        let quote = firebase.database().ref('quotesDB').child(item.id) ;
        quote.remove() ;
    }
 
    return (
        <li>
            {
                update === false && (
                    <>
                        <div className="item-container">
                            <p>{item.text}</p>
                            <h6>{item.author}</h6>

                        {/* Si jamais la fonction authorUpdate renvoi TRUE alors affiche les boutons */}
                        {authorCheck() && (
                            <div className="buttons-container">
                                <button onClick={()=> setUpdate(!update)}>Update</button>
                                <button onClick={deleteItem}>Delete</button>
                            </div> 
                        )}
                        
                        </div>

                        
                    </>
                )
            }
            {update &&
                <div className="item-container-update">

                    <textarea
                        defaultValue={item.text}
                        onChange={(e) => setTextUpdate(e.target.value)}
                    />

                    <input 
                        type="text"
                        defaultValue={item.author}
                        onChange={(e) => setAuthorUpdate(e.target.value)}
                    />
                    <button onClick={updateItem}>validateUpdate</button>

                </div>
            }
        </li>
    )
}

export default UpdateDelete
