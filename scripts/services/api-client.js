// HTTP/HTTPS CALL
import URL from "../utils/constants.js";
 async function makeNetworkCall() {
  try {
    const response = await fetch(URL);
    const object = await response.json(); //block
    return object;
  } catch (err) {
    console.log("Some Problem in API call", err);
    throw err;
  }
}
export default makeNetworkCall;
/*  OLD STYLE
  const promise = await fetch(URL);
  // const data =  await promise.json();
  console.log("promise is", promise);
}
promise
  .then((response) => {
    console.log("response is", response);
    const promise2 = response.json();
    promise
      .then((data) => console.log("data is", data))
      .catch((e) => console.log("JSON parse error"));
  })
  .catch((err) => {
    console.log("error is", err);
  });
makeNetworkCall();
*/
