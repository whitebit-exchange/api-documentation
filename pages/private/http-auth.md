# Private HTTP API Authentication

### How to use:

1. Go to your account on [whitebit.com/settings/api](https://whitebit.com/settings/api).
2. Select the appropriate configuration tab for your API keys. Different API keys allow access to different API calls.
3. Generate an API key.
4. Enable IP restrictions by specifying up to 5 trusted IPs _(optional, **recommended**)_
5. Enable Endpoint access restrictions. Select only those endpoints, that you are going to use and click "Apply" button.

### Requirements:

Auth request should be using `POST` method and should include:

1. [Body data](#body-data)
2. [Headers](#headers)

### Body data

**JSON** that includes:

1. **'request'** - a request path without the domain name. Example: `'/api/v4/trade-account/balance'`.
2. [**'nonce'**](./../glossary.md#nonce) - a number that is always **greater** than the previous request’s nonce number. Example: `'1594297865'`. A good method of creating a **nonce** is to use the unix timestamp in milliseconds. This way you'll always get an incrementing number, but make sure not to send two API calls at the same time, otherwise their nonce will be identical.
3. **'nonceWindow'** - boolean. In cases when you can't guarantee consecutive increment of [**nonce**](./../glossary.md#nonce) you can use **nonceWindow** field. If it set to true nonce validation will be work a bit different. You have to passed nonce as unix timestamp in milliseconds. The api will validate that your nonce enter the range of current time +/- 5 seconds (5000 milliseconds). Also your nonce will be checked as unique, to avoid double spending. This feature can be useful in [high-frequency trading](../glossary#high-frequency-trading-hft) concurrent systems when a lot of requests is being generated in a short period of time.
4. **params of request**

Example:

```
{
    "request": "/api/v4/trade-account/balance",
    "nonce": 1594297865,
    "nonceWindow": true,
    "ticker": "BTC"
}
```

### Headers

With every request you need to provide next **headers**:

1. `'Content-type': 'application/json'`
2. `'X-TXC-APIKEY': api_key` - where api_key is your public WhiteBit API key
3. `'X-TXC-PAYLOAD': payload'` - where payload is base64-encoded body data
4. `'X-TXC-SIGNATURE': signature` - where signature is `hex(HMAC_SHA512(payload), key=api_secret))`

### Examples of auth

To help you get started with our API, we've created the [API Quick start helper](https://github.com/whitebit-exchange/api-quickstart) library. It supports the following languages:

```json
1. Python
2. PHP
3. NodeJS
4. Go
5. JavaScript
6. Kotlin
7. DotNet
8. Ruby
9. C++
10. Rust
```

### Errors:

**"Too many requests."** - this error occurs if the [**"nonce"**](./../glossary.md#nonce) in your current request is equal or is lower than the one in the previous request.

---

```json
{
  "message": [["Too many requests."]],
  "result": [],
  "success": false
}
```

---

**"This action is unauthorized. Enable your key in API settings"** - this error occurs when you are using disabled API key. You can enable your API key in account API settings https://whitebit.com/settings/api. Note: Your API key is disabled automatically after disabling 2FA. Also, the API key will be disabled if the request is received from unknown IP (if IP access restrictions are turned on).

---

```json
{
  "message": [["This action is unauthorized. Enable your key in API settings"]],
  "result": [],
  "success": false
}
```

---

**"You don't have permission to use this endpoint. Please contact support for more details"** - this error occurs when you are using an endpoint that is disabled for a specific API key in API key settings. You can enable endpoint by editing "Endpoint access restrictions" for this API key in account settings https://whitebit.com/settings/api.

---

```json
{
  "message": [
    [
      "You don't have permission to use this endpoint. Please contact support for more details"
    ]
  ],
  "result": [],
  "success": false
}
```

---

**"Invalid payload"** - this error occurs when the data that was provided in the body of the request doesn't match the **base64-decoded** payload.

---

```json
{
  "message": [["Invalid payload."]],
  "result": [],
  "success": false
}
```

---

**"Unauthorized request."** - this error occurs if the request was signed incorrectly.

---

```json
{
  "message": [["Unauthorized request."]],
  "result": [],
  "success": false
}
```

---

**"[Nonce](./../glossary.md#nonce) not provided."** - this error occurs if your request is missing **"nonce"** in the request body.

---

```json
{
  "message": [["Nonce not provided."]],
  "result": [],
  "success": false
}
```

---

**"Your [nonce](./../glossary.md#nonce) is more than 5 seconds lesser than the current nonce"** - this error occurs if **nonceWindow** set to true, but you passed not a valid timestamp in **nonce** - it should be current timestamp in milliseconds.

---

```json
{
  "message": [
    ["Your nonce is more than 5 seconds lesser than the current nonce"]
  ],
  "result": [],
  "success": false
}
```

---

**"Invalid nonceWindow."** - this error occurs if **nonceWindow** is not boolean.

---

```json
{
  "message": [["Invalid nonceWindow."]],
  "result": [],
  "success": false
}
```

---

**"Request not provided."** - this error occurs if your request is missing **"request"** path in the request body.

---

```json
{
  "message": [["Request not provided."]],
  "result": [],
  "success": false
}
```

---
