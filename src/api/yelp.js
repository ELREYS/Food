import axios from 'axios'

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer qU6Mrp9UMD9nMMpiv9Fezjr-W8OHdZUjbqEWCFEMOSUfhYB8qG8Z_vbLdoSuFC9KMA0WSNMTTYuE3CZK1WMXKAbhHBhoRX4CjPMtfrIDP9LsQo_2fQzvO2i4pubLXXYx'
    }
});






