/*const uuidParse = require('uuid-parse');
const bytes = uuidParse.parse('797ff043-11eb-11e1-80d6-510998755d10'); // -> <Buffer 79 7f f0 43 11 eb 11 e1 80 d6 51 09 98 75 5d 10>
console.log(bytes)
const string = uuidParse.unparse(bytes);

*/
/*
var A = {"a":"1","b":"2"}
var B = {"c":"1","d":"2"}
function jsonConcat(o1, o2) {
    for (var key in o2) {
     o1[key] = o2[key];
    }
    return o1;
   }
   
 var output = {};
output = jsonConcat(output, A);
output = jsonConcat(output, B);
console.log(output)

*/

var abc = [
  [
  {
  "id": 4,
  "accountId": "11e3d421-2eb6-11e9-a612-d108d6072963",
  "customerName": "D",
  "balance": 2000,
  "currency": "INR",
  "address": {
  "planet": "EARTH",
  "latitude": "28.476923",
  "longitude": "-82.538753"
  },
  "createdAt": "2019-02-12T11:05:13.058Z",
  "updatedAt": "2019-02-12T11:05:13.058Z"
  },
  {
  "id": 3,
  "accountId": "11e3d420-2eb6-11e9-a612-d108d6072963",
  "customerName": "C",
  "balance": 2000,
  "currency": "INR",
  "address": {
  "planet": "EARTH",
  "latitude": "28.476922",
  "longitude": "-82.538752"
  },
  "createdAt": "2019-02-12T11:05:13.058Z",
  "updatedAt": "2019-02-12T11:05:13.058Z"
  },
  {
  "id": 5,
  "accountId": "11e3d422-2eb6-11e9-a612-d108d6072963",
  "customerName": "E",
  "balance": 2000,
  "currency": "INR",
  "address": {
  "planet": "EARTH",
  "latitude": "28.476924",
  "longitude": "-82.538754"
  },
  "createdAt": "2019-02-12T11:05:13.058Z",
  "updatedAt": "2019-02-12T11:05:13.058Z"
  },
  {
  "id": 16,
  "accountId": "7617b730-300b-11e9-8643-133e51a1b757",
  "customerName": "babu pallam",
  "balance": 1000,
  "currency": "INR",
  "address": {
  "line1": "pallam",
  "line2": "pulamanthole, 679323",
  "line3": "Kerala, India"
  },
  "createdAt": "2019-02-14T03:48:59.555Z",
  "updatedAt": "2019-02-14T03:48:59.555Z"
  },
  {
  "id": 17,
  "accountId": "319b92c0-3010-11e9-8643-133e51a1b757",
  "customerName": "babu pallam",
  "balance": 1000,
  "currency": "INR",
  "address": {
  "line1": "pallam",
  "line2": "pulamanthole, 679323",
  "line3": "Kerala, India"
  },
  "createdAt": "2019-02-14T04:22:52.280Z",
  "updatedAt": "2019-02-14T04:22:52.280Z"
  },
  {
  "id": 18,
  "accountId": "5073ff20-3010-11e9-8643-133e51a1b757",
  "customerName": "babu pallam",
  "balance": 1000,
  "currency": "INR",
  "address": {
  "line1": "pallam",
  "line2": "pulamanthole, 679323",
  "line3": "Kerala, India"
  },
  "createdAt": "2019-02-14T04:23:43.890Z",
  "updatedAt": "2019-02-14T04:23:43.890Z"
  },
  {
  "id": 19,
  "accountId": "5cb0a040-3010-11e9-8643-133e51a1b757",
  "customerName": "babu pallam",
  "balance": 1000,
  "currency": "INR",
  "address": {
  "line1": "pallam",
  "line2": "pulamanthole, 679323",
  "line3": "Kerala, India"
  },
  "createdAt": "2019-02-14T04:24:04.420Z",
  "updatedAt": "2019-02-14T04:24:04.420Z"
  },
  {
  "id": 20,
  "accountId": "3002add0-3011-11e9-8643-133e51a1b757",
  "customerName": "babu pallam",
  "balance": 1000,
  "currency": "INR",
  "address": {
  "line1": "pallam",
  "line2": "pulamanthole, 679323",
  "line3": "Kerala, India"
  },
  "createdAt": "2019-02-14T04:29:58.958Z",
  "updatedAt": "2019-02-14T04:29:58.958Z"
  },
  {
  "id": 21,
  "accountId": "7dc328b0-3011-11e9-8643-133e51a1b757",
  "customerName": "babu pallam",
  "balance": 1000,
  "currency": "INR",
  "address": {
  "line1": "pallam",
  "line2": "pulamanthole, 679323",
  "line3": "Kerala, India"
  },
  "createdAt": "2019-02-14T04:32:09.486Z",
  "updatedAt": "2019-02-14T04:32:09.486Z"
  },
  {
  "id": 22,
  "accountId": "87faf920-3011-11e9-8643-133e51a1b757",
  "customerName": "babu pallam",
  "balance": 1000,
  "currency": "INR",
  "address": {
  "line1": "pallam",
  "line2": "pulamanthole, 679323",
  "line3": "Kerala, India"
  },
  "createdAt": "2019-02-14T04:32:26.546Z",
  "updatedAt": "2019-02-14T04:32:26.546Z"
  },
  {
  "id": 23,
  "accountId": "e9870cb0-3011-11e9-8643-133e51a1b757",
  "customerName": "babu pallam",
  "balance": 1000,
  "currency": "INR",
  "address": {
  "line1": "pallam",
  "line2": "pulamanthole, 679323",
  "line3": "Kerala, India"
  },
  "createdAt": "2019-02-14T04:35:10.203Z",
  "updatedAt": "2019-02-14T04:35:10.203Z"
  },
  {
  "id": 24,
  "accountId": "06fefeb0-3012-11e9-8643-133e51a1b757",
  "customerName": "babu pallam",
  "balance": 1000,
  "currency": "INR",
  "address": {
  "line1": "pallam",
  "line2": "pulamanthole, 679323",
  "line3": "Kerala, India"
  },
  "createdAt": "2019-02-14T04:35:59.643Z",
  "updatedAt": "2019-02-14T04:35:59.643Z"
  },
  {
  "id": 25,
  "accountId": "45befd80-3012-11e9-8643-133e51a1b757",
  "customerName": "babu pallam",
  "balance": 1000,
  "currency": "INR",
  "address": {
  "line1": "pallam",
  "line2": "pulamanthole, 679323",
  "line3": "Kerala, India"
  },
  "createdAt": "2019-02-14T04:37:44.920Z",
  "updatedAt": "2019-02-14T04:37:44.920Z"
  },
  {
  "id": 26,
  "accountId": "409e0340-3013-11e9-8643-133e51a1b757",
  "customerName": "babu pallam",
  "balance": 1000,
  "currency": "INR",
  "address": {
  "line1": "pallam",
  "line2": "pulamanthole, 679323",
  "line3": "Kerala, India"
  },
  "createdAt": "2019-02-14T04:44:45.812Z",
  "updatedAt": "2019-02-14T04:44:45.812Z"
  },
  {
  "id": 2,
  "accountId": "11e3ad10-2eb6-11e9-a612-d108d6072963",
  "customerName": "B",
  "balance": 960,
  "currency": "INR",
  "address": {
  "planet": "EARTH",
  "latitude": "28.476921",
  "longitude": "-82.538751"
  },
  "createdAt": "2019-02-12T11:05:13.057Z",
  "updatedAt": "2019-02-12T12:35:51.653Z"
  },
  {
  "id": 1,
  "accountId": "11e27490-2eb6-11e9-a612-d108d6072963",
  "customerName": "A",
  "balance": 3040,
  "currency": "INR",
  "address": {
  "planet": "EARTH",
  "latitude": "28.476920",
  "longitude": "-82.538750"
  },
  "createdAt": "2019-02-12T11:05:13.053Z",
  "updatedAt": "2019-02-12T12:35:51.772Z"
  },
  {
  "id": 11,
  "accountId": "02a56830-2fc8-11e9-8186-67cba16706f2",
  "customerName": "undefined undefined",
  "balance": 2000,
  "currency": "INR",
  "address": {
  "line2": "undefined, undefined",
  "line3": "undefined, undefined"
  },
  "createdAt": "2019-02-13T19:46:09.588Z",
  "updatedAt": "2019-02-13T19:46:09.588Z"
  },
  {
  "id": 12,
  "accountId": "cf467030-2fca-11e9-ab1c-3b32eedc0f7a",
  "customerName": "undefined undefined",
  "balance": null,
  "currency": "INR",
  "address": {
  "line2": "undefined, undefined",
  "line3": "undefined, undefined"
  },
  "createdAt": "2019-02-13T20:06:11.894Z",
  "updatedAt": "2019-02-13T20:06:11.894Z"
  },
  {
  "id": 13,
  "accountId": "1cc109d0-300a-11e9-8643-133e51a1b757",
  "customerName": "babu pallam",
  "balance": 1000,
  "currency": "INR",
  "address": {
  "line1": "pallam",
  "line2": "pulamanthole, 679323",
  "line3": "Kerala, India"
  },
  "createdAt": "2019-02-14T03:39:20.252Z",
  "updatedAt": "2019-02-14T03:39:20.252Z"
  },
  {
  "id": 14,
  "accountId": "3367d600-300a-11e9-8643-133e51a1b757",
  "customerName": "babu pallam",
  "balance": 1000,
  "currency": "INR",
  "address": {
  "line1": "pallam",
  "line2": "pulamanthole, 679323",
  "line3": "Kerala, India"
  },
  "createdAt": "2019-02-14T03:39:58.176Z",
  "updatedAt": "2019-02-14T03:39:58.176Z"
  },
  {
  "id": 15,
  "accountId": "65e4ae90-300b-11e9-8643-133e51a1b757",
  "customerName": "babu pallam",
  "balance": 1000,
  "currency": "INR",
  "address": {
  "line1": "pallam",
  "line2": "pulamanthole, 679323",
  "line3": "Kerala, India"
  },
  "createdAt": "2019-02-14T03:48:32.378Z",
  "updatedAt": "2019-02-14T03:48:32.378Z"
  }
  ],
  [
  {
  "id": 1,
  "accountId": "11e3ad10-2eb6-11e9-a612-d108d6072963",
  "cardNo": "4243898868120318",
  "cardExpiryMonth": 6,
  "cardExpiryYear": 2022,
  "cardVerificationValue": "275",
  "createdAt": "2019-02-12T11:05:13.207Z",
  "updatedAt": "2019-02-12T11:05:13.207Z"
  },
  {
  "id": 2,
  "accountId": "11e27490-2eb6-11e9-a612-d108d6072963",
  "cardNo": "4493227621863476",
  "cardExpiryMonth": 6,
  "cardExpiryYear": 2022,
  "cardVerificationValue": "555",
  "createdAt": "2019-02-12T11:05:13.214Z",
  "updatedAt": "2019-02-12T11:05:13.214Z"
  },
  {
  "id": 3,
  "accountId": "11e3d422-2eb6-11e9-a612-d108d6072963",
  "cardNo": "4632885445769070",
  "cardExpiryMonth": 6,
  "cardExpiryYear": 2022,
  "cardVerificationValue": "100",
  "createdAt": "2019-02-12T11:05:13.214Z",
  "updatedAt": "2019-02-12T11:05:13.214Z"
  },
  {
  "id": 4,
  "accountId": "11e3d420-2eb6-11e9-a612-d108d6072963",
  "cardNo": "4769382981639854",
  "cardExpiryMonth": 6,
  "cardExpiryYear": 2022,
  "cardVerificationValue": "325",
  "createdAt": "2019-02-12T11:05:13.214Z",
  "updatedAt": "2019-02-12T11:05:13.214Z"
  },
  {
  "id": 5,
  "accountId": "11e3d421-2eb6-11e9-a612-d108d6072963",
  "cardNo": "4753565383254953",
  "cardExpiryMonth": 6,
  "cardExpiryYear": 2022,
  "cardVerificationValue": "419",
  "createdAt": "2019-02-12T11:05:13.214Z",
  "updatedAt": "2019-02-12T11:05:13.214Z"
  },
  {
  "id": 11,
  "accountId": "02a56830-2fc8-11e9-8186-67cba16706f2",
  "cardNo": "47535653832549533",
  "cardExpiryMonth": 7,
  "cardExpiryYear": 2042,
  "cardVerificationValue": "319",
  "createdAt": "2019-02-13T19:46:11.406Z",
  "updatedAt": "2019-02-13T19:46:11.406Z"
  },
  {
  "id": 12,
  "accountId": "cf467030-2fca-11e9-ab1c-3b32eedc0f7a",
  "cardNo": null,
  "cardExpiryMonth": null,
  "cardExpiryYear": null,
  "cardVerificationValue": null,
  "createdAt": "2019-02-13T20:06:12.038Z",
  "updatedAt": "2019-02-13T20:06:12.038Z"
  },
  {
  "id": 13,
  "accountId": "1cc109d0-300a-11e9-8643-133e51a1b757",
  "cardNo": "8898678945678765",
  "cardExpiryMonth": 4,
  "cardExpiryYear": 19,
  "cardVerificationValue": "344",
  "createdAt": "2019-02-14T03:39:21.288Z",
  "updatedAt": "2019-02-14T03:39:21.288Z"
  },
  {
  "id": 14,
  "accountId": "3367d600-300a-11e9-8643-133e51a1b757",
  "cardNo": "8898678945678765",
  "cardExpiryMonth": 4,
  "cardExpiryYear": 19,
  "cardVerificationValue": "344",
  "createdAt": "2019-02-14T03:39:58.214Z",
  "updatedAt": "2019-02-14T03:39:58.214Z"
  },
  {
  "id": 15,
  "accountId": "65e4ae90-300b-11e9-8643-133e51a1b757",
  "cardNo": "8898678945678765",
  "cardExpiryMonth": 4,
  "cardExpiryYear": 19,
  "cardVerificationValue": "344",
  "createdAt": "2019-02-14T03:48:32.860Z",
  "updatedAt": "2019-02-14T03:48:32.860Z"
  },
  {
  "id": 16,
  "accountId": "7617b730-300b-11e9-8643-133e51a1b757",
  "cardNo": "8898678945678765",
  "cardExpiryMonth": 4,
  "cardExpiryYear": 19,
  "cardVerificationValue": "344",
  "createdAt": "2019-02-14T03:48:59.588Z",
  "updatedAt": "2019-02-14T03:48:59.588Z"
  },
  {
  "id": 17,
  "accountId": "319b92c0-3010-11e9-8643-133e51a1b757",
  "cardNo": "8898678945678765",
  "cardExpiryMonth": 4,
  "cardExpiryYear": 19,
  "cardVerificationValue": "344",
  "createdAt": "2019-02-14T04:22:53.508Z",
  "updatedAt": "2019-02-14T04:22:53.508Z"
  },
  {
  "id": 18,
  "accountId": "5073ff20-3010-11e9-8643-133e51a1b757",
  "cardNo": "8898678945678765",
  "cardExpiryMonth": 4,
  "cardExpiryYear": 19,
  "cardVerificationValue": "344",
  "createdAt": "2019-02-14T04:23:45.402Z",
  "updatedAt": "2019-02-14T04:23:45.402Z"
  },
  {
  "id": 19,
  "accountId": "5cb0a040-3010-11e9-8643-133e51a1b757",
  "cardNo": "8898678945678765",
  "cardExpiryMonth": 4,
  "cardExpiryYear": 19,
  "cardVerificationValue": "344",
  "createdAt": "2019-02-14T04:24:04.487Z",
  "updatedAt": "2019-02-14T04:24:04.487Z"
  },
  {
  "id": 20,
  "accountId": "3002add0-3011-11e9-8643-133e51a1b757",
  "cardNo": "8898678945678765",
  "cardExpiryMonth": 4,
  "cardExpiryYear": 19,
  "cardVerificationValue": "344",
  "createdAt": "2019-02-14T04:29:59.076Z",
  "updatedAt": "2019-02-14T04:29:59.076Z"
  },
  {
  "id": 21,
  "accountId": "7dc328b0-3011-11e9-8643-133e51a1b757",
  "cardNo": "8898678945678765",
  "cardExpiryMonth": 4,
  "cardExpiryYear": 19,
  "cardVerificationValue": "344",
  "createdAt": "2019-02-14T04:32:09.811Z",
  "updatedAt": "2019-02-14T04:32:09.811Z"
  },
  {
  "id": 22,
  "accountId": "87faf920-3011-11e9-8643-133e51a1b757",
  "cardNo": "8898678945678765",
  "cardExpiryMonth": 4,
  "cardExpiryYear": 19,
  "cardVerificationValue": "344",
  "createdAt": "2019-02-14T04:32:26.903Z",
  "updatedAt": "2019-02-14T04:32:26.903Z"
  },
  {
  "id": 23,
  "accountId": "e9870cb0-3011-11e9-8643-133e51a1b757",
  "cardNo": "8898678945678765",
  "cardExpiryMonth": 4,
  "cardExpiryYear": 19,
  "cardVerificationValue": "344",
  "createdAt": "2019-02-14T04:35:10.683Z",
  "updatedAt": "2019-02-14T04:35:10.683Z"
  },
  {
  "id": 24,
  "accountId": "06fefeb0-3012-11e9-8643-133e51a1b757",
  "cardNo": "8898678945678765",
  "cardExpiryMonth": 4,
  "cardExpiryYear": 19,
  "cardVerificationValue": "344",
  "createdAt": "2019-02-14T04:35:59.783Z",
  "updatedAt": "2019-02-14T04:35:59.783Z"
  },
  {
  "id": 25,
  "accountId": "45befd80-3012-11e9-8643-133e51a1b757",
  "cardNo": "8898678945678765",
  "cardExpiryMonth": 4,
  "cardExpiryYear": 19,
  "cardVerificationValue": "344",
  "createdAt": "2019-02-14T04:37:45.002Z",
  "updatedAt": "2019-02-14T04:37:45.002Z"
  },
  {
  "id": 26,
  "accountId": "409e0340-3013-11e9-8643-133e51a1b757",
  "cardNo": "8898678945678765",
  "cardExpiryMonth": 4,
  "cardExpiryYear": 19,
  "cardVerificationValue": "344",
  "createdAt": "2019-02-14T04:44:46.222Z",
  "updatedAt": "2019-02-14T04:44:46.222Z"
  }
  ]
  ];
  //console.log(abc[1])
var users = abc[0];
var cres = abc[1];
var regLogs =[];

function jsonConcat(o1, o2) {
  for (var key in o2) {
   o1[key] = o2[key];
  }
  return o1;
 }

users.forEach((i)=>{
  var j = cres.find((obj,index,cres)=>{
    return (obj.accountId == i.accountId)
  });
  i =jsonConcat(i,j);
  regLogs.push(i);
});
console.log(regLogs)
