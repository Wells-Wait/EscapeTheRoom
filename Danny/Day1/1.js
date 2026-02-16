





async function PULL() {
    const button = document.getElementById('inPut');
    
    const url = `https://github.com/Wells-Wait/EscapeTheRoom/Danny.ESCAPE`;

    const response = await fetch(url, {
        method: "GET",
        headers: {
            // This is the "ID/Key" that lets you in
            "Authorization": `Bearer ${GITHUB_TOKEN}`, 
            "Accept": "application/vnd.github.v3+json"
        }
    });

    const data = await response.json();
    
    // Remember: data.content is the encoded text
    // data.sha is the "ID" you need later to save!

    button.innerHTML = "complete";
    button.disabled = true;
    return data; 
}