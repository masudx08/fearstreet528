const backendUrl = 'http://localhost:5555/app/'

const postContact =(data)=>{
  fetch(backendUrl+'contact', {
    method : 'POST',
    headers : {
      'Content-Type': 'application/json'
    },
    body: data
  })
  .then(res=>{
    console.log(res, 'res  postContact')
  })
}
const postAppointment =(data)=>{
  fetch(backendUrl+'appointment', {
    method : 'POST',
    headers : {
      'Content-Type': 'application/json'
    },
    body: data
  })
  .then(res=>{
    console.log(res, 'res  postContact')
  })
}

module.exports = {
  postContact, postAppointment
}