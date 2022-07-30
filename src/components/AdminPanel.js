import React, {useState} from "react";
import axios from "axios";

const AdminPanel =()=>{
    const [nameValue, setNameValue] = useState("");
    const [priceValue, setPriceValue] = useState();
    const [imageValue, setImageValue] =useState("");
    const onChangeNameValue=(e)=>{
        setNameValue(e.target.value);
    }
    const onChangePriceValue=(e)=>{
        setPriceValue(e.target.value);
    }
    const onChangeImageValue=(e)=>{
        setImageValue(e.target.value);
    }

    const onAddToData =()=>{
        // if(priceValue !== Number){
        //
        // }
        axios.post('https://62df9b5e976ae7460bef93b4.mockapi.io/Items', {
            name: nameValue,
            price: Number(priceValue),
            imgUrl: imageValue
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });


        setTimeout(()=>{
            window.location.reload();

        },200)

        // setNameValue('');
        // setImageValue('');
        // setPriceValue();
    }
    return (
        <div>
            <h1>Dodaj nowy Product</h1>
            <div className='admin-panel d-flex flex-column'>
                <div onChange={onChangeNameValue}  >Wpisz nazwę<input placeholder='name' /></div>
                <div onChange={onChangePriceValue} >Wpisz wartość<input placeholder='price' /></div>
                <div onChange={onChangeImageValue}  >Dodaj zdjęcie<input placeholder='photo' /></div>
                <button onClick={onAddToData}>Wyslij</button>
            </div>
        </div>
    )
}

export default AdminPanel;