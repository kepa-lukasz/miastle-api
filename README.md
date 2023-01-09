# daily quote quiz api
this simple api is going to return a quote and 4 people of wchoch only one will be author of quote. Same day api will returns same object, object would change every day.
## link
Api link:
  https://6glbppeslg.execute-api.eu-central-1.amazonaws.com/api/quote
## object wiev
eg.
```JSONasJs
{quote : "The way to get started is to quit talking and begin doing.", 
authors : [{name : "Steve Jobs", author : false}, {name : "Walt disney", author : true},{name : "Barack Obama", author : false},{name : "Elisabeth II", author : false}]}
```

## usage example
Axios get request egzample :

```js
  Axios.get("https://6glbppeslg.execute-api.eu-central-1.amazonaws.com/api/quote")
        .then(res=>{
          console.log(res)
        }).catch(err=>{
          console.log(err)
        })
```
