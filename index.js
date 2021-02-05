function submitData(name, email){

    const info = {
        name: name,
        email: email
    }
    
    const reqOb = {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        'body': JSON.stringify(info)
    }

    fetch('http://localhost:3000/users', reqOb)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })
        
}

