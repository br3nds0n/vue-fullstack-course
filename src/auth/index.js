const token = localStorage.getItem('token')
const headers = {
  Authorization: `Bearer ${token}`
}

export default headers
