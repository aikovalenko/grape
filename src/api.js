import axios from 'axios'
import { itemIndex } from './functions'
import { waitingResponse, menu, types, headerss } from './stores'

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
      let items = response.data.values
      const t = response.data.values[0]
      types.set(t)
      // const types = response.data.values[0]
      const headers = response.data.values[1]
      items.splice(0, 2)


      let obj = {}
      t.forEach((i, index) => {
        items.filter(item => item[itemIndex('type', headers)] === t[index])
        obj[i] = items.filter(item => item[itemIndex('type', headers)] === t[index])
      })

      menu.set(items)
      headerss.set(headers)
      menu.set(obj)

    })
  } catch (error) {
    console.error(error)
  }
}

export { getIp }
