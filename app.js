
const express = require('express')
const app = express()
const port = 3000



app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send('{"status":"Server Running"}')
})

app.get('/aadhar/', function (req, res) {
    res.setHeader('Content-Type', 'application/json');

    var AadharName = "Pranjal Jain"
    var AadharNum = "466330413405"

var aadharSkeleton=`{  
  "id":"8aefba88-07fd-441a-9587-62b0fac9a668",
  "env":1,
  "mode":"pdf",
  "transaction_status":5,
  "internal_status":null,
  "public_ip":"103.3.40.138",
  "request_consent":"Y",
  "request_timestamp":"2019-03-06 11:21:24:549 +05:30",
  "response_timestamp":"2019-03-06 11:21:27:265 +05:30",
  "result":{  
     "SignatureData":{  
        "documentCoverage":true,
        "integrityCheck":true,
        "signerLocation":null,
        "signerName":"DS UNIQUE IDENTIFICATION AUTHORITY OF INDIA 03",
        "signingDate":"Wed Jan 09 16:12:17 IST 2019",
        "signingReason":null,
        "error":false,
        "errorMessage":null,
        "revision":1
     },
     "BasicInfo":{  
        "Name":"`+AadharName+`",
        "DOB":"03-10-XXXX",
        "Gender":"F"
     },
     "Image":"Base 64 of image found", 
     "AadhaarInfo":"`+AadharNum+`",
     "AddressEnglish":"address"
  }
}`

  res.send(aadharSkeleton)
})

app.get('/dl/', function (req, res) {
    res.setHeader('Content-Type', 'application/json');

    var dlSkeleton=`{
      "id": "80bb7b10-9124-4d7e-8bc2-800f2c33be71",
      "env": 1,
      "request_timestamp": "2020-02-11 01:12:45:344 +05:30",
      "response_timestamp": "2020-02-11 01:12:52:425 +05:30",
      "transaction_status": 1,
      "result": {
          "address": [
              {
                  "addressLine1": "FLAT NO 302 BLOCK-1 CONFIDENT LEO SARJAPUR",
                  "completeAddress": "FLAT NO 302 BLOCK-1 CONFIDENT LEO SARJAPUR MN RD NEAR DECATHLON HADOSIDsxsDAPURA BLAGURU SOUTH,BANGALORE,KA",
                  "country": "India",
                  "district": "BLAGURU SOUTH,BANGALORE,KA",
                  "pin": "560135",
                  "state": "Karnataka",
                  "type": "Present"
              },
              {
                  "addressLine1": "FLAT NO 302 BLOCK-1 CONFIDENT LEO SARJAPUR",
                  "completeAddress": "FLAT NO 302 BLOCK-1 CONFIDENT LEO SARJAPUR MN RD NEAR DECATHLON HADOSIDsxsDAPURA BLAGURU SOUTH,BANGALORE,KA",
                  "country": "India",
                  "district": "BLAGURU SOUTH,BANGALORE,KA",
                  "pin": "560135",
                  "state": "Karnataka",
                  "type": "Permanent"
              }
          ],
          "blood_group": "U",
          "cov_details": [
              {
                  "cov": "LMV",
                  "expiryDate": "",
                  "issueDate": "28-11-2017"
              }
          ],
          "dl_number": "dl_number",
          "dob": "22-09-1968",
          "expiryDate": "21-09-2023",
          "father/husband": "name of husband",
          "img": "base_64_of_image",
          "issue_date": "28-11-2017",
          "name": "name of dl card holder",
          "state": "Karnataka",
          "status": "Active",
          "statusDetails": {
              "from": "",
              "remarks": "",
              "to": ""
          },
          "validity": {
              "nonTransport": {
                  "from": "22-09-2018",
                  "to": "21-09-2023"
              },
              "transport": {
                  "from": "",
                  "to": ""
              }
          }
      },
      "response_msg": "Success",
      "response_code": "101"
  }`

  res.send(dlSkeleton)
})

app.get('/pan/', function (req, res) {
    res.setHeader('Content-Type', 'application/json');

    var panSkeleton=`{
      "id": "bbe85f62-6be0-48ee-9864-8f1308ccb9a9",
      "response_code": 1,
      "data": [
          {
              "pan_number": "<pan_number_here>",
              "pan_status": "VALID",
              "last_name": "<last_name_here>",
              "first_name": "<first_name_here>",
              "middle_name": "<middle_name_here>",
              "pan_holder_title": "<Shri/MR/MRS etc>",
              "pan_last_updated": "<DD/MM/YYYY>"
          }
      ],
      "pan_count": 1,
      "pan_success_count": 1,
      "transaction_status": 1,
      "request_timestamp": "2018-06-21 14:23:06:109 +05:30",
      "response_timestamp": "2018-06-21 14:23:08:295 +05:30"
  }`

  res.send(panSkeleton)
})

app.get('/voter/', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var panSkeleton=`{
      "env": 1,
      "id": "2c63b3cf-75bc-444a-b49c-e8b36a91cac0",
      "request_timestamp": "2019-12-20 11:55:10:810 +05:30",
      "response_code": "101",
      "response_msg": "Success",
      "response_timestamp": "2019-12-20 11:55:21:717 +05:30",
      "result": {
          "ac_name": "Vikasnagar",
          "ac_name_v1": "विकासनगर",
          "ac_no": "16",
          "age": 24,
          "dist_name_v1": "देहरादून",
          "district": "Dehradun",
          "district_code": "13",
          "email_id": "",
          "epic_no": "NRB0399436",
          "gender": "M",
          "house_no": "278A",
          "id": "S280160053010315",
          "last_update": "Tue Jun 18 22:17:20 IST 2019",
          "mob_no": "9412975205",
          "name": "Mohak Talwal ",
          "name_v1": "मोहक तलवाल  ",
          "name_v2": "",
          "name_v3": "",
          "part_name": "Vikasnagar  West Part R.No.3",
          "part_name_v1": "विकासनगर पश्‍चिम भाग क.नं.3",
          "part_no": "53",
          "pc_name": "Tehri Garhwal",
          "pc_name_v1": "टिहरी गढ़वाल",
          "pc_no": "1",
          "ps_lat_long": "30.42012,77.68142",
          "ps_lat_long_0_coordinate": 30.42012,
          "ps_lat_long_1_coordinate": 77.68142,
          "ps_name": "Shri Hoshira Singh Buddhumal Jain Girls Inter College vikasnagar,  p.o. vikasnagar,teshil- vikasnagar. district- dehradun 248198",
          "ps_name_v1": "श्री होशियार सिंह बुद्धुमल्‍ल जैन बालिका  इण्‍टर कालेज विकासनगर, पो0 ओ0 विकासनगर,  तहसील- विकासनगर, जिला- देहरादून 248198",
          "ps_no": "53",
          "rln_name": "Naresh Talwar ",
          "rln_name_v1": "नरेश तलवार  ",
          "rln_name_v2": "",
          "rln_name_v3": "",
          "rln_type": "F",
          "section_no": "1",
          "slno_inpart": "315",
          "st_code": "S28",
          "state": "Uttarakhand",
          "status": "N"
      },
      "transaction_status": 1
  }`

  res.send('Voter ID')
})

app.get('/passport/', function (req, res) {
    res.setHeader('Content-Type', 'application/json');

    var passportSkeleton=`{
      "name": "<< Name on passport >>",
      "last_name": "<< Last Name >>",
      "dob": "<< Date of birth  dd/mm/yyyy>>",
      "doe": "<< Expiration Date dd/mm/yyyy>>",
      "gender": "<< M , F or T >>",
      "passport_no": "<< Passport Number>>",
      "type": "<< Passport Type >>",
      "country": "<< Country Code >>",
        "consent":"<< Y or N >>",
        "consent_text":"<< Consent Message >>"
  }`
  
  res.send(passportSkeleton)
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

