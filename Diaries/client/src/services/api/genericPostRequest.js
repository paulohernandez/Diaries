export const genericPostRequest = async (url,data) => {
    const response = await fetch(url,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(data)
    })
    if(response.ok){
        return true
    }else{
        return false
    }


}