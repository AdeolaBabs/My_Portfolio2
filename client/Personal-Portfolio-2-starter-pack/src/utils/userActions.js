// import axios from "axios";
// import{
//     USER_SUBMIT_REQUEST
// }

// export const submitMessage = (form) => async (dispatch) => {
//     try{
//       dispatch({type: USER_SUBMIT_REQUEST})

//       const config = {
//         headers:{
//             'Content-Type' : 'application/json'
//         }
//       }

//       const {data} = await axios.post('/api/messages/sendMessage', form, config)

//       dispatch({
//         type : USER_SUBMIT_REQUEST
//         payload: data
//       })
//     }catch (error) {
//        dispatch({
//         type: USER_SUBMIT_REQUEST
//         payload:
//         error.response && error.response.data.message
//     })
//     }
// }