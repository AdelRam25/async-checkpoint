const delay= (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const iterateWithAsyncAwait = async (results) => {
  for (const result of results) {
    console.log(result);
    await delay(3000);
  }
};

const arr = [1, 2, 3];
iterateWithAsyncAwait(arr);

// ******************

const awaitCall = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return { message: "API request failed" };
    }
    return await response.json();
  } catch (error) {
    console.error("Error");
    return { message: "Something went wrong!" };
  }
};

awaitCall("").then((data) => console.log(data));

// *******************************************************


const messageDelayed= (msg) => new Promise(resolve => setTimeout(resolve, msg));

// function 1
const firstFunction = async () => {
  await messageDelayed(3000); 
  console.log('First one completed');
};

// function 2
const secondFunction = async () => {
  await messageDelayed(3000); 
  console.log('Second one completed');
};

// function 3
const thirdFunction = async () => {
  await messageDelayed(3000); 
  console.log('Third one completed');
};

// chaining functions into one function to call it later
const chainedAsyncFunctions = async () => {
  await firstFunction();
  await secondFunction();
  await thirdFunction();
};

// calling the chained function
chainedAsyncFunctions();
