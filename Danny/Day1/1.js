




const GITHUB_TOKEN="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"
 async function PULL() {
    const button = document.getElementById('inPut');
    
    const url = `https://api.github.com/repos/Wells-Wait/EscapeTheRoom/contents/Danny/Danny.ESCAPE`;

    const response = await fetch(url, {
        method: "GET",
        headers: {
            // This is the "ID/Key" that lets you in
            "Authorization": `Bearer ${GITHUB_TOKEN}`, 
            "Accept": "application/vnd.github.v3+json"
        }
    });

    const data = await response.json();
    if (!data.content) {

    button.innerHTML = "File Not Found";
    return;
}
    const actualText = atob(data.content);
    // Remember: data.content is the encoded text
    // data.sha is the "ID" you need later to save!

    button.innerHTML = actualText;
    button.disabled = true;
    return data; 
}