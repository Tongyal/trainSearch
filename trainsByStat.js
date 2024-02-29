
const hide_output=document.querySelector(".show-trains");
const hide_input=document.querySelector(".top-top-st-code");
const loading=document.querySelector(".loader");
const stat_input=document.querySelector(".st-code-input");
const sub_but=document.querySelector(".button-68");
const origin_train=document.querySelector(".origin-train")
const pass_train=document.querySelector(".pass-train")
const dest_train=document.querySelector(".dest-train")
async function get_response(stcode)
{
console.log(stcode)
const options = {
  method: 'GET',
  url: 'https://irctc1.p.rapidapi.com/api/v3/getTrainsByStation',
  params: {
    stationCode: stcode
},
  headers: {
    'X-RapidAPI-Key': '374fe8bb26msh25dc509fadb6daep16f529jsneff256bc829c',
    'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
    return response.data;
} catch (error) {
	console.error(error);
}

}

sub_but.addEventListener("click" ,async(e)=>
{    
  loading.classList.add("active");
    const response=await get_response(stat_input.value.toUpperCase());
    console.log(response);

const origin_array=response.data.originating;
const pass_array=response.data.passing;
const dest_array=response.data.destination;

for(var i=0;i<origin_array.length;i++)
{
    var newChild1 = document.createElement("tr");
    var newSubChild1 =document.createElement("td"); 
    var newSubChild2 =document.createElement("td"); 
    var newSubChild3 =document.createElement("td");

    newSubChild1.textContent=origin_array[i].trainNo;
    newSubChild2.textContent=origin_array[i].trainName;
    newSubChild3.textContent=origin_array[i].departureTime;
    newChild1.appendChild(newSubChild1);
    newChild1.appendChild(newSubChild2);
    newChild1.appendChild(newSubChild3);

    origin_train.appendChild(newChild1);
     

}

for(var i=0;i<pass_array.length;i++)
{
    var newChild1 = document.createElement("tr");
    var newSubChild1 =document.createElement("td"); 
    var newSubChild2 =document.createElement("td"); 
    var newSubChild3 =document.createElement("td");
    var newSubChild4 =document.createElement("td");

    newSubChild1.textContent=pass_array[i].trainNo;
    newSubChild2.textContent=pass_array[i].trainName;
    newSubChild3.textContent=pass_array[i].arrivalTime;
    newSubChild4.textContent=pass_array[i].departureTime;
    newChild1.appendChild(newSubChild1);
    newChild1.appendChild(newSubChild2);
    newChild1.appendChild(newSubChild3);
    newChild1.appendChild(newSubChild4);

    pass_train.appendChild(newChild1);
     

}

for(var i=0;i<dest_array.length;i++)
{
    var newChild1 = document.createElement("tr");
    var newSubChild1 =document.createElement("td"); 
    var newSubChild2 =document.createElement("td"); 
    var newSubChild3 =document.createElement("td");
    // var newSubChild4 =document.createElement("td");

    newSubChild1.textContent=pass_array[i].trainNo;
    newSubChild2.textContent=pass_array[i].trainName;
    newSubChild3.textContent=pass_array[i].arrivalTime;
    // newSubChild4.textContent=pass_array[i].departureTime;
    newChild1.appendChild(newSubChild1);
    newChild1.appendChild(newSubChild2);
    newChild1.appendChild(newSubChild3);
    // newChild1.appendChild(newSubChild4);

    dest_train.appendChild(newChild1);
     

}
// stat_input.value='';
loading.classList.remove("active");
hide_input.classList.add("active");
hide_output.classList.add("active");



})