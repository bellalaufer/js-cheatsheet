let buttonSuccess = document.querySelector(".web-button-success");
buttonSuccess?.addEventListener('click', (e) => {
    e.preventDefault();

    async function success() {
        let response = await fetch("https://api.giphy.com/v1/gifs/translate?api_key=C0ZP0xR1klDe6ID8tIORjR17tQTEUjYx&s=cat");
        let data = await response.json();
        console.log(data)
        let headersObject = [...response.headers];

        let values = Object.values(headersObject);
        let headers = [];
        for (let i = 0; i < values.length; i++) {
            headers.push(values[i]);
        }

        let headersStr = [];
        for (let i = 0; i < headers.length; i++) {
            headersStr.push(headers[i].join(": "));
        }

        try {
            if(response.status === 200){
                document.querySelector(".web-gif-success").innerHTML += `<img src="${data.data.images.fixed_height.url}" alt = "">`;
                document.querySelector(".web-status-success").innerHTML = `Status Code: <i class="tiny material-icons web-iconcode-green">fiber_manual_record</i>${response.status}`;
                document.querySelector(".web-headers-success").innerHTML = "Response Headers:";
                for (let i = 0; i < headersStr.length; i++) {
                    document.querySelector(".web-header-success").innerHTML += `<div class="web-header">${headersStr[i]}</div>`;
                }           
            } else {
                throw new Error ("Проверьте корректность запроса.");
            }          
        } catch (error) {
            console.log(error.message);
            document.querySelector(".web-gif-success").innerHTML = error.message;
            document.querySelector(".web-status-success").innerHTML = `Status Code: <i class="tiny material-icons web-iconcode-red">fiber_manual_record</i>${response.status}`;
            document.querySelector(".web-headers-success").innerHTML = "Response Headers:";
            for (let i = 0; i < headersStr.length; i++) {
                document.querySelector(".web-header-success").innerHTML += `<div class="web-header">${headersStr[i]}</div>`;
            }  
        }
    }

    success();
})

let buttonUnsuccess = document.querySelector(".web-button-unsuccess");
buttonUnsuccess?.addEventListener('click', (e) => {
    e.preventDefault();

    async function unsuccess() {
        let response = await fetch("https://api.giphy.com/v1/gifs/translat?api_key=вставить_API_Key_с_сайта_GIPHY=cat");
        let data = await response.json();
        let headersObject = [...response.headers];

        let values = Object.values(headersObject);
        let headers = [];
        for (let i = 0; i < values.length; i++) {
            headers.push(values[i]);
        }

        let headersStr = [];
        for (let i = 0; i < headers.length; i++) {
            headersStr.push(headers[i].join(": "));
        }

        try {
            if(response.status === 200){
                document.querySelector(".web-gif-unsuccess").innerHTML += `<img src="${data.data.images.fixed_height.url}" alt = "">`;
                document.querySelector(".web-status-unsuccess").innerHTML = `Status Code: <i class="tiny material-icons web-iconcode-green">fiber_manual_record</i>${response.status}`;
                document.querySelector(".web-headers-unsuccess").innerHTML = "Response Headers:";
                for (let i = 0; i < headersStr.length; i++) {
                    document.querySelector(".web-header-unsuccess").innerHTML += `<div class="web-header">${headersStr[i]}</div>`;
                }     
                
            } else {
                throw new Error ("Проверьте корректность запроса.");
            }           
        } catch (error) {
            console.log(error.message);
            document.querySelector(".web-gif-unsuccess").innerHTML = error;
            document.querySelector(".web-status-unsuccess").innerHTML = `Status Code: <i class="tiny material-icons web-iconcode-red">fiber_manual_record</i>${response.status}`;
            document.querySelector(".web-headers-unsuccess").innerHTML = "Response Headers:";
            for (let i = 0; i < headersStr.length; i++) {
                document.querySelector(".web-header-unsuccess").innerHTML += `<div class="web-header">${headersStr[i]}</div>`;
            }
        }
    }

    unsuccess();
})