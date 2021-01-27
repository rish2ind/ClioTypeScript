import axios from 'axios';
import { DataList } from './responses/BankAccount';
export class Services{
   getAccounts(cb: (accountList: DataList) => any){
        try{
            axios.get('https://app.clio.com/api/v4/bank_accounts.json?fields=name,id,account_number,type', {
                headers: {
                    Authorization: "Bearer 7873-VgdAluK0fiVrZgarRkKG0YXnMRsPaRWUjf3"
                }
            })
            .then((response: any) => {
                var result = response.data;
                let account = Object.assign(new DataList(), result);
                console.log('Processing Account Data');
                cb(account);
            })
            .catch((Error: any) => {
                console.log('error : ' , Error);
            });
        }
        catch(err){ }
   }
   getContacts(cb: (contactList: any) => any){
       try{
           axios.get('https://app.clio.com/api/v4/contacts.json?fields=first_name,name,id,addresses{id,street,city,province,postal_code,country},phone_numbers{id,number}', {
               headers:{
                Authorization: "Bearer 7873-VgdAluK0fiVrZgarRkKG0YXnMRsPaRWUjf3"
               }
           })
           .then((response: any) => {
               var result = response.data;
          //     let contact = Object.assign(new )
                cb(result);
           })
           .catch((Error: any) => {
               console.log('error : ', Error);
           });
       }
       catch(err) { }
   }
   getBills(cb: (billList: any) => any){
        try{
            axios.get('https://app.clio.com/api/v4/bills.json?fields=number,created_at,due_at,client{id},balance,tax_sum,type',{
                headers:{
                    Authorization: "Bearer 7873-VgdAluK0fiVrZgarRkKG0YXnMRsPaRWUjf3"
                }
            })
            .then((response: any) => {
                var result = response.data;
                cb(result);
            })
            .catch((Error: any) => {
                console.log('Error : ', Error);
            });
        }
        catch(err) { }
   }
   getActivities(cb: (activityList: any) => any){
       try{
           axios.get('https://app.clio.com/api/v4/activities.json?fields=type,price,note,date', {
               headers:{
                Authorization: "Bearer 7873-VgdAluK0fiVrZgarRkKG0YXnMRsPaRWUjf3"
               }
           })
           .then((response: any) => {
               var result = response.data;
               cb(result);
           })
           .catch((Error: any) => {
               console.log('Error : ', Error);
           });
       }
       catch(err){ }
   }
   getLineItems(cb: (lineItemsList: any) => any){
       try{
           axios.get('https://app.clio.com/api/v4/line_items.json?fields=description,id,price,quantity', {
            headers:{
                Authorization: "Bearer 7873-VgdAluK0fiVrZgarRkKG0YXnMRsPaRWUjf3"
               }
           })
           .then((response: any) => {
               var result = response.data;
               cb(result);
           })
           .catch((Error: any) => {
               console.log('Error : ', Error );
           });
       }
       catch(err) { }
   }
}