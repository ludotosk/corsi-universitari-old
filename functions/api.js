exports.handler = async function(event, context) {
    const axios = require('axios')
    var corsi

    try {
        corsi = await axios.get('https://json-server-corsi.herokuapp.com/corsi?_sort=u,a,t&_order=asc,desc,desc')
    } catch (error) {
            console.error(error)
    }

    return {
        statusCode: 200,
        body: JSON.stringify(corsi.data)
    } 
} 