# Indian Identification API Structure

`NOTE: THIS IS JUST THE STRUCTURE NOT A RESTFUL API`

**Table of Contents**

[TOCM]

[TOC]

# Getting Started
##Prerequisites
[node js](https://nodejs.org/en/ "Node Js") - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
[express js](https://expressjs.com/ "express js") - web application framework
## Steps
1) `git clone ${this repo}`
2) `npm install`
3) `node app.js`
4) go to [localhost:6969](localhost:6969 "localhost:6969")
## Routes
### Aadhar
[localhost:6969/aadhar](localhost:6969/aadhar "localhost:6969/aadhar")
### Driving License
[localhost:6969/dl](localhost:6969/dl "localhost:6969/dl")
### PAN
[localhost:6969/pan](localhost:6969/pan "localhost:6969/pan")
###Passport
[localhost:6969/passport](localhost:6969/passport "localhost:6969/passport")
### Voter ID
[localhost:6969/voter](localhost:6969/voter "localhost:6969/voter")
# Introduction
## Digital Identity
As we know that identities in today's world are so important, for any application, we need to verify identification. this express application helps with testing of applications which need different forms of digital identification.
### Driving License


    {
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
                    "type": “P”resent”
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
            "dl_number": “dl_number”,
            "dob": "22-09-1968",
            "expiryDate": "21-09-2023",
            "father/husband": “name of husband”,
            "img": “base”_64_of_image,
            "issue_date": "28-11-2017",
            "name": “name of dl card holder”,
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
    }
### Aadhar


    {  
       "id":"<<transaction id>>",
       "env":<<environment code>>,
       "mode":"<<mode>>",
       "transaction_status":5,
       "internal_status":null,
       "transaction_attempts":<<number of attempts>>,
       "public_ip":"<<user ip address>>",
       "request_medium":"<<what was origin of request web or mobile>>",
       "response_url":"<<response url of agency>>",
       "face_match":"<<Y or N>>",
       "face_match_resp":"<<Y,N or S (if face match got a response or not) S stands for skipped>>",
       "face_match_remark":"<<in case of face_match_resp = s , Reason why face match was skipped>>",
       "face_match_txn":"<<face match transaction id>>",
       "request_consent":"<<user consent Y or N>>",
       "request_timestamp":"2019-01-22 18:33:09:602 +05:30",
       "response_timestamp":"2019-01-22 18:33:09:626 +05:30",
       "transaction_data":{  
          "BasicInfo":{  
             "Name":"<<user name>>",
             "DOB":"<<DOB>>",
             "Gender":"<<gender>>"
          },
          "Image":"<<Base 64 of user image>>",
          "AadhaarInfo":"XXXXXXXX4302",
          "AddressEnglish":"<<user address>>",
          "EmailInfo":"<<Verified or Not Verified (XML mode only)>>",
          "PhoneInfo":"<<Verified or Not Verified (XML mode only)>>",
          "FaceMatchScore":"<<Facematch Score out of 100>>",
          "UserSelfie":"<<base 64 of user selfie image>>"
       }
    }
    
### Permenant account number(PAN)


    {
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
    }
    
### Passport


    {
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
    } 
### Voter ID


    {
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
    }
