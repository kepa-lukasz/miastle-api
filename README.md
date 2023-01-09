# daily quote quiz api 
this simple api is going to return a quote in polish and 4 people of which only one will be author of quote. Same day api will returns same object, object would change every day.

Api zwraca cytat po polsku i czterech ludzi, z których tylko jeden jest autorem cytatu, Jednego dnia api będzie zwracać jeden obiekt, codziennie inny. 
## link
Api link:
  https://6glbppeslg.execute-api.eu-central-1.amazonaws.com/api/quote
## object wiev
eg.
```JSONasJs
{quote : "Sposobem na rozpoczęcie jest zaprzestanie mówienia i rozpoczęcie działania.", 
authors : [{name : "Steve Jobs", author : false}, {name : "Walt disney", author : true},{name : "Barack Obama", author : false},{name : "Elżbieta II", author : false}]}
```

## usage example
Axios get request :

```js
  Axios.get("https://6glbppeslg.execute-api.eu-central-1.amazonaws.com/api/quote")
        .then(res=>{
          console.log(res)
        }).catch(err=>{
          console.log(err)
        })
```
