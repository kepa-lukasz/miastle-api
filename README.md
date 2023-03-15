**⚠ WARNING: App doesn't work because of lack of money for server :(**  

# Zgadnij, w jakim województwie leży to miasto!
api zwraca miasto, listę województw (unikanie literówek/niepotrzebnych błędów w pisowni), lub kierunek, w którym znajduje się szukane województwo względem proponowanego

## linki
###    miasto:
  GET https://neul0yywx5.execute-api.us-east-2.amazonaws.com/get/randomcity
###    lista województw:
  GET https://neul0yywx5.execute-api.us-east-2.amazonaws.com/get/wojewodztwa
###    kierunek:
  POST https://neul0yywx5.execute-api.us-east-2.amazonaws.com/post/guess


## e.g.
### Axios POST request:
```js
   Axios.post("https://neul0yywx5.execute-api.us-east-2.amazonaws.compost/guess", {attempt : "lubuskie", city : "Głubczyce"})
   .then((res)=>{
            console.log(res.data.result);
        })
   .catch((err)=>{
            console.log(err);
        })
```
### Axios GET request:
```js
   Axios.get("https://neul0yywx5.execute-api.us-east-2.amazonaws.com/get/randomcity")
   .then((res)=>{
              console.log(res.data.city);
        })
   .catch((err)=>{
            console.log(err);
        })
```
