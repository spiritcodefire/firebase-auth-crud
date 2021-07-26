import React, {useState, useEffect} from 'react'
import firebase from '../../utils/firebaseConfig'
import UpdateDelete from '../UpdateDelete/UpdateDelete';

const Read = () => {
    const [quoteList, setQuoteList] = useState([]);

    useEffect(() => {
      const quotesDB = firebase.database().ref("quotesDB");
  
      quotesDB.on("value", (snapshot) => {
          //snapshot fait une capture de la DB à l'instant présent
        console.log(snapshot.val());
        let previousList = snapshot.val();
        // on créé une list
        let list = [];
        for (let id in previousList) {
          list.push({ id, ...previousList[id] });
        }
        setQuoteList(list);
      });
    }, []);
    console.log(quoteList);

    return (

        <div className="read">
            <ul>
              {quoteList &&
                quoteList.map((item, index) => (
                   <UpdateDelete 
                        item={item}
                        key={index}
                   />
                ))}
            </ul>
        </div>
    )
}

export default Read

