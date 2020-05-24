import axios from 'axios'
import { waitingResponse, menu } from './stores'

function reloadApp() {
  setTimeout(() => {
    location.reload()
  }, 5000)
}

const api = axios.create({
  baseURL: '__apiUrl__',
  timeout: 25000
})

async function getIp() {
  try {
    axios({
      method: 'get',
      url: 'https://sheets.googleapis.com/v4/spreadsheets/1bl5agwuS56lRMf3N1cneh5QYmb9aHHPP00WnW_0KEIs/values/menu!A1:AL?key=AIzaSyCx1VDl0YrL1zFcZXXmNr-6jFJQ7i-An5U',
      headers: {
        'Content-Type': 'text/plain'
      },
      responseType: 'text',
    }).then(response => {
      console.log(response.data.values)
      menu.set(response.data.values)
    })
  } catch (error) {
    console.error(error)
  }
}

export { getIp }
