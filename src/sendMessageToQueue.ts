import axios from 'axios';

const username:string = "guest";
const password:string = "guest";
const routingKey:string = "ClioKey";   //Binding key for queue
const exchangeName:string = "Clio Exchange";
// const vHostName:string = "%2f";  //this is for default host
const vHostName:string = "Clio";
const baseUrl:string = "http://localhost:15672/api/exchanges/";

const url:string = baseUrl+vHostName+"/"+exchangeName+"/publish";
const authCode:string = username +":" +password;
​
export class sendMessageToQueue {
​
    send(data:any) {
		const msgBody:any = `{"properties":{"content-type":"application/json"},"routing_key":${JSON.stringify(routingKey)},"payload":'${JSON.stringify(data)}',"payload_encoding":"string"}`;
		const OPTIONS :any = {
			body: msgBody,
			headers: {
				Authorization: "Basic " + Buffer.from(authCode).toString('base64'),
				content_Type: "application/JSON"
			},
		};
		axios.post(url, msgBody,
			{
				headers: {
					Authorization: "Basic " + Buffer.from(authCode).toString('base64'),
					content_Type: "application/JSON"
				}
​
			})
			.then((response: any) => {
				console.log(response.data);
			})
			.catch((Error: any) => {
				console.log('error : ' + Error);
			});
	};

}