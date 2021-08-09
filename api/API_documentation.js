//////////////////////////////////////////
users
/////////////////////////////////////////

\\\\\\ endpoints \\\\\\
-------------------------
Get user data for 1 user
-------------------------
endpoint: '/users/:user_id'
request type: GET
returns:
{
  "id": 1,
  "first_name": "Rochell",
  "last_name": "Dukes",
  "email": "rdukes0@java.com",
  "username": "rdukes0",
  "password": "e5G2LXapGUz",
  "guest": false
}

-------------------------
Check users email & password (LOGIN)
-------------------------
endpoint: '/users/login'
request type: get
additional body params: {
  email: string,
  password: string,
}
returns:
{
  "hasCorrectCredentials": true,
  "id": 1
}
/* OR */
{
  "hasCorrectCredentials": false,
  "id": null
}

-----------------
Create 1 new user
-----------------
endpoint: '/users'
request type: POST
additional body params: {
  first_name: string
  last_name: string,
  email: string,
  username: string,
  password: string,
  guest: boolean
}
returns: n/a

--------------------------
Get all friends for 1 user
--------------------------
endpoint: '/users/:user_id/friends'
request type: GET
returns:
[
  {
      "id": 2,
      "first_name": "Zachary",
      "last_name": "Dessant",
      "username": "zachrose234"
      "email": "zdessant1@spiegel.de",
      "password": "eglXuvyD",
      "guest": false
  },
  {
      "id": 3,
      "first_name": "Lalo",
      "last_name": "Ciabatteri",
      "username": "zachrose234",
      "email": "lciabatteri2@dot.gov",
      "password": "C9llAB8Zl",
      "guest": false
  },
  {
      "id": 4,
      "first_name": "Alexander",
      "last_name": "Stancer",
      "username": "zachrose234",
      "email": "astancer3@hugedomains.com",
      "password": "29qyT1dU",
      "guest": false
  }
]

----------------------------
Create new friend for 1 user
----------------------------
endpoint: '/users/:user_id/friends'
request type: POST
additional body params: {
  friend_id: number,
}
returns: n/a


/////////////////////////////////////
orders
////////////////////////////////////

--------------------------
get 1 order by order ID
--------------------------
endpoint: '/orders/:order_id'
request type: GET
returns:

{
    "id": 1,
    "user_id": 5,
    "food": "PIZZA",
    "quantity": 3,
    "price": "3.50",
    "date": "12/20/2020",
    "food_id": 423,
    "group_id": 1,
    "restaurant_id": 32,
    "live": false,
}


--------------------------
Get all orders
--------------------------
endpoint: '/orders'
request type: GET

query parameters:
__________________________________________
| PARAMETER | TYPE   | DESCRIPTION        |
|  group_id | number | filter by group id |
|  user_id  | number | filter by user id  |


returns:
[
  {
      "id": 1,
      "user_id": 5,
      "food": "PIZZA",
      "quantity": 3,
      "price": "3.50",
      "date": "12/20/2020",
      "food_id": 423,
      "group_id": 1,
      "restaurant_id": 32
  },
  {
      "id": 2,
      "user_id": 5,
      "food": "cheese",
      "quantity": 12,
      "price": "400",
      "date": "12/20/2020",
      "food_id": 643,
      "group_id": 1,
      "restaurant_id": 32
  },
]

--------------------------
Create new order by user ID
--------------------------
endpoint: '/orders'
request type: POST
additional body params: {
  user_id: number,
  food: string,
  quantity: number,
  price: DECIMAL number, // eg. 3.00 NOT 3
  date: string, // for now, can change to date if we have a easy way of getting date
  food_id: number,
  group_id: number,
  restaurant_id: number,
  live: boolean,
}
returns: [6] // returns an array of the inserted order's ID

//////////////////////////////////////////
payments
//////////////////////////////////////////

----------------------------------
Get all payment options by user ID
----------------------------------
endpoint: '/payments'
request type: GET

query parameters:
__________________________________________
| PARAMETER | TYPE   | DESCRIPTION        |
|  user_id  | number | filter by user id  |

returns:
[
  {
      "id": 1,
      "name": "main",
      "card_number": 123456323,
      "card_type": "VISA",
      "exp_date": "1020",
      "cvv": 232,
      "zip_code": 10011,
      "user_id": 1
  },
  {
      "id": 2,
      "name": "secondary",
      "card_number": 123456323,
      "card_type": "VISA",
      "exp_date": "1020",
      "cvv": 232,
      "zip_code": 10011,
      "user_id": 1
  },
  {
      "id": 3,
      "name": "naughtystuff",
      "card_number": 123456323,
      "card_type": "VISA",
      "exp_date": "1020",
      "cvv": 232,
      "zip_code": 10011,
      "user_id": 1
  },
  {
      "id": 4,
      "name": "wooo",
      "card_number": 123456323,
      "card_type": "VISA",
      "exp_date": "1020",
      "cvv": 232,
      "zip_code": 10011,
      "user_id": 1
  }
]

--------------------------------------
Create 1 new payment option
--------------------------------------
endpoint: '/payments'
request type: POST
additional body params: {
  user_id: number,
  name: string,
  card_number: number,
  card_type: string,
  exp_date: string // works best for '05/24' style formats
  cvv: number,
  zip_code: number,
}
returns: [6] // returns an array of the inserted payment option's ID


//////////////////////////////////////////////////
groups
//////////////////////////////////////////////////

--------------------------------------
create 1 new group
--------------------------------------
endpoint: '/groups'
request type: POST
additional body params: {
  due_date: string, // most dates are currently strings for ease of testing. lmk if you want to switch to date
}
returns:
[
  {
      "id": 6,
      "due_date": "12/20/2021 9:53pm" // keep in mind this is not how its always going to look like
  }
]

--------------------------------------
get group data by group ID
--------------------------------------
endpoint: '/groups/:group_id'
request type: GET

returns:
[
  {
      "id": 6,
      "due_date": "12/20/2021 9:53pm" // keep in mind this is not how its always going to look like
  }
]

//////////////////////////////////////////////////
comments
//////////////////////////////////////////////////

--------------------------------------
get all comments by group ID
--------------------------------------
endpoint: '/comments'
request type: GET
query parameters:
__________________________________________
| PARAMETER | TYPE   | DESCRIPTION        |
| group_id  | number | filter by group id |

returns:
[
  {
      "id": 3,
      "user_id": 2,
      "text": "i hate blue oceans",
      "date": "12/12/2020",
      "group_id": 1
  },
  {
      "id": 4,
      "user_id": 2,
      "text": "i hate blue oceans",
      "date": "12/12/2020",
      "group_id": 1
  }
]

--------------------------------------
create new comment by user ID
--------------------------------------
endpoint: '/comments'
additional body params: {
  user_id: number,
  text: string,
  date: string,
  group_id: number,
}
request type: POST
returns: [6] // returns an array of the inserted comment's ID


//////////////////////////////////////////////////
restaurants
//////////////////////////////////////////////////


--------------------------------------
Get all restaurants by zipcode
--------------------------------------
endpoint: '/restaurants/:zip_code'
request type: GET
returns:
// NOTE: by default the zipcode will always be 90045, but you still have to provide some number
// in the :zipcode, otherwise it will not return anything
[
  {
      "name": "Melody Bar & Grill",
      "street": "9132 S Sepulveda Blvd Los Angeles, CA 90045",
      "cuisines": [
          "American"
      ],
      "hours": "Daily:10am-2am"
  },
  {
      "name": "Asian Street Eats by Chef Hung",
      "street": "380 World Way Los Angeles, CA 90045",
      "cuisines": [
          "Asian"
      ],
      "hours": "Daily:11am-5pm"
  }
]

--------------------------------------
Get all menu items by restaurant ID
--------------------------------------
endpoint: '/restaurants/:restaurant_id/menu'
request type: GET
returns:
[
  {
      "restaurant_id": 1,
      "menu_item_id": 1,
      "menu_item_name": "Jalapeno Calamari Late Night",
      "menu_item_description": "",
      "menu_item_pricing": 11,
      "menu_category": "entree"
  },
  {
      "restaurant_id": 1,
      "menu_item_id": 2,
      "menu_item_name": "Chicken Sliders Late Night",
      "menu_item_description": "",
      "menu_item_pricing": 11,
      "menu_category": "entree"
  },
  {
      "restaurant_id": 1,
      "menu_item_id": 3,
      "menu_item_name": "Caesar Salad Late Night",
      "menu_item_description": "",
      "menu_item_pricing": 9,
      "menu_category": "entree"
  },
  {...}
]