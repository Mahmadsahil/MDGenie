import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addProductImage } from '../ReduxStore/itemSlice';


const useGetImages = async (full_name) => {
    const [ProductImage, setProductImage] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        getProductImage();
    }, [full_name])

    const getProductImage = async () => {
        var myHeaders = new Headers();
        myHeaders.append("X-API-KEY", "df11263d460e94b4421db0e6237f920f683e0616");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "q": full_name,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://google.serper.dev/images", requestOptions)
            .then(response => response.text())
            .then(result => JSON.parse(result))
            .then(images => dispatch(addProductImage(images)))
            .catch(error => console.log('error', error));

    }
    return ProductImage;
}

export default useGetImages;