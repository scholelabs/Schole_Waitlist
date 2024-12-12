export const GET = async () => {
    const RENDER_API_URL = 'https://schole-backend-app.onrender.com/health'; // Replace with your API endpoint

    try {
        const response = await fetch(RENDER_API_URL);

        if (!response.ok) {
            console.error(`Failed to ping Render API: ${response.statusText}`);
            return new Response('Ping failed', { status: 500 });
        }

        console.log(`Render API pinged successfully at ${new Date().toISOString()}`);
        return new Response('Ping successful', { status: 200 });
    } catch (error) {
        console.error('Error pinging Render API:', error);
        return new Response('Ping failed', { status: 500 });
    }
};
