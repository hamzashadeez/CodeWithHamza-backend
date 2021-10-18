import { initializeApp } from "firebase-admin/app";
import admin from "firebase-admin";
import { Firestore, getFirestore } from "firebase-admin/firestore";

const confi = {
    "type": "service_account",
    "project_id": "codewithhamza-95049",
    "private_key_id": "d4f241c156dd2b18526a22c39ea9707c088ac6fc",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCyEGcnb/spf89T\nGVHZHmf+K6YLCt16nPoDroNdhHhpiuu72un66sXLFXDhveIqddqq1wbfyHDUHjuc\nRgraLO4e6zV9aOwjjS8w+MBnlFRJXWPGUnBA3ZZ3wjWngpSlOFVA1unpuTN/zB6W\nBOfzG5ulbF3Y1XjvVqo3posSi2L0UepBoyNfNhJQ68REeBnS5MiiEvoCyAcgzRDm\nljkhAC8gPAHhyFaXmr9dg+dxJcFZ/N0Zv5/OhcJqSU4WjI24sOGCiuEskuVqWRw/\nBwdLHMQSOxmOO76gQwJ0sBDM4loJFs6qS7TK1PMWUQmhbFhY7bbgZvy0HZBg36SY\nGddYNO0xAgMBAAECggEAA84HMGBw4VyPv5NAS4GeHwrN7HLQWj/uPbGQsRf3Pk+x\ntgNB64XxMUo2beeefgyj5q05fiUbiSbsGAZAUfqsQ328AuX4WK+X6w0y/45EQ/8N\noRllHvwbAeF+g6vldjiWso/z/P5a23SEe3XRCx+iVJy7VuUl54380XdEY684DVAN\nwbycnzy+cTrf/4jtbfeVag0vhehQxe6fuwkVyY0IUboE3vMt31Y4KTPs4LBh4V3i\n8thf9ht4AOMIu46ohtA4topa1JrBjU6gtew6cp7K+ewQSPKpgC7WLPNjt+hvhdHX\nMho6zFJ2TcZ/cBauiS37VFKoY8amOMoGRLZkVPKgWwKBgQDnfe/ZgBADcJVAgihx\nOvKzI2RYpPPkLYvLGtR1nW+OP1rw+QNKK1GLzAdHkqHPC5FAROjEXkBrN16xuZwQ\nH+6QrzQA328uOPOA7CvJ26CzHodZ+l4Ey80iFipRTq5TBtC0Y6SetaOgVT8AHpEs\noCXkNZF9ZkYvANVhPCS/lWjiXwKBgQDE6mzSuEV37exxj8Wbhg7yZSfpIGKwSiUN\nv3gfvZ8eVGIcj1SMulEIPQsrp5zn1BcodI/BX4td5dfhp8oOC6uU5HM5F9dEQVwf\nLLvKPQ1k5S4HNlzd8E7DSV2YuDeOW1nvQ+l4ZOxNSyPQ5DqcbLdsXD2TCpKT1F8W\nmcpt4Zb6bwKBgQCZMkvHiauPSzNKxJhVDujMynA/BbLt34JzACd4Sp8n6R+a94BI\n1lAaDwUGRbDVn1cZzECqq6FAEx2UyjvQpAEyOPBWX4dpdIEZYbI83R8FSv/R+RG9\nZM41b6vDsSlGgu0dZA/uhFBr695Miu4SNU2+MAE/lq59rrSHq9C6BPurSwKBgCvN\nQZu15a4BvKCeLISl01lT6wbOb2VreMaQGrZkxapHdvOHZnVPVIsSmROC20IuSWB0\nXS3UhPnEELtfSXDKY8Zg8sh2ZyoFp+o/Vx5rajlRSWXNT+cGd161SR6Zi7Ic2+p/\nHsXrHS0sU7E5s1fsTvjJo+C7b1N24Bf06bR7g8v9AoGBANW634u3/q25P7PTeXw3\nCVSmaUc0yTP6oKxaqhWCNr/phCthL+L5BYGkgLNxgKn8ob7oxjQ7EhNvtZuDjVR1\ncKFAdbsndMCGKzduVM+JD0VDMsae12AxIp6Cl6f+jriR4nkzP8mF7InnaHkxZ0ka\n+oFzDWhAdvqY4BIfQspgY9sZ\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-pkiqu@codewithhamza-95049.iam.gserviceaccount.com",
    "client_id": "116838968998923512911",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-pkiqu%40codewithhamza-95049.iam.gserviceaccount.com"
  }
  


admin.initializeApp({
  credential: admin.credential.cert(confi),
});

const db = getFirestore();

export const read = async()=> {
  const citiesRef = db.collection("users");

  await citiesRef.doc("SF").set({
    name: "San Francisco",
    state: "CA",
    country: "USA",
    capital: false, 
    population: 860000,
  });
}


export {db}