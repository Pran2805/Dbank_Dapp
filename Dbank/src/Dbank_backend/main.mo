import Debug "mo:base/Debug";
import Text "mo:base/Text";
import Float "mo:base/Float";
 
actor DBank{
  stable var currentValue:Float = 3000;

 public func topUp(amount: Float): async () {
    Debug.print(debug_show(amount));
    currentValue += amount;
    Debug.print(debug_show(currentValue));
};


  public func withdraw (amount: Float): async Text{
    Debug.print(debug_show(amount));
    if(amount > currentValue){
      return "Insufficient Value"
    }else{
    currentValue -= amount;
    Debug.print(debug_show(currentValue));
     return "Your current balance is " # Float.toText(currentValue) # " rs";

    }
  };

 
    public query func checkBalance(): async Float{
      Debug.print(debug_show(currentValue));
    return currentValue;
  }; 
};
