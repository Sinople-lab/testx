// 1. Import Appwrite directly into your browser tab
//import { Client, Databases, ID } from 'https://jsdelivr.net';
import { Client, Databases, ID } from 'https://unpkg.com';

// 2. Initialize your local Appwrite connection
const client = new Client()
    .setEndpoint('https://nyc.cloud.appwrite.io/v1') // Points to your self-hosted Appwrite
    .setProject('6a5525270020504ee725');     // <--- REPLACE WITH YOUR PROJECT ID

const databases = new Databases(client);
const form = document.getElementById('dataForm');

// 3. Intercept the form submission
form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevents the page from refreshing

    // Package your inputs into a JavaScript object
    const data = {
        id: document.getElementById('id').value,
        token: document.getElementById('token').value
    };

    try {
        // 4. Send the POST request to your Database and Table '01'
        const response = await databases.createDocument(
            '6a55267f0015c007d7eb',   // <--- REPLACE WITH YOUR DATABASE ID
            '01',                 // Your Table ID is 01
            ID.unique(),          // Automatically generates a unique ID for the new row
            data                  
        );

        console.log('🎉 Success! Document created:', response);
        alert('Data successfully sent to Appwrite!');
        form.reset(); // Clears the form fields
        
    } catch (error) {
        console.error('❌ Appwrite Error:', error);
        alert('Failed to send data: ' + error.message);
    }
});
