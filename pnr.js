
const loading=document.querySelector(".loader");
const hide_input=document.querySelector(".pnr-features-handling");
const show_out=document.querySelector(".pnr-details");


async function get_pnr_data(pnr) {
  const options = {
    method: "GET",
    url: "https://irctc1.p.rapidapi.com/api/v3/getPNRStatus",
    params: {
      pnrNumber: pnr,
    },
    headers: {
      "X-RapidAPI-Key": "818231618emshdd755b0078b204ap14794ejsnfd4b490fa409",
      "X-RapidAPI-Host": "irctc1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    // if( response.data.Pnr)
    return response;
  } catch (error) {
    console.error(error);
  }
}

// selecting the jinse ui change krna h 
const pnr_input_gayab=document.querySelector(".top-top-pnr");

// selecting the jinme details bhrna h 

const pnr_no = document.querySelector(".pnr-input");
const submit_but = document.querySelector(".button-68");


const data_pnr = document.querySelector(".pnr-res-no");
const train_no = document.querySelector(".res-train-no");
const train_name = document.querySelector(".res-train-name");
const dateOJ = document.querySelector(".res-doj");
const tr_class = document.querySelector(".res-class");
const bo_stat = document.querySelector(".res-bo-st");
const des_stat = document.querySelector(".res-des-st");
const pass_count = document.querySelector(".res-pas-count");
const ticket_fare = document.querySelector(".res-fare");
const pantry = document.querySelector(".res-pantry");
const tcancel = document.querySelector(".res-cancel");


submit_but.addEventListener("click", async(e) => {


  if (pnr_no.value.length === 10) 
  {
    console.log("bhaag");
    loading.classList.add("active");
    // console.log(pnr_no.value);
    // console.log(response_data);
    // console.log("prince");
    
    pnr_input_gayab.classList.add("active");
    console.log("kirti");
    
    const response_data = await get_pnr_data(pnr_no.value);
    // pnr_no.value='';
 
   console.log(response_data.data.data.Pnr);
    data_pnr.innerHTML =response_data.data.data.Pnr;
   train_no.innerText=response_data.data.data.TrainNo;
   train_name.innerText=response_data.data.data.TrainName;
   dateOJ.innerText=response_data.data.data.Doj;
   tr_class.innerText=response_data.data.data.Class;
//    tr_class.innerText=`${response_data.data.PassengerStatus.Coach }  ${response_data.data.PassengerStatus.Berth } `;
   bo_stat.innerText= `${response_data.data.data.BoardingStationName} (${response_data.data.data.BoardingPoint})`;
   des_stat.innerText= `${response_data.data.data.ReservationUptoName} (${response_data.data.data.ReservationUpto})`;
   pass_count.innerText=response_data.data.data.PassengerCount;
   ticket_fare.innerText=response_data.data.data.TicketFare;
   pantry.innerText=response_data.data.data.HasPantry;
   let tflag=response_data.data.data.TrainCancelledFlag;
   if(tflag=="true")
   tcancel.innerText="Cancelled";
  else{
    tcancel.innerText="Not cancelled";
  }

  }

  loading.classList.remove("active");
  hide_input.classList.add("active");
  show_out.classList.add("active");
});
