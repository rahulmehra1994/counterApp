    export var compToggle = (comp)=>{
        return {
          type: "TOGGLE_COMP",
          payload: comp
        }
    }

    export var compToggle2 = (comp, val)=>{
        console.log("hll");
        return {
            type: 'COMP_TOGGLE',
            payload: {comp: comp, val: val}
        }
    }

    export var totalCalPrice = ()=>{
        // let sum = 0;
        // if(this.state.tiffins.length > 0){
        //     this.state.tiffins.map((item, index)=>{
        //     sum += item.price * item.quantity
        //     })
        // }
        // return sum;
    }

    export var totalCalTiffins = ()=>{
        // let sum = 0;
        // if(this.state.tiffins.length > 0){
        //     this.state.tiffins.map((item, index)=>{
        //     sum += item.quantity
        //     })
        // }
        // return sum;
    }


    export var submitFinal = () => {
        // let data = {
        //   quantity: this.state.numberOfTiffins,
        //   date: this.state.date, 
        //   type: this.state.type, 
        //   price: this.state.price
        // };
    
        // this.state.tiffins.push(data);
        
        // this.setState({tiffins: this.state.tiffins}, async ()=>{
        //   try {
        //     await AsyncStorage.setItem('tiffinsArray', JSON.stringify(this.state.tiffins));
        //   } catch (error) {
        //     console.log("Error in entering data in AsyncStorage!");
        //   }
        // });
    
        // console.log(this.state.tiffins);
      }

      export var setTiffinQty = (val) => {
        return{
            type: "SET_TIFFINS_QTY",
            payload: val
        }
      }

      export var setTiffins = (data) => {
        return{
            type: "SET_TIFFINS",
            payload: data
        }
      }

