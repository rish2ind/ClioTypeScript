import { DataList } from './responses/BankAccount';
import {Services} from './services';
import {sendMessageToQueue} from './sendMessageToQueue';
let svc = new Services();

    export class RequestOrganizer{
        startProcess(){
            let svcRQ = new sendMessageToQueue();
            // *****************************  Account List  ********************** //
            var finalAccountList : any = [];
        /*    svc.getAccounts((dataList : any) => {
                console.log('This is account data : ', dataList.data[0].name);
                for(var i = 0; i< dataList.data.length; i++){
                    finalAccountList.push({
                        "name" : dataList.data[i].name,
                        "id" : dataList.data[i].id,
                        "account_number" : dataList.data[i].account_number,
                        "type" : dataList.data[i].type
                    });
                }
                var currentDate = new Date();
                var obj = {
                    metadata : {
                        entity : "BANK_ACCOUNT",
                        operation : "CREATE",
                        timestamp : currentDate,
                        source : "smai-qb-service",
                        destination : 'smai-business-service',
                        bussinessId : '980e48bc-102d-4cd1-9382-3231381e5a03',
                        
                    },
                    data : finalAccountList
                };
                console.log(obj);
                svcRQ.send(obj);
            }); */


            // ***********************  Contact List *******************  //
    /*        var finalContactList : any = [];
            svc.getContacts((contactList : any) => {
                let svcRQ = new sendMessageToQueue();
            //    console.log('This is contact Data : ', contactList.data[0].first_name);
                console.log('This is the length of list : ', contactList.data.length);
                for(var i = 0; i<contactList.data.length; i++){
                    var addressData = JSON.parse(JSON.stringify(contactList.data[i].addresses));
              
                    finalContactList.push({
                        "name" : contactList.data[i].name,
                        "isSupplier" : false,
                        "isCustomer" : true,
                        "isEmployee" : false,
                        "active" : true,
                        "contactAddress" : JSON.parse(JSON.stringify(addressData)),
                        "contactPhone" : contactList.data[i].phone_numbers
                        
                    }); 
                 //   console.log('Contact List : ', res.data.data[i].name)
             //    finalContactList.push(contactDetails);
                } 
                var currentDate = new Date();
                var obj = {
                    metadata : {
                        entity : "CONTACT",
                        operation : "CREATE",
                        timestamp : currentDate,
                        source : "smai-qb-service",
                        destination : 'smai-business-service',
                        bussinessId : '980e48bc-102d-4cd1-9382-3231381e5a03',
                        
                    },
                    data : finalContactList
                };
                console.log(obj);
                svcRQ.send(obj);
            })  */


            // ***********************   Bill List ********************* //
      /*      var finalBillList : any = [];
            svc.getBills((billList: any)=> {
                console.log('This is bill data : ', billList);
                for(var i = 0; i< billList.data.length; i++){
                    finalBillList.push({
                        "number" : billList.data[i].number,
                        "date" : billList.data[i].created_at,
                        "dueDate" : billList.data[i].due_at,
                        "shipDate" : null,
                        "contactID" : billList.data[i].client.id,
                        "totalLineItem" : null,
                        "amount" : null,
                        "balance" : billList.data[i].balance,
                        "totalTax" : billList.data[i].tax_sum,
                        "platformId" : null,
                        "type" : billList.data[i].type,
                        "lines" : null
                    });
                }
             //   console.log('This is bill data : ' , billList);
                var currentDate = new Date();
                var obj = {
                    metadata : {
                        entity : "BILLS",
                        operation : "CREATE",
                        timestamp : currentDate,
                        source : "smai-qb-service",
                        destination : 'smai-business-service',
                        bussinessId : '980e48bc-102d-4cd1-9382-3231381e5a03',
                        
                    },
                    data : finalBillList
                };
                console.log('This is final bill list : ', obj);
                svcRQ.send(obj);
            })  
        */

            //************ Activity List ************************** //
            var finalActivityList: any = [];
            svc.getActivities((activityList: any) => {
                console.log('This is acitvity : ', activityList);
                for(var i = 0; i< activityList.data.length; i++){
                    finalActivityList.push({
                        "type" : activityList.data[i].type,
                        "price" : activityList.data[i].price,
                        "note" : activityList.data[i].note,
                        "date" : activityList.data[i].date
                    });
                }
                var currentDate = new Date();
                var obj = {
                    metadata : {
                        entity : "ACTIVITIES",
                        operation : "CREATE",
                        timestamp : currentDate,
                        source : "smai-qb-service",
                        destination : 'smai-business-service',
                        bussinessId : '980e48bc-102d-4cd1-9382-3231381e5a03',
                        
                    },
                    data : finalActivityList
                };
                console.log('This is final activity list : ', obj);
                svcRQ.send(obj);
            })

            // *********************    Line Item List   ********************* //
       /*     var finalLineItemList: any = [];
            svc.getLineItems((lineItemsList: any) => {
                console.log('This is lineItems : ', lineItemsList);
                for(var i = 0; i< lineItemsList.data.length; i++){
                    finalLineItemList.push({
                        "description" : lineItemsList.data[i].description,
                        "id" : lineItemsList.data[i].id,
                        "price" : lineItemsList.data[i].price,
                        "quantity" : lineItemsList.data[i].quantity
                    });
                }
                var currentDate = new Date();
                var obj = {
                    metadata : {
                        entity : "LINE_ITEMS",
                        operation : "CREATE",
                        timestamp : currentDate,
                        source : "smai-qb-service",
                        destination : 'smai-business-service',
                        bussinessId : '980e48bc-102d-4cd1-9382-3231381e5a03',
                        
                    },
                    data : finalLineItemList
                };
                console.log('This is final LINE ITEMS list : ', obj);
                svcRQ.send(obj);
            })*/
        }
    }