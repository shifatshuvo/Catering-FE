export interface signUp{
  name: String,
  email: String,
  password: String,
  address: string,
  package: string
}

export interface signIn{
  email: String,
  password: String
}

export interface user {
  id: number,
  name: string,
  email: string,
  password: string,
  phone: string,
  role: string
}

export interface order {
  id: number,
  user: {
    id: number,
    name: string,
    email: string,
    phone: string
  },
  quantity: number,
  price: number,
  package: {
    id: number,
    name: string,
    description: string,
    price: number
  }
}
// export interface order {
//   id: number;
//   user: {
//     id: number,
//     name: string,
//     email: string,
//     phone: string
//   },
//   quantity: number,
//   price: number,
//   package: {
//     id: number,
//     name: string,
//     description: string,
//     price: number
//   }
// }

export interface odr {
    orderId: number,
    userId : number,
    packageId : number
    quantity: number
}

export interface CreateOrder {
    userId : number,
    packageId : number
    quantity: number
}

export interface pack {
  id: number,
  name: string,
  description: string,
  imgUrl: string,
  price: number
}





// export interface odr {
//   user: {
//     id: number
//   },
//   pkg: {
//     id: number
//   },
//   qty: number
// }