import React, {useState} from "react";
import axios from "axios";

const AdminPanel =()=>{
    const [nameValue, setNameValue] = useState("");
    const [priceValue, setPriceValue] = useState();
    // const [idValue, setIdValue] = useState("");
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
        axios.post('https://62df9b5e976ae7460bef93b4.mockapi.io/Items', {
            name: nameValue,
            price: priceValue,
            imgUrl: imageValue
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        // setNameValue('');
        // setImageValue('');
        // setPriceValue();
    }
    return (
        <>
            <h1>Dodaj nowy Product</h1>
            <div className='admin-panel d-flex flex-column'>
                <div onChange={onChangeNameValue}  placeholder='Imię'>Wpisz nazwę<input /></div>
                <div onChange={onChangePriceValue} placeholder='cena'>Wpisz wartość<input type='number'/></div>
                <div onChange={onChangeImageValue}  placeholder='zdjęcie'>Dodaj zdjęcie<input /></div>
                <button onClick={onAddToData}>Wyslij</button>
            </div>
        </>
    )
}

export default AdminPanel;