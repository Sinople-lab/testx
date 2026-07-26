console.log("loaded!");
import { Client, Databases, ID } from "https://cdn.jsdelivr.net/npm/appwrite@17.0.0/+esm";

const client = new Client()
    .setEndpoint('https://nyc.cloud.appwrite.io/v1') 
    .setProject('6a63e18100085b593580');     
const databases = new Databases(client);
const form = document.getElementById('dataForm');

// 3. Intercept the form submission
form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevents the page from refreshing

    // Package your inputs into a JavaScript object
    const data = {
        id: document.getElementById('id').value,
        token: document.getElementById('token').value,
        location: document.getElementById('location').value
    };

    try {
        // 4. Send the POST request to your Database and Table '01'
        const response = await databases.createDocument(
            '6a63e1ae0013c0f82c8e',   // <--- REPLACE WITH YOUR DATABASE ID
            'shelly',                 // Your Table ID is 01
            ID.unique(),          // Automatically generates a unique ID for the new row
            data                  
        );

        console.log('🎉 Success! Document created:', response);
        alert('La base de datos se ha actualizado!');
        form.reset(); // Clears the form fields
        
    } catch (error) {
        console.error('❌ Appwrite Error:', error);
        alert('Falla al enviar los datos: ' + error.message);
    }
});
