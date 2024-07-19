import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductData } from '../ReduxStore/itemSlice';
import { Google_API_KEY } from '../Utils/Constents';

const useGeneretedData = (formValues) => {
    const [Products, setProducts] = useState([]);
    const [loading, setLoading] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        const getProducts = async () => {
            const { company, device, reason, price } = formValues

            setLoading(true);

            const { GoogleGenerativeAI } = require("@google/generative-ai");

            // Access your API key as an environment variable (see "Set up your API key" above)
            const genAI = new GoogleGenerativeAI(Google_API_KEY);

            async function run() {

                let model = genAI.getGenerativeModel({
                    model: "gemini-1.5-flash",
                    // Set the `responseMimeType` to output JSON
                    generationConfig: { responseMimeType: "application/json" }
                });

                let prompt = `Generate array of 8 object ,each object for popular ${company} ${device} suitable for ${reason} under ₹${price} for indian, using this JSON schema:
    {
    "type": "object",
    "properties": {
    "full_name": { "type": "string" },
    "brand": { "type": "string" },
    "rating": { "type": "number" },
    "model": { "type": "string" },
    "colors": { "type": "string" },
    "brand_website_link": { "type": "string" },
    "price": { "type": "number" },
    "related_information_1": { "type": "string" },
    "related_information_2": { "type": "string" },
    "related_information_3": { "type": "string" },
    "about_company": { "type": "string" },
    "description": { "type": "string" },
    "key_features": { "type": "array", "items": { "type": "string" } }
    }
    }`;
                let result = await model.generateContent(prompt);
                let gotData = await result.response.text();  // Await the text content of the response


                // Split the data by lines and parse each line as JSON
                let parsedData;
                try {
                    let jsonObjects = gotData.trim().split('\n').map(line => JSON.parse(line));
                    parsedData = jsonObjects;

                } catch (error) {
                    setLoading(false);
                    console.error("Error parsing JSON data:", error);
                    return;  // Exit the function if parsing fails
                }

                // Check if parsedData is an array
                if (Array.isArray(parsedData)) {
                    setLoading(false);
                    dispatch(addProductData(parsedData))
                    setProducts(parsedData)
                } else {

                }

            }

            run();

        }

        if (formValues) {
            getProducts();
        }
   
    }, [formValues]);

    return { Products, loading }

}


export default useGeneretedData;