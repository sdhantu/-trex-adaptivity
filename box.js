class Box
//class followed by the name of the class Box
  {
    constructor()
    // constructor is used to initialie the object
    {
      this.x =100;
      // this is used to refer to the object
      this.y = 200
      this.w = 50;
      this.h = 50;
    }
    
    show()
    {
      rect(this.x,this.y,this.w,this.h)
    }
    
    //write function to set the width of the box
    set_width(){
      this.w = 1
    }

  }

  
