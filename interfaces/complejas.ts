(()=> {

    interface Client {
        name: string;
        age?: number;
        address? : Address ; //* cuando se empeizan a anidar props, se recomienda
        //     id:number ;
        //     zip_code:string;
        //     city: string;
        // }
        // getFullAddress(id: string) => string //* esto funciona en las tipos en las interfaces es de la sgte manera:
        getFullAddress(id: string) : void;
    }

    interface Address {
        id: number,
        zip_code: string,
        city : string
    }

    const client : Client = {
        name : 'Alejandro',
        age : 25,
        address: {
            id:127,
            zip_code:'050003',
            city : 'Belen'
        },
        getFullAddress(){
            return this.address?.zip_code
        }
    }

    const client2 : Client =  {
        name: 'Melissa',
        age: 23,
        getFullAddress(){
            return this.address?.zip_code
        }
    }

    
})()