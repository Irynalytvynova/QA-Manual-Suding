const get_api_res_btn = document.getElementById('get_api_res_btn');
const api_result = document.getElementById('api_result');
const api_results = document.getElementById('api_results')

get_api_res_btn.addEventListener('click', getAPI);


let endPoint = 'http://api.open-notify.org/iss-now.json';

    function getAPI(){
        fetch(endPoint, {
		method: 'GET'
	})
    .then(res => res.json())
    .then(data=> {
        api_result.innerHTML=data.iss_position.longitude;
        api_results.innerHTML=data.iss_position.latitude;
    });
    
        
  
}