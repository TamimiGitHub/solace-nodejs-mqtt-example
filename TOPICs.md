# Topic Hierarchy

## Publish Topics
---
### `iot/${config.username}/register`   
-- Open your trading account    
-- Payload: `name={name} password={pwd}`    
e.g. 
```
name=tamimi password=123
```
---
### `iot/${config.username}/order/buy `   
-- Buy stocks   
-- Payload: `name={name} password={pwd} {ticker}={amount}`    
e.g. 
```
name=tamimi password=123 GME=10
```
---
### `iot/${config.username}/order/sell `    
-- Sell stocks    
-- Payload: `name={name} password={pwd} {ticker}={amount}`    
e.g. 
```
name=tamimi password=123 GME=10
```

## Subscribe Topics
---

### `iot/${config.username}/stock/{stock_name}`   
-- Shows different stock  prices    
-- Payload: `NA`    

---
### `iot/${config.username}/etf/{etf_name} `    
-- Shows different ETF prices   
-- Payload: NA    

---
### `iot/${config.username}/crypto/{crypto_name} `    
-- Shows different crypto prices
-- Payload: NA

e.g   
iot/${config.username}/stock/# --> Gives you all stocks   
iot/${config.username}/stock/N+ --> Get all stocks starting with N    