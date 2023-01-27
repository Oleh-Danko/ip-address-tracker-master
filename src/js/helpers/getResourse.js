export async function getResourse(ip = '103.215.219.0') {
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_4pDfWdgb3FZmxU0d8EXXY3TNMtnCy&ipAddress=${ip}`)

    return await response.json();
}