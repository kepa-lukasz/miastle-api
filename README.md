# Zgadnij, w jakim województwie leży to miasto
api zwraca miasto, listę województw (unikanie literówek/niepotrzebnych błędów w pisowni), lub kierunek, w którym znajduje się szukane województwo względem proponowanego

## linki
###    miasto:
  GET https://wbhiy9wgrg.execute-api.us-east-2.amazonaws.com/get/randomcity
###    lista województw:
  GET https://wbhiy9wgrg.execute-api.us-east-2.amazonaws.com/get/wojewodztwa
###    kierunek:
  POST https://wbhiy9wgrg.execute-api.us-east-2.amazonaws.com/api/guess


## e.g.
### Axios POST request :
```js
   Axios.post("https://wbhiy9wgrg.execute-api.us-east-2.amazonaws.com/post/guess", {attempt : "lubuskie", city : "Głubczyce"})
   .then((res)=>{
            console.log(res.data.result);
        })
   .catch((err)=>{
            console.log(err);
        })
```
### Axios GET request :
```js
   Axios.post("http://localhost:1200/api/randomcity")
   .then((res)=>{
              console.log(res.data.city);
        })
   .catch((err)=>{
            console.log(err);
        })
```
